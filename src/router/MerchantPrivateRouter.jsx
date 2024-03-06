import React from "react";
import { ROLE, TOKEN } from "../constant";
import { Navigate, Outlet } from "react-router-dom";

const MerchantPrivateRouter = () => {
  if (TOKEN.isMerchant()) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};

export default MerchantPrivateRouter;
