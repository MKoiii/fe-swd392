import React, { useContext } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useToast,
} from "@chakra-ui/react";
import { IMAGES, ORDER_STATE, TOAST } from "../../constant";
import { AppOrderControllerApi } from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import { GlobalContext } from "../../App";

const orderApi = new AppOrderControllerApi(ApiClientSingleton.getInstance());
const MyOrderDetail = ({ orders, orderState }) => {
  const getJoinVariantsName = (item) => {
    const names = [];
    if (item) {
      for (let i of item) {
        names?.push(i?.name);
      }
    }
    return names?.join(", ");
  };
  const toast = useToast();
  const { reload, setReload } = useContext(GlobalContext);
  const handlePayment = (paymentId) => {
    orderApi.appOrderControllerGetPaymentUrl(paymentId, (err, data) => {
      if (data) {
        const res = data?.data;
        window.open(res?.paymentUrl);
      }
    });
  };
  return (
    <Box w={{ xl: "1200px", lg: "900px" }} mb={"32px"}>
      <Flex
        w={"100%"}
        direction={"column"}
        p={"16px 32px"}
        bg={"gray.300"}
        borderRadius={"6px"}
        mb={"32px"}
      >
        <Flex h={"60px"} p={"16px"} justify={"space-between"} align={"center"}>
          <Flex justify={"space-between"} flex={1} align={"center"} gap={"8px"}>
            <Box flex={0.4}>
              <Text>Sản phẩm</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {orders?.length > 0 ? (
        <Flex
          w={"100%"}
          direction={"column"}
          p={"16px 32px"}
          bg={"gray.300"}
          borderRadius={"6px"}
          gap={"32px"}
        >
          {orders?.map((order) => {
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
                        src={IMAGES.getImage(
                          order?.firstItem?.extraVariants[0]?.image
                        )}
                      />
                      <Flex direction={"column"}>
                        <Text fontSize={"xl"}>
                          {order?.firstItem?.productName}
                        </Text>
                        <Text fontSize={"md"} color={"gray.600"}>
                          Phân loại hàng:{" "}
                          {getJoinVariantsName(order?.firstItem?.extraVariants)}
                        </Text>
                        <Text fontSize={"md"}>
                          x{order?.firstItem?.quantity}
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex direction={"column"} align={"flex-end"}>
                      <Text fontSize={"lg"}>
                        Thành tiền: {order?.subTotal?.toLocaleString()}VNĐ
                      </Text>
                      {orderState === ORDER_STATE.NEW.value ? (
                        <Button
                          onClick={() => {
                            handlePayment(order?.id);
                          }}
                        >
                          Thanh toán
                        </Button>
                      ) : orderState === ORDER_STATE.DELIVERED.value ? (
                        <Button
                          onClick={() => {
                            orderApi.appOrderControllerChangeStatus(
                              {
                                id: order?.id,
                                status: ORDER_STATE.COMPLETED.value,
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
                          Đã nhận hàng
                        </Button>
                      ) : (
                        <></>
                      )}
                    </Flex>
                  </Flex>
                </Flex>
                <Divider />
              </>
            );
          })}
        </Flex>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default MyOrderDetail;
