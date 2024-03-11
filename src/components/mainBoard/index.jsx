import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUsers,
} from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ROLE, TOKEN } from "../../constant";
import { AuthContext } from "../../App";
import { FaUserTag } from "react-icons/fa";

const LinkItems = [
  {
    name: "Home",
    icon: FiHome,
    path: "/dashboard",
    roles: [ROLE.MERCHANT, ROLE.CMS, ROLE.SUPER_ADMIN],
  },
  {
    name: "Users",
    icon: FiUsers,
    path: "/manage-users",
    roles: [ROLE.CMS, ROLE.SUPER_ADMIN],
  },
  {
    name: "Categories",
    icon: BiCategory,
    path: "/manage-categories",
    roles: [ROLE.CMS, ROLE.SUPER_ADMIN],
  },
  {
    name: "Products",
    icon: MdOutlineSell,
    path: "/manage-products",
    roles: [ROLE.MERCHANT],
  },
  {
    name: "Merchants",
    icon: FaUserTag,
    path: "/manage-merchants",
    roles: [ROLE.CMS, ROLE.SUPER_ADMIN],
  },
];

const checkRole = (userRoles, roles) => {
  for (let role of userRoles) {
    if (roles?.includes(role)) {
      return true;
    }
  }
  return false;
};

const SidebarContent = ({ onClose, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          cursor={"pointer"}
          onClick={() => {
            if (TOKEN.isCMS()) {
              navigate("/dashboard");
            } else {
              navigate("/home");
            }
          }}
        >
          Logo
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => {
        if (checkRole(TOKEN.getRoles(), link?.roles)) {
          return (
            <NavItem key={link.name} icon={link.icon} path={link?.path}>
              {link.name}
            </NavItem>
          );
        }
      })}
    </Box>
  );
};

const NavItem = ({ icon, path, children, ...rest }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(location.pathname.includes(path));

  useEffect(() => {
    setActive(location.pathname.includes(path));
  }, [location.pathname]);
  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={() => navigate(path ? path : "#")}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        backgroundColor={active ? "cyan.400" : "#fff"}
        color={active ? "#fff" : "gray.800"}
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  const { auth } = useContext(AuthContext);
  const { userInfo } = auth;
  const navigate = useNavigate();
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text>

      <HStack spacing={{ base: "0", md: "6" }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={"center"}>
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
                  <Text fontSize="sm">{userInfo?.displayName}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem onClick={() => navigate("/my-profile")}>
                Profile
              </MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  navigate("/login");
                  TOKEN.clear();
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

const MainBoard = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" backgroundColor={"#fff"}>
        {/* Content */}
        {children}
      </Box>
    </Box>
  );
};

export default MainBoard;
