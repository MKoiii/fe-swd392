import React, { useEffect, useState } from "react";
import BreadcrumbCustom from "../../components/breadcrumb";
import TableOrders from "./components/tableOrders";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { MerchantOrderControllerApi } from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import { ORDER_STATE } from "../../constant";
import { FaSearch } from "react-icons/fa";

const orderApi = new MerchantOrderControllerApi(
  ApiClientSingleton.getInstance()
);
const ManageOrders = () => {
  const links = [
    { link: "/dashboard", name: "Trang chủ" },
    { link: "#", name: "Quản lý Đơn hàng" },
  ];

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState({
    receiverFullName: "",
    status: "",
    phone: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    orderApi.merchantOrderControllerGetInfoPageWithFilter(
      {
        page: currentPage - 1,
        size: 10,
      },
      (err, data) => {
        if (data) {
          setOrders(data?.data);
          setTotalPage(data?.totalPages);
        }
      }
    );
  }, [currentPage]);
  return (
    <>
      <BreadcrumbCustom links={links} />
      <Box>
        <Flex
          direction={"column"}
          gap={"16px"}
          mt={"32px"}
          border={"1px #eee solid"}
          p={"16px 32px"}
          borderRadius={"6px"}
        >
          <Flex align={"end"} gap={"16px"}>
            <FormControl>
              <FormLabel>Tên người nhận</FormLabel>
              <Input
                placeholder="Tên người nhận"
                value={filter.receiverFullName}
                onChange={(e) => {
                  setFilter({ ...filter, receiverFullName: e.target.value });
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Số điện thoại</FormLabel>
              <Input
                placeholder="Số điện thoại"
                value={filter.phone}
                onChange={(e) => {
                  setFilter({ ...filter, phone: e.target.value });
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Trạng thái</FormLabel>
              <Select
                value={filter.status}
                onChange={(e) => {
                  setFilter({ ...filter, status: e.target.value });
                }}
              >
                <option value={""}>--</option>
                <option value={ORDER_STATE.NEW.value}>
                  {ORDER_STATE.NEW.name}
                </option>
                <option value={ORDER_STATE.PAID.value}>
                  {ORDER_STATE.PAID.name}
                </option>
                <option value={ORDER_STATE.DELIVERED.value}>
                  {ORDER_STATE.DELIVERED.name}
                </option>
                <option value={ORDER_STATE.COMPLETED.value}>
                  {ORDER_STATE.COMPLETED.name}
                </option>
              </Select>
            </FormControl>
            <Box>
              <Button
                leftIcon={<FaSearch />}
                onClick={() => {
                  orderApi.merchantOrderControllerGetInfoPageWithFilter(
                    {
                      ...filter,
                      page: currentPage - 1,
                      size: 10,
                    },
                    (err, data) => {
                      if (data) {
                        setOrders(data?.data);
                        setTotalPage(data?.totalPages);
                      }
                    }
                  );
                }}
              >
                Tìm kiếm
              </Button>
            </Box>
          </Flex>
        </Flex>
        <TableOrders
          title={"Bảng sản phẩm"}
          captions={[
            "Người nhận",
            "Số điện thoại",
            "Tổng tiền",
            "Trạng thái",
            "Phương thức thanh toán",
            "Địa chỉ nhật hàng",
            "Hành động",
          ]}
          data={orders}
          currentPage={currentPage}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </>
  );
};

export default ManageOrders;
