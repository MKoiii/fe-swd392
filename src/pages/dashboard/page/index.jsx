import React from "react";
import BreadcrumbCustom from "../../../components/breadcrumb";
import { Box } from "@chakra-ui/react";
import Authors from "../components";
import { TABLE_USER_DATA } from "../../../mock";
const DashboardContent = () => {
  const links = [
    { link: "#", name: "Dashboard" },
    { link: "#", name: "Dashboard" },
  ];
  return (
    <>
      <BreadcrumbCustom links={links} />
      <Box>
        <Authors
          title={"Authors Table"}
          captions={["Author", "Function", "Status", "Employed", ""]}
          data={TABLE_USER_DATA}
        />
      </Box>
    </>
  );
};

export default DashboardContent;
