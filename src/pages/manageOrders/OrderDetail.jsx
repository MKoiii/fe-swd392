import {
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Image,
  Input,
  Select,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import FileUpload from "../../components/upload";
import LocationControllerApi from "../../api/generated/generate-api/api/LocationControllerApi";
import ApiClientSingleton from "../../api/apiClientImpl";
import {
  GENDER,
  IMAGES,
  LOCATION_KIND,
  MERCHANT_STATUS,
  ORDER_STATE,
  PAYMENT_METHOD,
  TOAST,
} from "../../constant";
import {
  AppMerchantControllerApi,
  MediaControllerApi,
  MerchantOrderControllerApi,
} from "../../api/generated/generate-api";
import { MdClose } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import BreadcrumbCustom from "../../components/breadcrumb";
import moment from "moment";
import { SiFacebook, SiInstagram, SiZalo } from "react-icons/si";
import { GlobalContext } from "../../App";

const orderApi = new MerchantOrderControllerApi(
  ApiClientSingleton.getInstance()
);
const OrderDetail = () => {
  const { id } = useParams();
  const links = [
    { link: "/dashboard", name: "Trang chủ" },
    { link: "/manage-orders", name: "Quản lý đơn hàng" },
    { link: "#", name: "Thông tin chi tiết" },
  ];

  const textColor = useColorModeValue("gray.700", "white");
  const toast = useToast();
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const { reload, setReload } = useContext(GlobalContext);
  const getJoinVariantsName = (item) => {
    const names = [];
    for (let i of item) {
      names?.push(i?.name);
    }
    return names?.join(", ");
  };

  useEffect(() => {
    if (id) {
      orderApi.merchantOrderControllerGetDetailsById(id, (err, data) => {
        if (data) {
          const res = data?.data;
          setOrder(res);
        }
      });
    }
  }, [id, reload]);
  return (
    <Flex flexDirection={"column"} gap={"16px"}>
      <BreadcrumbCustom links={links} />
      <Text fontSize="xl" color={textColor} fontWeight="bold">
        Thông tin chi tiết đối tác
      </Text>
      <Flex flexDirection={"column"} gap={"16px"}>
        <Flex
          flex={1}
          direction={"column"}
          border={"1px #eee solid"}
          borderRadius={"6px"}
          p={"32px"}
          gap={"16px"}
        >
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Tên người nhận:
            </Text>
            <Text fontSize="lg"> {order?.receiverFullName}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Số điện thoại:
            </Text>
            <Text fontSize="lg"> {order?.phone}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Địa chỉ:
            </Text>
            <Text fontSize="lg">
              {[order?.wardName, order?.districtName, order?.provinceName].join(
                ", "
              )}
            </Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Tổng tiền:
            </Text>
            <Text fontSize="lg"> {order?.subTotal?.toLocaleString()} VNĐ</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Phương thức thanh toán:
            </Text>
            <Text fontSize="lg">
              {order?.paymentMethod
                ? PAYMENT_METHOD[order?.paymentMethod]?.name
                : ""}
            </Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Mô tả:
            </Text>
            <Text fontSize="lg"> {order?.description}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Trạng thái:
            </Text>
            <Badge
              bg={order?.status ? ORDER_STATE[order?.status]?.color : ""}
              color={"white"}
              fontSize="16px"
              p="3px 10px"
              borderRadius="8px"
            >
              {order?.status ? ORDER_STATE[order?.status]?.name : ""}
            </Badge>
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          direction={"column"}
          p={"16px 32px"}
          bg={"gray.300"}
          borderRadius={"6px"}
          gap={"32px"}
        >
          {order?.orderItems?.map((item) => {
            return (
              <>
                <Flex justify={"space-between"} align={"center"}>
                  <Flex
                    flex={1}
                    align={"center"}
                    gap={"8px"}
                    justify={"space-between"}
                  >
                    <Flex align={"center"} gap={"8px"}>
                      <Image
                        boxSize={"100px"}
                        src={IMAGES.getImage(item?.extraVariants[0]?.image)}
                      />
                      <Flex direction={"column"}>
                        <Text fontSize={"xl"}>{item?.productName}</Text>
                        <Text fontSize={"md"} color={"gray.600"}>
                          Phân loại hàng:{" "}
                          {getJoinVariantsName(item?.extraVariants)}
                        </Text>{" "}
                        <Text fontSize={"md"} color={"gray.600"}>
                          Lưu ý: {item?.note}
                        </Text>
                        <Text fontSize={"md"}>x{item?.quantity}</Text>
                      </Flex>
                    </Flex>
                    <Flex direction={"column"} align={"flex-end"}>
                      <Text fontSize={"lg"}>
                        Thành tiền: {item?.price?.toLocaleString()}VNĐ
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Divider />
              </>
            );
          })}
        </Flex>
      </Flex>
      <Flex align={"center"} gap={"16px"}>
        {order?.status === ORDER_STATE.PAID.value ? (
          <Button
            color={"white"}
            bg={"blue.400"}
            onClick={() => {
              orderApi.merchantOrderControllerChangeStatus(
                {
                  id: id,
                  status: ORDER_STATE.DELIVERED.value,
                },
                (err, data) => {
                  if (data) {
                    TOAST.success(
                      toast,
                      "Đơn hàng",
                      "Cập nhật đơn hàng thành công"
                    );
                    setReload(!reload);
                  } else {
                    TOAST.error(
                      toast,
                      "Đơn hàng",
                      "Cập nhật đơn hàng không thành công"
                    );
                  }
                }
              );
            }}
          >
            Xác nhận giao hàng
          </Button>
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

export default OrderDetail;
