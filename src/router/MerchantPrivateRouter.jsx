import React from "react";
import { ROLE, TOKEN } from "../constant";
import { Navigate, Outlet } from "react-router-dom";
import MainBoard from "../components/mainBoard";

const MerchantPrivateRouter = () => {
  if (TOKEN.isMerchant()) {
    return <MainBoard children={<Outlet />} />;
  }
  return <Navigate to="/login" />;
};

export default MerchantPrivateRouter;
