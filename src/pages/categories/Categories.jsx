import React, { createContext, useContext, useEffect, useState } from "react";
import MainBoard from "../../components/mainBoard";
import BreadcrumbCustom from "../../components/breadcrumb";
import { Box } from "@chakra-ui/layout";
import { TABLE_USER_DATA } from "../../mock";
import TableCateogries from "./components/tableCategory";
import { SystemProductCategoryControllerApi } from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";

const categoryApi = new SystemProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
const ManageCategoriesContent = () => {
  const links = [
    { link: "/dashboard", name: "Home" },
    { link: "#", name: "Manage Categoties" },
  ];
  const { reload } = useContext(CategoriesContext);
  const [categories, setCategories] = useState([]);
  const getCategories = () => {
    try {
      categoryApi.systemProductCategoryControllerGetInfoListWithFilter(
        {},
        (error, data, response) => {
          const res = data?.data;
          setCategories(res);
          console.log(res);
        }
      );
    } catch (err) {}
  };

  useEffect(() => {
    getCategories();
  }, [reload]);
  return (
    <>
      <BreadcrumbCustom links={links} />
      <Box>
        <TableCateogries
          title={"Bảng Category"}
          captions={["Tên", "Môt tả", "Trạng thái", "Hành động"]}
          data={categories}
        />
      </Box>
    </>
  );
};

const CategoriesContext = createContext();

const ManageCategories = () => {
  const [reload, setReload] = useState(false);
  return (
    <CategoriesContext.Provider value={{ reload, setReload }}>
      <ManageCategoriesContent />
    </CategoriesContext.Provider>
  );
};

export { CategoriesContext };

export default ManageCategories;
