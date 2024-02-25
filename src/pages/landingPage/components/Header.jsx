import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Logo from "./Logo";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

const MenuItem = (props) => {
  const { children, isLast, to = "/", ...rest } = props;
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        p={8}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
        {...props}
      >
        <Flex align="center">
          <Logo height={44} />
        </Flex>

        <Box flexBasis={{ base: "100%", md: "auto" }}>
          <Flex
            align={["center", "center", "center", "center"]}
            justify={["center", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            pt={[4, 4, 0, 0]}
          >
            <MenuItem to="/home">Home</MenuItem>
            <MenuItem to="/how">How It works </MenuItem>
            <MenuItem to="/faetures">Features </MenuItem>
            <MenuItem to="/pricing">Pricing </MenuItem>
            <MenuItem to="/register">
              <Button
                size="sm"
                rounded="md"
                _hover={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.600",
                    "primary.600",
                  ],
                }}
              >
                Create Account
              </Button>
            </MenuItem>
            <MenuItem to="/login">
              <Button
                size="sm"
                rounded="md"
                bg={"blue.100"}
                _hover={{
                  bg: [
                    "primary.100",
                    "primary.100",
                    "primary.600",
                    "primary.600",
                  ],
                }}
              >
                Login
              </Button>
            </MenuItem>
            <MenuItem to="#">
              <Box
                position={"relative"}
                w={"40px"}
                h={"32px"}
                padding={"4px"}
                borderRadius={"6px"}
                _hover={{
                  backgroundColor: "rgba(0,0,0,0.1)",
                }}
              >
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                <Text position={"absolute"} top={-4} right={-2}>
                  0
                </Text>
              </Box>
            </MenuItem>
            <MenuItem to="#">
              <ColorModeSwitcher />
            </MenuItem>
          </Flex>
        </Box>
      </Flex>
      <Divider mb={4} borderColor={"#cecece"} />
    </>
  );
};

export default Header;
