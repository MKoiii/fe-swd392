import React from "react";
import MainBoard from "../../components/mainBoard";
import BreadcrumbCustom from "../../components/breadcrumb";
import { Box } from "@chakra-ui/layout";
import { TABLE_USER_DATA } from "../../mock";
import TableCateogries from "./components/tableCategory";

const ManageCategoriesContent = () => {
  const links = [
    { link: "/dashboard", name: "Home" },
    { link: "#", name: "Manage Categoties" },
  ];
  return (
    <>
      <BreadcrumbCustom links={links} />
      <Box>
        <TableCateogries
          title={"Bảng Category"}
          captions={["Tên", "Môt tả", "Trạng thái", "Hành động"]}
          data={TABLE_USER_DATA}
        />
      </Box>
    </>
  );
};

const ManageCategories = () => {
  return (
    <>
      <MainBoard children={<ManageCategoriesContent />} />
    </>
  );
};

export default ManageCategories;
