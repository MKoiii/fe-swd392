import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Icon,
  Divider,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  MenuList,
  useColorModeValue,
  MenuDivider,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Logo from "./Logo";
import React, { useContext, useEffect, useState } from "react";
import { FiBell, FiChevronDown, FiShoppingCart } from "react-icons/fi";
import { CART, TOKEN } from "../../../constant";
import { GlobalContext } from "../../../App";

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
  const userInfo = TOKEN.getUserInfo();
  const navigate = useNavigate();
  const [numberOfItems, setNumberOfItems] = useState(0);
  const { reload } = useContext(GlobalContext);

  useEffect(() => {
    setNumberOfItems(CART.getNumberOfItems());
  }, [reload]);
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
            {userInfo ? (
              <></>
            ) : (
              <>
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
              </>
            )}
            <MenuItem to="/cart">
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
                <Text
                  position={"absolute"}
                  top={-4}
                  right={-2}
                  border={"1px #cecece solid"}
                  borderRadius={"50%"}
                  px={"6px"}
                >
                  {numberOfItems}
                </Text>
              </Box>
            </MenuItem>
            <MenuItem to="#">
              <ColorModeSwitcher />
            </MenuItem>
            <Flex alignItems={"center"}>
              {TOKEN.getUserInfo() ? (
                <Menu>
                  <MenuButton
                    py={2}
                    transition="all 0.3s"
                    _focus={{ boxShadow: "none" }}
                  >
                    <HStack>
                      <Avatar
                        size={"sm"}
                        src={
                          "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                        }
                      />
                      <VStack
                        display={{ base: "none", md: "flex" }}
                        alignItems="flex-start"
                        spacing="1px"
                        ml="2"
                      >
                        <Text fontSize="sm">
                          {TOKEN.getUserInfo()?.displayName}
                        </Text>
                        <Text
                          fontSize="xs"
                          color="gray.600"
                          width={"48px"}
                          whiteSpace={"nowrap"}
                          textOverflow={"ellipsis"}
                          overflow={"hidden"}
                        >
                          {TOKEN.getUserInfo()?.email}
                        </Text>
                      </VStack>
                      <Box display={{ base: "none", md: "flex" }}>
                        <FiChevronDown />
                      </Box>
                    </HStack>
                  </MenuButton>
                  <MenuList bg={"white"} borderColor={"gray.200"}>
                    <MenuItem
                      p={"4px 24px"}
                      _hover={{
                        backgroundColor: "rgba(134, 134, 134, 0.3)",
                      }}
                      m={"0 !important"}
                      onClick={() => navigate("/user-profile")}
                    >
                      Thông tin cá nhân
                    </MenuItem>
                    <MenuItem
                      p={"4px 24px"}
                      _hover={{
                        backgroundColor: "rgba(134, 134, 134, 0.3)",
                      }}
                      m={"0 !important"}
                      onClick={() => navigate("/my-order")}
                    >
                      Đơn hàng
                    </MenuItem>
                    {TOKEN.isMerchant() ? (
                      <MenuItem
                        p={"4px 24px"}
                        _hover={{
                          backgroundColor: "rgba(134, 134, 134, 0.3)",
                        }}
                        m={"0 !important"}
                        onClick={() => navigate("/manage-products")}
                      >
                        Quản lí quản phẩm
                      </MenuItem>
                    ) : (
                      <></>
                    )}
                    {TOKEN.isUser() ? (
                      <MenuItem
                        p={"4px 24px"}
                        _hover={{
                          backgroundColor: "rgba(134, 134, 134, 0.3)",
                        }}
                        m={"0 !important"}
                        onClick={() => navigate("/register-merchant")}
                      >
                        Đăng ký merchant
                      </MenuItem>
                    ) : (
                      <></>
                    )}

                    <MenuDivider />
                    <MenuItem
                      p={"4px 24px"}
                      _hover={{
                        backgroundColor: "rgba(134, 134, 134, 0.3)",
                      }}
                      m={"0 !important"}
                      onClick={() => {
                        navigate("/login");
                        TOKEN.clear();
                      }}
                    >
                      Đăng xuất
                    </MenuItem>
                  </MenuList>
                </Menu>
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Divider mb={4} borderColor={"#cecece"} />
    </>
  );
};

export default Header;
