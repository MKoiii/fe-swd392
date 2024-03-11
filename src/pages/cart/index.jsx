import React, { createContext, useContext, useEffect, useState } from "react";
import { CART } from "../../constant";
import ItemCart from "./itemCart";
import { Box, Button, Checkbox, Flex, Image, Text } from "@chakra-ui/react";
import { GlobalContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateItemPayment } from "../../redux/slice";

const CartContext = createContext({});
const Cart = () => {
  const [items, setItems] = useState({});
  const [selectItems, setSelectItem] = useState({});
  const [itemPayment, setItemPayment] = useState([]);
  const { reload, setReload } = useContext(GlobalContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const addItemPayment = (item) => {
    if (itemPayment?.filter((i) => i?.sku?.id === item?.sku?.id)?.length > 0) {
      return;
    }
    itemPayment.push(item);
  };

  const handleSelectItems = (merchantId, skuId, isChecked) => {
    const groupItems = Object.groupBy(
      CART.getItems(),
      ({ merchant }) => merchant?.id
    );
    var result = {};
    var payments = [];
    if (!merchantId && !skuId) {
      for (let list of Object.values(groupItems)) {
        const merchant = list[0]?.merchant;
        var tmp = merchant?.id in selectItems ? selectItems[merchant?.id] : {};
        for (let item of list) {
          tmp = { ...tmp, [item?.sku?.id]: isChecked };
        }
        result = { ...result, [merchant?.id]: tmp };
      }
    } else if (merchantId && !skuId) {
      var tmp = merchantId in selectItems ? selectItems[merchantId] : {};
      for (let list of Object.values(groupItems)) {
        const merchant = list[0]?.merchant;
        if (merchant?.id === merchantId) {
          for (let item of list) {
            tmp = { ...tmp, [item?.sku?.id]: isChecked };
          }
        }
      }
      result = { ...result, [merchantId]: tmp };
    } else if (merchantId && skuId) {
      var tmp = merchantId in selectItems ? selectItems[merchantId] : {};
      for (let list of Object.values(groupItems)) {
        const merchant = list[0]?.merchant;
        if (merchant?.id === merchantId) {
          for (let item of list) {
            if (item?.sku?.id === skuId) {
              tmp = { ...tmp, [item?.sku?.id]: isChecked };
            }
          }
        }
      }
      result = { ...result, [merchantId]: tmp };
    }
    for (let list of Object.values(groupItems)) {
      const merchant = list[0]?.merchant;
      var tmp = merchant?.id in result ? result[merchant?.id] : {};
      for (let item of list) {
        if (tmp[item?.sku?.id]) {
          payments.push(item);
        }
      }
      result = { ...result, [merchant?.id]: tmp };
    }
    setSelectItem(result);
    setItemPayment(payments);
  };
  const getPricePayment = () => {
    return itemPayment
      ?.map((item) => item?.quantity * item?.sku?.price)
      .reduce((acc, cur) => acc + cur, 0);
  };
  const isAllCheck = () => {
    if (Object.values(selectItems)?.length === 0) {
      return false;
    }
    for (let list of Object.values(selectItems)) {
      for (let c of Object.values(list)) {
        if (!c) {
          return false;
        }
      }
    }
    return true;
  };
  useEffect(() => {
    // handleSelectItems(undefined, undefined, false);
    setItems(Object.groupBy(CART.getItems(), ({ merchant }) => merchant?.id));
  }, [selectItems, CART.getItems()]);
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
            <Checkbox
              isChecked={isAllCheck()}
              onChange={(e) => {
                handleSelectItems(undefined, undefined, e.target.checked);
              }}
            />
            <Box flex={0.4}>
              <Text>Sản phẩm</Text>
            </Box>
            <Flex flex={0.6} justify={"space-around"} align={"center"}>
              <Text align={"center"} flex={0.25}>
                Đơn giá
              </Text>
              <Text flex={0.25} align={"center"}>
                số lượng
              </Text>
              <Text flex={0.25} align={"center"}>
                tổng tiền
              </Text>
              <Text flex={0.25} align={"center"}>
                hành động
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {Object.values(items)?.map((list) => {
        const merchant = list[0]?.merchant;
        const selects =
          merchant?.id in selectItems ? selectItems[merchant?.id] : {};
        const isCheck =
          Object.values(selects)?.length > 0 &&
          Object.values(selects)?.filter((i) => !i)?.length === 0;
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
              <Checkbox
                isChecked={isCheck}
                onChange={(e) =>
                  handleSelectItems(merchant?.id, undefined, e.target.checked)
                }
              />
              <Text>{merchant?.name}</Text>
            </Flex>
            <Flex
              p={"16px"}
              borderBottom={"1px #cecece solid"}
              direction={"column"}
              gap={"8px"}
            >
              {list?.map((i) => {
                const isCheck =
                  i?.sku?.id in selects ? selects[i?.sku?.id] : false;
                return (
                  <Flex justify={"space-between"} align={"center"}>
                    <Flex flex={0.4} align={"center"} gap={"8px"}>
                      <Checkbox
                        isChecked={isCheck}
                        onChange={(e) => {
                          handleSelectItems(
                            merchant?.id,
                            i?.sku?.id,
                            e.target.checked
                          );
                        }}
                      />
                      <Flex align={"center"} gap={"8px"}>
                        <Image src={i?.sku?.image} />
                        <Flex direction={"column"}>
                          <Text>{i?.product?.name}</Text>
                          <Text>{getJoinVariantsName(i)}</Text>
                        </Flex>
                      </Flex>
                    </Flex>
                    <Flex flex={0.6} justify={"space-around"} align={"center"}>
                      <Text flex={0.25} align={"center"}>
                        {i?.sku?.price?.toLocaleString()}VNĐ
                      </Text>
                      <Text flex={0.25} align={"center"}>
                        {i?.quantity}
                      </Text>
                      <Text flex={0.25} align={"center"}>
                        {(i?.sku?.price * i?.quantity).toLocaleString()}VNĐ
                      </Text>
                      <Button
                        flex={0.25}
                        align={"center"}
                        variant={"outline"}
                        colorScheme="red"
                        onClick={() => {
                          CART.removeItem(i);
                          setReload(!reload);
                        }}
                      >
                        Xoá
                      </Button>
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
        mt={"32px"}
      >
        <Flex h={"60px"} p={"16px"} justify={"space-between"} align={"center"}>
          <Flex justify={"space-between"} flex={1} align={"center"} gap={"8px"}>
            <Box flex={0.4}></Box>
            <Flex flex={0.6} justify={"end"} align={"center"}>
              <Flex flex={1} align={"center"} justify={"flex-end"} gap={"32px"}>
                <Text>{`Tổng thanh toán (${
                  itemPayment?.length
                } sản phẩm): ${getPricePayment()?.toLocaleString()}VNĐ`}</Text>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    CART.setItemPayment(itemPayment);
                    dispatch(updateItemPayment(itemPayment));
                    navigate("/checkout");
                  }}
                  isDisabled={!itemPayment || itemPayment?.length === 0}
                >
                  Mua hàng
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Cart;
