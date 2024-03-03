const TOKEN = {
  setAccessToken: (accessToken) =>
    localStorage.setItem("access-token", accessToken),
  setRefreshToken: (refreshToken) =>
    localStorage.setItem("refresh-token", refreshToken),
  getAccessToken: () => localStorage.getItem("access-token"),
  getRefreshToken: () => localStorage.getItem("refresh-token"),
  clear: () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
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

const CHOOSE_KIND = {
  SINGLE_CHOICE: "SINGLE_CHOICE",
  MULTIPLE_CHOICE: "MULTIPLE_CHOICE",
};

const IMAGES = {
  getImage: (url) => ENV.API_URL + url,
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
  CHOOSE_KIND,
  IMAGES,
};
