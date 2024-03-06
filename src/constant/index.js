import { jwtDecode } from "jwt-decode";

const TOKEN = {
  setAccessToken: (accessToken) =>
    localStorage.setItem("access-token", accessToken),
  setRefreshToken: (refreshToken) =>
    localStorage.setItem("refresh-token", refreshToken),
  setUser: (user) => {
    if (user) {
      const data = {
        displayName: user?.displayName,
        email: user?.email,
        emailVerified: user?.emailVerified,
        phoneNumber: user?.phoneNumber,
        photoURL: user?.photoURL,
      };
      localStorage.setItem("user-auction", JSON.stringify(data));
    }
  },
  getAccessToken: () => localStorage.getItem("access-token"),
  getRefreshToken: () => localStorage.getItem("refresh-token"),
  getUserInfo: () => {
    const data = localStorage.getItem("user-auction");
    if (data) {
      return JSON.parse(data);
    }
    return undefined;
  },
  clear: () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    localStorage.removeItem("user-auction");
  },
  getRoles: () => {
    const token = localStorage.getItem("access-token");
    if (token) {
      const decoded = jwtDecode(token);
      const roles = decoded?.resource_access?.auction?.roles;
      return roles;
    }
    return [];
  },
  isMerchant: () => {
    const token = localStorage.getItem("access-token");
    if (token) {
      const decoded = jwtDecode(token);
      const roles = decoded?.resource_access?.auction?.roles;
      return roles?.includes(ROLE.MERCHANT);
    }
    return false;
  },
  isUser: () => {
    const token = localStorage.getItem("access-token");
    if (token) {
      const decoded = jwtDecode(token);
      const roles = decoded?.resource_access?.auction?.roles;
      return roles?.includes(ROLE.USER);
    }
    return false;
  },
  isCMS: () => {
    const token = localStorage.getItem("access-token");
    if (token) {
      const decoded = jwtDecode(token);
      const roles = decoded?.resource_access?.auction?.roles;
      return roles?.includes(ROLE.CMS) || roles?.includes(ROLE.SUPER_ADMIN);
    }
    return false;
  },
};

const ENV = {
  API_URL: process.env.REACT_APP_SERVER_URL,
};

const TOAST = {
  success: (toast, title, message) => {
    toast({
      title: title,
      description: message,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  },
  warning: (toast, title, message) => {
    toast({
      title: title,
      description: message,
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  },
  error: (toast, title, message) => {
    toast({
      title: title,
      description: message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  },
};

const ROLE = {
  SUPER_ADMIN: "SUPER_ADMIN",
  CMS: "CMS",
  USER: "USER",
  MERCHANT: "MERCHANT",
};

const DEFAULE_PAGE_SIZE = 10;

const STATUS = {
  ACTIVE: true,
  INACTIVE: false,
};
const STATUS_STR = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};

const GENDER = {
  MALE: "MALE",
  FEMALE: "FEMALE",
};

const CHOICE_KIND = {
  SINGLE_CHOICE: "SINGLE_CHOICE",
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
};

const IMAGES = {
  getImage: (url) => {
    if (url) {
      return ENV.API_URL + url;
    }
  },
};

export {
  TOKEN,
  ENV,
  TOAST,
  ROLE,
  DEFAULE_PAGE_SIZE,
  STATUS,
  GENDER,
  STATUS_STR,
  CHOICE_KIND,
  IMAGES,
};
