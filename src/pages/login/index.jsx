import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Logo } from "./components/logo";
import { OAuthButtonGroup } from "./components/oauthButtonGroup";
import PasswordField from "./components/passwordField";
import { Link, useNavigate } from "react-router-dom";
import { logInWithEmailAndPassword } from "../../utils/firebase";
import { ROLE, TOKEN } from "../../constant";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../App";

const Login = () => {
  const { auth, updateAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const res = await logInWithEmailAndPassword(email, password);
      // console.log(res?.user?.accessToken);
      if (res && res.user) {
        const accessToken = res?.user?.accessToken;
        TOKEN.setAccessToken(accessToken);
        TOKEN.setRefreshToken(res?.user?.refreshToken);
        const decoded = jwtDecode(accessToken);
        const roles = decoded?.resource_access?.auction?.roles;
        console.log(res.user);
        const isCms =
          roles.includes(ROLE.CMS) ||
          roles.includes(ROLE.SUPER_ADMIN) ||
          roles.includes(ROLE.MERCHANT);
        const isUser = roles.includes(ROLE.USER);
        updateAuth({
          isLogin: true,
          userInfo: res.user,
        });
        if (isCms) {
          navigate("/dashboard");
        } else if (isUser) {
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container
      maxW="lg"
      py={{
        base: "12",
        md: "24",
      }}
      px={{
        base: "0",
        sm: "8",
      }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Logo />
          <Stack
            spacing={{
              base: "2",
              md: "3",
            }}
            textAlign="center"
          >
            <Heading
              size={{
                base: "xs",
                md: "sm",
              }}
            >
              Đăng nhập
            </Heading>
            <Text color="fg.muted">
              Bạn chưa có tài khoản?{" "}
              <Link style={{ color: "blue" }} to={"/register"}>
                Đăng ký ngay
              </Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{
            base: "0",
            sm: "8",
          }}
          px={{
            base: "4",
            sm: "10",
          }}
          bg={{
            base: "transparent",
            sm: "bg.surface",
          }}
          boxShadow={{
            base: "none",
            sm: "md",
          }}
          borderRadius={{
            base: "none",
            sm: "xl",
          }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <PasswordField
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Stack>
            <HStack justify="space-between">
              <Checkbox defaultChecked>Lưu đăng nhập</Checkbox>
              <Button
                variant="text"
                size="sm"
                onClick={() => navigate("/forgot-pass")}
              >
                Quên mật khẩu?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button onClick={handleLogin}>Đăng nhập</Button>
              {/* <HStack>
                <Divider />
                <Text textStyle="sm" whiteSpace="nowrap" color="fg.muted">
                  or continue with
                </Text>
                <Divider />
              </HStack>
              <OAuthButtonGroup /> */}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
