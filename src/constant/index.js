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
  MALE: {
    value: "MALE",
    name: "Nam",
  },
  FEMALE: {
    value: "FEMALE",
    name: "Nữ",
  },
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

const LOCATION_KIND = {
  PROVINCE: "PROVINCE",
  WARD: "WARD",
  DISTRICT: "DISTRICT",
};

const MERCHANT_STATUS = {
  DRAFT: {
    value: "DRAFT",
    name: "Nháp",
    color: "gray.400",
  },
  IN_REVIEW: {
    value: "IN_REVIEW",
    name: "Chờ kiểm duyệt",
    color: "blue.400",
  },
  ACTIVE: {
    value: "ACTIVE",
    name: "Hoạt động",
    color: "green.400",
  },
  INACTIVE: {
    value: "INACTIVE",
    name: "Vô hiệu hoá",
    color: "yellow.400",
  },
  LOCK: {
    value: "LOCK",
    name: "Khoá",
    color: "red.400",
  },
};

const CART = {
  addToCart: (item) => {
    try {
      var items = localStorage.getItem("auction_cart")
        ? JSON.parse(localStorage.getItem("auction_cart"))
        : [];
      const isExist =
        items?.filter((i) => i?.sku?.id === item?.sku?.id)?.length > 0;
      if (!isExist) {
        items.push(item);
      } else {
        items = items?.map((i) =>
          i?.sku?.id === item?.sku?.id
            ? { ...i, quantity: i?.quantity + item?.quantity }
            : i
        );
      }
      localStorage.setItem("auction_cart", JSON.stringify(items));
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  removeItem: (item) => {
    try {
      var items = localStorage.getItem("auction_cart")
        ? JSON.parse(localStorage.getItem("auction_cart"))
        : [];
      items = items?.filter((i) => i?.sku?.id !== item?.sku?.id);
      localStorage.setItem("auction_cart", JSON.stringify(items));
    } catch (err) {}
  },
  getNumberOfItems: () => {
    try {
      const items = localStorage.getItem("auction_cart")
        ? JSON.parse(localStorage.getItem("auction_cart"))
        : [];

      return items?.length;
    } catch (err) {
      return 0;
    }
  },
  getItems: () => {
    try {
      const items = localStorage.getItem("auction_cart")
        ? JSON.parse(localStorage.getItem("auction_cart"))
        : [];

      return items;
    } catch (err) {
      return [];
    }
  },
  setItemPayment: (itemPayment) => {
    try {
      localStorage.setItem("auction_item_payment", JSON.stringify(itemPayment));
    } catch (err) {}
  },
  getItemPayment: () => {
    try {
      const items = localStorage.getItem("auction_item_payment")
        ? JSON.parse(localStorage.getItem("auction_item_payment"))
        : [];

      return items;
    } catch (err) {
      return [];
    }
  },
};

const ORDER_STATE = {
  NEW: {
    value: "NEW",
    name: "Chờ thanh toán",
    color: "gray.400",
  },
  PAID: {
    value: "PAID",
    name: "Chờ giao hàng",
    color: "blue.400",
  },
  DELIVERED: {
    value: "DELIVERED",
    name: "Đã giao hàng",
    color: "yellow.400",
  },
  COMPLETED: {
    value: "COMPLETED",
    name: "Hoàn thành",
    color: "green.400",
  },
};

const PAYMENT_METHOD = {
  E_WALLET_PAYPAL: {
    value: "E_WALLET_PAYPAL",
    name: "PAYPAL",
  },
  COD: {
    value: "COD",
    name: "COD",
  },
  CARD: {
    value: "CARD",
    name: "CARD",
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
  LOCATION_KIND,
  MERCHANT_STATUS,
  CART,
  ORDER_STATE,
  PAYMENT_METHOD,
};
