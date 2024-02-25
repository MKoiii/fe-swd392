const TOKEN = {
  setAccessToken: (accessToken) =>
    localStorage.setItem("access-token", accessToken),
  setRefreshToken: (refreshToken) =>
    localStorage.setItem("refresh-token", refreshToken),
  getAccessToken: () => localStorage.getItem("access-token"),
  getRefreshToken: () => localStorage.getItem("refresh-token"),
};

const ENV = {
  API_URL: process.env.REACT_APP_BASE_URL,
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

export { TOKEN, ENV, TOAST };
