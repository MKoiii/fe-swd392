import React, { createContext, useContext, useEffect, useState } from "react";
import MainBoard from "../../components/mainBoard";
import BreadcrumbCustom from "../../components/breadcrumb";
import { Box } from "@chakra-ui/layout";
import { DEFAULE_PAGE_SIZE } from "../../constant";
import TableMerchants from "./components/tableMerchant";
import { SystemMerchantControllerApi } from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";

const merchantApi = new SystemMerchantControllerApi(
  ApiClientSingleton.getInstance()
);
const ManageMerchantsContent = () => {
  const links = [
    { link: "/dashboard", name: "Trang chủ" },
    { link: "#", name: "Quản lý đối tác" },
  ];
  const [merchants, setMerchants] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getMerchants = () => {
    try {
      merchantApi.systemMerchantControllerGetInfoPageWithFilter(
        {},
        (err, data) => {
          const res = data?.data;
          setTotalPage(data?.totalPages);
          setMerchants(res);
        }
      );
    } catch (err) {}
  };

  useEffect(() => {
    getMerchants();
  }, []);
  return (
    <>
      <BreadcrumbCustom links={links} />
      <Box>
        <TableMerchants
          title={"Bảng đối tác"}
          captions={[
            "Tên cửa hàng",
            "Số điện thoại",
            "Địa chỉ",
            "Trạng thái",
            "Hành động",
          ]}
          data={merchants}
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </>
  );
};

const ManageMerchants = () => {
  const [reload, setReload] = useState();
  return (
    <>
      <MainBoard children={<ManageMerchantsContent />} />
    </>
  );
};

export default ManageMerchants;
