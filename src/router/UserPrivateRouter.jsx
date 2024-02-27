import React from "react";
import { ROLE, TOKEN } from "../constant";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";

const UserPrivateRouter = () => {
  const accessToken = TOKEN.getAccessToken();
  if (!accessToken) {
    return <Navigate to="/login" />;
  }
  const decoded = jwtDecode(accessToken);
  const roles = decoded?.resource_access?.auction?.roles;
  if (roles.includes(ROLE.USER)) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default UserPrivateRouter;
