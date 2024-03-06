import {
  Avatar,
  Badge,
  Button,
  Flex,
  Image,
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
  SystemSkuControllerApi,
} from "../../../../api/generated/generate-api";
import ApiClientSingleton from "../../../../api/apiClientImpl";
import { CHOICE_KIND, IMAGES, STATUS_STR, TOAST } from "../../../../constant";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../AddProduct";

const skuApi = new SystemSkuControllerApi(ApiClientSingleton.getInstance());
function TableRowDataSku({ sku }) {
  const navigate = useNavigate();
  const toast = useToast();
  const { productId } = useParams();
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { reload, setReload } = useContext(ProductContext);
  return (
    <>
      <Tr>
        <Td textAlign={"center"}>
          <Flex direction="column" alignItems={"center"}>
            <Avatar
              src={IMAGES.getImage(sku?.image)}
              w="50px"
              borderRadius="12px"
              me="18px"
            />
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {sku?.variants?.map((v) => v?.name)?.join(", ")}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {sku?.price?.toLocaleString()}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {sku?.quantity?.toLocaleString()}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Flex justifyContent={"center"} gap={"8px"}>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() =>
                navigate(`/manage-products/update-sku/${productId}/${sku?.id}`)
              }
            >
              <Tag size={"lg"} variant="outline" colorScheme="blue">
                <TagLabel>Cập nhật</TagLabel>
              </Tag>
            </Button>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() => {
                skuApi.appSkuControllerDeleteModelById(sku?.id, (err, data) => {
                  if (data) {
                    TOAST.success(toast, "Xoá SKU", "Xoá SKU thành công");
                    setReload(!reload);
                  } else {
                    TOAST.error(toast, "Xoá SKU", "Xoá SKU không thành công");
                  }
                });
              }}
            >
              <Tag size={"lg"} variant="outline" colorScheme="red">
                <TagLabel>Xoá</TagLabel>
              </Tag>
            </Button>
          </Flex>
        </Td>
      </Tr>
    </>
  );
}

export default TableRowDataSku;
