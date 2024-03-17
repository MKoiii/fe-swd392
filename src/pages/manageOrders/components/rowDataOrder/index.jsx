import {
  Avatar,
  Badge,
  Button,
  Flex,
  Tag,
  TagLabel,
  Td,
  Text,
  Tr,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import {
  AppProductControllerApi,
  SystemProductCategoryControllerApi,
} from "../../../../api/generated/generate-api";
import ApiClientSingleton from "../../../../api/apiClientImpl";
import {
  IMAGES,
  ORDER_STATE,
  PAYMENT_METHOD,
  STATUS_STR,
  TOAST,
} from "../../../../constant";
import { useNavigate } from "react-router-dom";

const productApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
function TableRowDataOrders({ order }) {
  const navigate = useNavigate();
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

  return (
    <>
      <Tr>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {order?.receiverFullName}
            </Text>
          </Flex>
        </Td>

        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {order?.phone}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {order?.subTotal?.toLocaleString()} VNĐ
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Badge
            bg={order?.status ? ORDER_STATE[order?.status]?.color : ""}
            color={"white"}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {order?.status ? ORDER_STATE[order?.status]?.name : ""}
          </Badge>
        </Td>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {order?.paymentMethod
                ? PAYMENT_METHOD[order?.paymentMethod]?.name
                : ""}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {[order?.wardName, order?.districtName, order?.provinceName].join(
                ", "
              )}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Flex justifyContent={"center"} gap={"8px"}>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() => navigate(`/manage-orders/${order?.id}`)}
            >
              <Tag size={"lg"} variant="outline" colorScheme="gray">
                <TagLabel>Chi tiết</TagLabel>
              </Tag>
            </Button>
          </Flex>
        </Td>
      </Tr>
    </>
  );
}

export default TableRowDataOrders;
