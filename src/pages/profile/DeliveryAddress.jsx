import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import {
  AppUserAddressControllerApi,
  LocationControllerApi,
} from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import { LOCATION_KIND, TOAST } from "../../constant";
import { GlobalContext } from "../../App";

const locationApi = new LocationControllerApi(ApiClientSingleton.getInstance());
const addressApi = new AppUserAddressControllerApi(
  ApiClientSingleton.getInstance()
);
const DeliveryAddress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [locations, setLocations] = useState({});
  const onClose = () => {
    setIsOpen(false);
    setData({});
  };
  const toast = useToast();
  const { reload, setReload } = useContext(GlobalContext);
  const [addresses, setAddresses] = useState([]);

  const getLocation = async (kind, parentId) => {
    locationApi.locationControllerGetInfoListWithFilter(
      kind,
      { parentId },
      (err, data) => {
        if (data) {
          const res = data?.data;
          setLocations({ ...locations, [kind]: res });
        }
      }
    );
  };

  const saveAddress = () => {
    if (data?.isCreate) {
      addressApi.appUserAddressControllerCreateModel(data, (err, data) => {
        if (data) {
          TOAST.success(toast, "Địa chỉ", "Thêm địa chỉ thành công");
          setData({});
          setIsOpen(false);
        } else {
          TOAST.success(toast, "Địa chỉ", "Thêm địa chỉ không thành công");
        }
      });
    } else {
      addressApi.appUserAddressControllerUpdateModel(data, (err, data) => {
        if (data) {
          TOAST.success(toast, "Địa chỉ", "Cập nhật địa chỉ thành công");
          setData({});
          setIsOpen(false);
        } else {
          TOAST.success(toast, "Địa chỉ", "Cập nhật địa chỉ không thành công");
        }
      });
    }
  };

  useEffect(() => {
    getLocation(LOCATION_KIND.PROVINCE);
  }, []);

  useEffect(() => {
    addressApi.appUserAddressControllerGetInfoListWithFilter((err, data) => {
      if (data) {
        setAddresses(data?.data);
      }
    });
  }, [reload]);
  return (
    <>
      <Flex width={"960px"} minH={"600px"} direction={"column"} gap={"16px"}>
        <Flex justify={"flex-end"}>
          <Button
            colorScheme="blue"
            leftIcon={<FiPlus />}
            onClick={() => {
              setIsOpen(true);
              setData({ ...data, isCreate: true });
            }}
          >
            Thêm địa chỉ mới
          </Button>
        </Flex>
        <Divider py={"8px"} />
        <Flex direction={"column"} gap={"16px"}>
          {addresses?.map((a) => {
            return (
              <>
                <Flex justify={"space-between"} align={"center"}>
                  <Box>
                    <Text>
                      <strong>Họ tên: </strong>
                      {a?.receiverFullName}
                    </Text>
                    <Text>
                      <strong>Số điện thoại: </strong>
                      {a?.phone}
                    </Text>
                    <Text>
                      <strong>Địa chỉ: </strong>
                      {`${a?.addressDetails}, 
                      ${[a?.wardName, a?.districtName, a?.provinceName].join(
                        ", "
                      )}`}
                    </Text>
                  </Box>
                  <Flex direction={"column"} align={"flex-end"} gap={"16px"}>
                    <Flex align={"center"} gap={"8px"}>
                      <Button
                        borderRadius={"4px"}
                        colorScheme="blue"
                        onClick={() => {
                          setData({ ...a, isCreate: false });
                          setIsOpen(true);
                        }}
                      >
                        Cập nhật
                      </Button>
                      <Button
                        borderRadius={"4px"}
                        colorScheme="red"
                        onClick={() => {
                          addressApi.appUserAddressControllerDeleteModelById(
                            a?.id,
                            (err, data) => {
                              if (data) {
                                TOAST.success(
                                  toast,
                                  "Địa chỉ",
                                  "Xoá địa chỉ thành công"
                                );
                                setReload(!reload);
                              } else {
                                TOAST.success(
                                  toast,
                                  "Địa chỉ",
                                  "Xoá địa chỉ không thành công"
                                );
                              }
                            }
                          );
                        }}
                        isDisabled={a?.default}
                      >
                        Xoá
                      </Button>
                    </Flex>
                    <Button
                      isDisabled={a?.default}
                      borderRadius={"4px"}
                      colorScheme="gray"
                      onClick={() => {
                        addressApi.appUserAddressControllerChangeDefault(
                          a?.id,
                          (err, data) => {
                            if (data) {
                              TOAST.success(
                                toast,
                                "Địa chỉ",
                                "Cập nhật địa chỉ thành công"
                              );
                              setReload(!reload);
                            } else {
                              TOAST.success(
                                toast,
                                "Địa chỉ",
                                "Cập nhật địa chỉ không thành công"
                              );
                            }
                          }
                        );
                      }}
                    >
                      Thiết lập mặc định
                    </Button>
                  </Flex>
                </Flex>
                <Divider py={"8px"} />
              </>
            );
          })}
        </Flex>
      </Flex>

      {/* modal address */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent minW={"600px"}>
          <ModalHeader>Địa chỉ mới</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex my={"10px"} align={"center"} gap={"16px"} flex={1}>
              <FormControl>
                <FormLabel>Họ và tên</FormLabel>
                <Input
                  placeholder="Họ và tên"
                  value={data?.receiverFullName}
                  onChange={(e) =>
                    setData({ ...data, receiverFullName: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Số điện thoại</FormLabel>
                <Input
                  placeholder="Số điện thoại"
                  value={data?.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </FormControl>
            </Flex>
            <Flex my={"10px"} gap={"16px"} align={"center"}>
              <FormControl isRequired>
                <FormLabel>Tỉnh/Thành phố</FormLabel>
                <Select
                  placeholder="Tỉnh/Thành phố"
                  onChange={(e) => {
                    setData({ ...data, provinceId: e.target.value });
                    getLocation(LOCATION_KIND.DISTRICT, e.target.value);
                  }}
                  value={data?.provinceId}
                >
                  {locations[LOCATION_KIND.PROVINCE]?.map((p) => {
                    return (
                      <option key={p?.id} value={p?.id}>
                        {p?.name}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Quận/Huyện</FormLabel>
                <Select
                  placeholder="Quận/Huyện"
                  onChange={(e) => {
                    setData({ ...data, districtId: e.target.value });
                    getLocation(LOCATION_KIND.WARD, e.target.value);
                  }}
                  value={data?.districtId}
                >
                  {locations[LOCATION_KIND.DISTRICT]?.map((p) => {
                    return (
                      <option key={p?.id} value={p?.id}>
                        {p?.name}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Xã/Phường</FormLabel>
                <Select
                  placeholder="Xã/Phường"
                  onChange={(e) => {
                    setData({ ...data, wardId: e.target.value });
                  }}
                  value={data?.wardId}
                >
                  {locations[LOCATION_KIND.WARD]?.map((p) => {
                    return (
                      <option key={p?.id} value={p?.id}>
                        {p?.name}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
            </Flex>
            <Flex my={"10px"}>
              <FormControl>
                <FormLabel>Địa chỉ cụ thể</FormLabel>
                <Textarea
                  placeholder={"Địa chỉ cụ thể"}
                  value={data?.addressDetails}
                  onChange={(e) =>
                    setData({ ...data, addressDetails: e.target.value })
                  }
                />
              </FormControl>
            </Flex>
            <Flex my={"10px"}>
              <FormControl display={"flex"} alignItems={"center"} gap={"8px"}>
                <FormLabel m={"0"}>Đặt mặt định</FormLabel>
                <Checkbox
                  onChange={(e) => {
                    setData({ ...data, default: e.target.checked });
                  }}
                />
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                saveAddress();
              }}
            >
              Lưu
            </Button>
            <Button onClick={onClose}>Huỷ</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeliveryAddress;
