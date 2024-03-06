import React from "react";
import { ROLE, TOKEN } from "../constant";
import { Navigate, Outlet } from "react-router-dom";

const AdminAndMerchantPrivateRouter = () => {
  if (TOKEN.isMerchant() || TOKEN.isCMS) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default AdminAndMerchantPrivateRouter;
