import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ItemCart = ({ data }) => {
  const { merchant, quantity, sku } = data;

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

  return (
    <Flex justify={"space-between"} align={"center"}>
      <Flex flex={0.4} align={"center"}>
        <Image src={sku?.image} />
        <Flex direction={"column"}>
          <Text>{data?.product?.name}</Text>
          <Text>{getJoinVariantsName(data)}</Text>
        </Flex>
      </Flex>
      <Flex flex={0.6} justify={"space-around"} align={"center"}>
        <Text>{sku?.price?.toLocaleString()}VNĐ</Text>
        <Text>{quantity}</Text>
        <Text>{(sku?.price * quantity).toLocaleString()}VNĐ</Text>
        <Button variant={"outline"} colorScheme="red">
          Xoá
        </Button>
      </Flex>
    </Flex>
  );
};

export default ItemCart;
