import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import {
  addUserDoc,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
} from "../../utils/firebase";
import { TOAST, TOKEN } from "../../constant";
import AuthControllerApi from "../../api/generated/generate-api/api/AuthControllerApi";
import ApiClientSingleton from "../../api/apiClientImpl";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const toast = useToast();

  const authApi = new AuthControllerApi(ApiClientSingleton.getInstance());
  const hanldeRegister = () => {
    if (password?.password !== password?.confirm) {
      TOAST.error(toast, "Đăng ký", "Mặt khẩu không khớp");
      return;
    }
    console.log(email);
    registerWithEmailAndPassword(
      `${firstName} ${lastName}`,
      email,
      password?.password
    ).then((res) => {
      TOKEN.setAccessToken(res.accessToken);
      authApi.authControllerRegister({}, (err, data) => {
        if (data) {
          TOAST.success(toast, "Đăng ký", "Đăng ký thành công");
          addUserDoc(res?.uid, `${firstName} ${lastName}`, "local", email);
        } else {
          TOAST.error(toast, "Đăng ký", "Đăng ký không thành công");
        }
      });
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Đăng ký
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Họ & Tên đệm</FormLabel>
                  <Input
                    type="text"
                    placeholder="Họ & Tên đệm"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Tên</FormLabel>
                  <Input
                    type="text"
                    placeholder="Tên"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Mật khẩu</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Mật khẩu"
                  value={password?.password}
                  onChange={(e) =>
                    setPassword({ ...password, password: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirm-password" isRequired>
              <FormLabel>Mật khẩu xác nhận</FormLabel>
              <InputGroup>
                <Input
                  type={showPasswordConfirm ? "text" : "password"}
                  placeholder="Mật khẩu xác nhận"
                  value={password?.confirm}
                  onChange={(e) =>
                    setPassword({ ...password, confirm: e.target.value })
                  }
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPasswordConfirm(
                        (showPasswordConfirm) => !showPasswordConfirm
                      )
                    }
                  >
                    {showPasswordConfirm ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={hanldeRegister}
              >
                Đăng ký
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Bạn đã có tài khoản?{" "}
                <Link to={"/login"}>
                  <Text color={"blue.400"}>Đăng nhập ngay</Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
