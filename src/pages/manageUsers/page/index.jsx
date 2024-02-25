import React from "react";
import BreadcrumbCustom from "../../../components/breadcrumb";
import { Box } from "@chakra-ui/react";
import { TABLE_USER_DATA } from "../../../mock";
import TableUsers from "../components/tableUser";
const ManageUserContent = () => {
  const links = [
    { link: "/dashboard", name: "Home" },
    { link: "#", name: "Manage Users" },
  ];
  return (
    <>
      <BreadcrumbCustom links={links} />
      <Box>
        <TableUsers
          title={"Users Table"}
          captions={["Author", "Function", "Status", "Employed", ""]}
          data={TABLE_USER_DATA}
        />
      </Box>
    </>
  );
};

export default ManageUserContent;
