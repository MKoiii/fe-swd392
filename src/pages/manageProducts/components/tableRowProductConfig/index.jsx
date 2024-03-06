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
import { CHOICE_KIND, IMAGES, STATUS_STR, TOAST } from "../../../../constant";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../AddProduct";

const productApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
function TableRowDataProductConfigs({ productId, productConfig }) {
  const navigate = useNavigate();
  const toast = useToast();
  // const { id, name, choiceKind, variants, required } = productConfig;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { reload, setReload } = useContext(ProductContext);

  return (
    <>
      <Tr>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {productConfig?.name}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {CHOICE_KIND.SINGLE_CHOICE === productConfig?.choiceKind
                ? "Chọn một"
                : "Chọn nhiều"}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Badge
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
            bg={productConfig?.required ? "green.400" : bgStatus}
            color={productConfig?.required ? "white" : colorStatus}
          >
            {productConfig?.required ? "Có" : "Không"}
          </Badge>
        </Td>
      </Tr>
    </>
  );
}

export default TableRowDataProductConfigs;
