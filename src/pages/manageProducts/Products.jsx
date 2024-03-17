import React, { createContext, useContext, useEffect, useState } from "react";
import MainBoard from "../../components/mainBoard";
import BreadcrumbCustom from "../../components/breadcrumb";
import { Box } from "@chakra-ui/layout";
import ApiClientSingleton from "../../api/apiClientImpl";
import { AppProductControllerApi } from "../../api/generated/generate-api";
import TableProducts from "./components/tableProducts";
import { DEFAULE_PAGE_SIZE } from "../../constant";
import { ProductContext } from "./AddProduct";

const categoryApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
const ManageProductsContent = () => {
  const links = [
    { link: "/dashboard", name: "Trang chủ" },
    { link: "#", name: "Quản lý sản phẩm" },
  ];
  const { reload } = useContext(ProductContext);
  const [Products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getProducts = () => {
    try {
      categoryApi.appProductControllerGetInfoPageWithFilter(
        {
          page: currentPage - 1,
          size: DEFAULE_PAGE_SIZE,
        },
        (error, data, response) => {
          const res = data?.data;
          setProducts(res);
          setTotalPage(data?.totalPages);
        }
      );
    } catch (err) {}
  };

  useEffect(() => {
    getProducts();
  }, [reload]);
  return (
    <>
      <BreadcrumbCustom links={links} />
      <Box>
        <TableProducts
          title={"Bảng sản phẩm"}
          captions={["Tên", "Loại", "Trạng thái", "Hành động"]}
          data={Products}
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </>
  );
};

const ManageProducts = () => {
  const [reload, setReload] = useState();
  return (
    <ProductContext.Provider value={{ reload, setReload }}>
      <ManageProductsContent />
    </ProductContext.Provider>
  );
};

export default ManageProducts;
