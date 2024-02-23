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

export { TOKEN, ENV };
