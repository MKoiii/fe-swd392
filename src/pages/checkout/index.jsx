import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../cart";
import {
  Badge,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GlobalContext } from "../../App";
import { CART, TOAST } from "../../constant";
import {
  AppOrderControllerApi,
  AppUserAddressControllerApi,
} from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import { updateItemPayment } from "../../redux/slice";

const addressApi = new AppUserAddressControllerApi(
  ApiClientSingleton.getInstance()
);
const orderApi = new AppOrderControllerApi(ApiClientSingleton.getInstance());
const Checkout = () => {
  const [items, setItems] = useState({});
  const [totalInfo, setTotalInfo] = useState({ totalPrice: 0, numbers: 0 });
  const navigate = useNavigate();
  const payments = useSelector((state) => state.processPayment);
  const dispatchEvent = useDispatch();
  const [itemPayment, setItemPayment] = useState(payments);
  const [addresses, setAddresses] = useState([]);
  const [addressDefault, setAddressDefault] = useState({});
  const [addressSelect, setAddressSelect] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = React.useState();
  const toast = useToast();

  const onClose = () => {
    setIsOpen(false);
    setValue(addressDefault?.id);
  };

  const getJoinVariantsName = (item) => {
    const configs = item?.productConfigs ? item?.productConfigs : [];
    const names = [];
    const variantIds = item?.sku?.variantIds ? item?.sku?.variantIds : [];
    for (let c of configs) {
      for (let v of c?.variants) {
        if (variantIds?.includes(v?.id)) {
          names?.push(v?.name);
        }
      }
    }
    return names?.join(", ");
  };

  const getPricePayment = (listItem) => {
    return listItem
      ?.map((item) => item?.quantity * item?.sku?.price)
      .reduce((acc, cur) => acc + cur, 0);
  };

  const handleCreateOrder = () => {
    const data = {
      userAddressId: addressSelect?.id,
      paymentMethod: "E_WALLET_PAYPAL",
      orderItems: itemPayment?.map((i) => {
        return {
          skuId: i?.sku?.id,
          quantity: i?.quantity,
        };
      }),
    };
    itemPayment?.forEach((i) => CART.removeItem(i));
    orderApi.appOrderControllerCreateModel(data, (err, data, response) => {
      if (data) {
        window.open(data?.data.paymentUrl);
        dispatchEvent(updateItemPayment([]));
        CART.setItemPayment([]);
      } else {
        TOAST.error(toast, "Đặt hàng", response?.body?.message)
      }
    });
  };

  useEffect(() => {
    var tmp = payments;
    if (tmp || tmp.length === 0) {
      tmp = CART.getItemPayment();
    }
    if (tmp) {
      setItemPayment(tmp);
      setItems(Object.groupBy(tmp, ({ merchant }) => merchant?.id));
      setTotalInfo({
        totalPrice: getPricePayment(tmp),
        numbers: tmp?.length,
      });
    }
  }, [payments]);

  useEffect(() => {
    addressApi.appUserAddressControllerGetInfoListWithFilter((err, data) => {
      if (data) {
        const res = data?.data;
        setAddresses(res);
        res?.forEach((a) => {
          if (a?.default) {
            setAddressDefault(a);
            setAddressSelect(a);
            setValue(`${a?.id}`);
            return;
          }
        });
      }
    });
  }, []);

  return (
    <>
      <Box w={{ xl: "1200px", lg: "900px" }} mb={"32px"}>
        <Flex
          w={"100%"}
          direction={"column"}
          p={"16px 32px"}
          bg={"gray.300"}
          borderRadius={"6px"}
          mb={"32px"}
        >
          <Flex
            h={"60px"}
            p={"16px"}
            justify={"space-between"}
            align={"center"}
          >
            <Flex
              justify={"space-between"}
              flex={1}
              align={"center"}
              gap={"8px"}
            >
              <Box flex={0.4}>
                <Text>Sản phẩm</Text>
              </Box>
              <Flex flex={0.6} justify={"space-around"} align={"center"}>
                <Text align={"center"} flex={0.25}>
                  Đơn giá
                </Text>
                <Text flex={0.25} align={"center"}>
                  Số lượng
                </Text>
                <Text flex={0.25} align={"center"}>
                  Thành tiền
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        {Object.values(items)?.map((list) => {
          const merchant = list[0]?.merchant;
          return (
            <Flex
              w={"100%"}
              direction={"column"}
              p={"16px 32px"}
              bg={"gray.300"}
              borderRadius={"6px"}
              gap={"16px"}
            >
              <Flex
                h={"60px"}
                p={"16px"}
                borderBottom={"1px #a4a4a4 solid"}
                align={"center"}
                gap={"8px"}
              >
                <Text>{merchant?.name}</Text>
              </Flex>
              <Flex
                p={"16px"}
                borderBottom={"1px #cecece solid"}
                direction={"column"}
                gap={"8px"}
              >
                {list?.map((i) => {
                  return (
                    <Flex justify={"space-between"} align={"center"}>
                      <Flex flex={0.4} align={"center"} gap={"8px"}>
                        <Flex align={"center"} gap={"8px"}>
                          <Image src={i?.sku?.image} />
                          <Flex direction={"column"}>
                            <Text>{i?.product?.name}</Text>
                            <Text>{getJoinVariantsName(i)}</Text>
                          </Flex>
                        </Flex>
                      </Flex>
                      <Flex
                        flex={0.6}
                        justify={"space-around"}
                        align={"center"}
                      >
                        <Text flex={0.25} align={"center"}>
                          {i?.sku?.price?.toLocaleString()}VNĐ
                        </Text>
                        <Text flex={0.25} align={"center"}>
                          {i?.quantity}
                        </Text>
                        <Text flex={0.25} align={"center"}>
                          {(i?.sku?.price * i?.quantity).toLocaleString()}VNĐ
                        </Text>
                      </Flex>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
          );
        })}
        <Flex
          w={"100%"}
          direction={"column"}
          p={"16px 32px"}
          bg={"gray.300"}
          borderRadius={"6px"}
          my={"32px"}
        >
          <Flex
            h={"60px"}
            p={"16px"}
            justify={"space-between"}
            align={"center"}
          >
            <Flex
              justify={"space-between"}
              flex={1}
              align={"center"}
              gap={"8px"}
            >
              <Box flex={0.3}>
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  {[addressSelect?.receiverFullName, addressSelect?.phone].join(
                    ", "
                  )}
                </Text>
              </Box>
              <Box flex={0.6}>
                <Text fontWeight={"400"} fontSize={"16px"}>
                  {[
                    addressSelect?.addressDetails,
                    addressSelect?.wardName,
                    addressSelect?.districtName,
                    addressSelect?.provinceName,
                  ].join(", ")}
                </Text>
              </Box>
              <Box flex={0.1} onClick={() => setIsOpen(true)}>
                <Button colorScheme="blue">Thay đổi</Button>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={"100%"}
          direction={"column"}
          p={"16px 32px"}
          bg={"gray.300"}
          borderRadius={"6px"}
          mt={"32px"}
        >
          <Flex
            h={"60px"}
            p={"16px"}
            justify={"space-between"}
            align={"center"}
          >
            <Flex
              justify={"space-between"}
              flex={1}
              align={"center"}
              gap={"8px"}
            >
              <Box flex={0.4}></Box>
              <Flex flex={0.6} justify={"end"} align={"center"}>
                <Flex
                  flex={1}
                  align={"center"}
                  justify={"flex-end"}
                  gap={"32px"}
                >
                  <Text>{`Tổng thanh toán (${
                    totalInfo?.numbers
                  } sản phẩm): ${totalInfo?.totalPrice?.toLocaleString()}VNĐ`}</Text>
                  <Button colorScheme="blue" onClick={handleCreateOrder}>
                    Đặt hàng
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>

      {/*  */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW={"600px"}>
          <ModalHeader>Địa chỉ của tôi</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <RadioGroup onChange={setValue} value={value}>
              <Flex direction="column" gap={"32px"}>
                {addresses?.map((a) => {
                  return (
                    <Radio value={`${a?.id}`}>
                      <Flex direction={"column"} gap={"8px"}>
                        <Flex align={"center"} gap={"8px"}>
                          <Flex align={"end"} gap={"8px"}>
                            <Text
                              fontWeight={500}
                              fontSize={"20px"}
                              _after={{
                                content: '""',
                                marginLeft: "8px",
                                border: "1px #cecece solid",
                              }}
                            >
                              {a?.receiverFullName}
                            </Text>
                            <Text fontWeight={400} fontSize={"18px"}>
                              {a?.phone}
                            </Text>
                          </Flex>
                          {a?.default ? (
                            <Badge colorScheme="blue">Mặc định</Badge>
                          ) : (
                            <></>
                          )}
                        </Flex>
                        <Text fontWeight={"400"} fontSize={"16px"}>
                          {[
                            addressDefault?.addressDetails,
                            addressDefault?.wardName,
                            addressDefault?.districtName,
                            addressDefault?.provinceName,
                          ].join(", ")}
                        </Text>
                      </Flex>
                    </Radio>
                  );
                })}
              </Flex>
            </RadioGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                addresses?.forEach((a) => {
                  if (`${a?.id}` === value) {
                    setAddressSelect(a);
                    return;
                  }
                  setIsOpen(false);
                });
              }}
            >
              Xác nhận
            </Button>
            <Button onClick={onClose}>Huỷ</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Checkout;
