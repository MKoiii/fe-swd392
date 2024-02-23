import React from "react";
import BreadcrumbCustom from "../../../components/breadcrumb";
import { ENV } from "../../../constant";

const DashboardContent = () => {
  const links = [
    { link: "#", name: "Dashboard" },
    { link: "#", name: "Dashboard" },
  ];
  return (
    <>
      <BreadcrumbCustom links={links} />
      {ENV.API_URL}
    </>
  );
};

export default DashboardContent;
