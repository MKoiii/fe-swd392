import React from "react";
import { ROLE, TOKEN } from "../constant";
import { Navigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const CommonPrivateRouter = () => {
  const accessToken = TOKEN.getAccessToken();
  if (!accessToken) {
    return <Navigate to="/login" />;
  }
  const decoded = jwtDecode(accessToken);
  const roles = decoded?.resource_access?.auction?.roles;
  const isAuthen =
    roles.includes(ROLE.SUPER_ADMIN) ||
    roles.includes(ROLE.CMS) ||
    roles.includes(ROLE.USER);
  if (accessToken && isAuthen) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default CommonPrivateRouter;
