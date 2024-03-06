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
import { IMAGES, STATUS_STR, TOAST } from "../../../../constant";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../AddProduct";

const productApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
function TableRowDataProducts({ product }) {
  const navigate = useNavigate();
  const toast = useToast();
  const { id, name, image, status, categoryId, categoryName } = product;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { reload, setReload } = useContext(ProductContext);

  return (
    <>
      <Tr>
        <Td minWidth={{ sm: "160px" }} pl="0px" py={".6rem"}>
          <Flex
            alignItems={"center"}
            py=".4rem"
            minWidth="100%"
            flexWrap="nowrap"
          >
            <Avatar
              src={IMAGES.getImage(image)}
              w="50px"
              borderRadius="12px"
              me="18px"
            />
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {name}
              </Text>
            </Flex>
          </Flex>
        </Td>

        <Td textAlign={"center"}>
          <Flex direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {categoryName}
            </Text>
          </Flex>
        </Td>
        <Td textAlign={"center"}>
          <Badge
            bg={status === STATUS_STR.ACTIVE ? "green.400" : bgStatus}
            color={status === STATUS_STR.ACTIVE ? "white" : colorStatus}
            fontSize="16px"
            p="3px 10px"
            borderRadius="8px"
          >
            {status === STATUS_STR.ACTIVE ? "Hoạt động" : "Đã khoá"}
          </Badge>
        </Td>
        <Td textAlign={"center"}>
          <Flex justifyContent={"center"} gap={"8px"}>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() => navigate(`/manage-products/detail/${id}`)}
            >
              <Tag size={"lg"} variant="outline" colorScheme="gray">
                <TagLabel>Chi tiết</TagLabel>
              </Tag>
            </Button>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() => navigate(`/manage-products/update/${id}`)}
            >
              <Tag size={"lg"} variant="outline" colorScheme="blue">
                <TagLabel>Cập nhật</TagLabel>
              </Tag>
            </Button>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() =>
                productApi.appProductControllerDeleteModelById(
                  id,
                  (err, data) => {
                    if (data) {
                      setReload(!reload);
                      TOAST.success(
                        toast,
                        "Sẩn phẩm",
                        "Xoá sản phẩm thành công"
                      );
                    }
                  }
                )
              }
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

export default TableRowDataProducts;
