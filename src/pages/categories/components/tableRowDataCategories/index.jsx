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
import { SystemProductCategoryControllerApi } from "../../../../api/generated/generate-api";
import ApiClientSingleton from "../../../../api/apiClientImpl";
import ModalCategory from "../modalCategory";
import { STATUS_STR, TOAST } from "../../../../constant";
import { CategoryContext } from "../tableCategory";
import { useNavigate } from "react-router-dom";

const categoryApi = new SystemProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
function TableRowDataCategory({ category, categories, parent }) {
  const navigate = useNavigate();
  const toast = useToast();
  const { id, name, ordering, icon, description, status, parentId, children } =
    category;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const [isOpenUpdate, setIsOpenUpdate] = useState(false);
  const [categorySelect, setCategorySelect] = useState();
  const { reload, setReload } = useContext(CategoryContext);

  return (
    <>
      <Tr>
        <Td minWidth={{ sm: "160px" }} pl="0px" py={".6rem"}>
          <Flex
            justifyContent={"start"}
            py=".4rem"
            minWidth="100%"
            flexWrap="nowrap"
          >
            <Avatar src={icon} w="50px" borderRadius="12px" me="18px" />
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
              {description}
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
              onClick={() => navigate(`/manage-categories/${id}`)}
            >
              <Tag size={"lg"} variant="outline" colorScheme="gray">
                <TagLabel>Chi tiết</TagLabel>
              </Tag>
            </Button>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() => {
                categoryApi.systemProductCategoryControllerGetDetailsById(
                  id,
                  (err, data, response) => {
                    setCategorySelect(data?.data);
                    setIsOpenUpdate(true);
                  }
                );
              }}
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
                categoryApi.systemProductCategoryControllerDeleteModelById(
                  id,
                  (err, data, response) => {
                    if (data) {
                      setReload(!reload);
                      TOAST.success(
                        toast,
                        "Category",
                        "Xoá category thành công"
                      );
                    } else {
                      TOAST.success(toast, "Category", "Xoá category thất bại");
                    }
                  }
                );
              }}
            >
              <Tag size={"lg"} variant="outline" colorScheme="red">
                <TagLabel>Xoá</TagLabel>
              </Tag>
            </Button>
          </Flex>
        </Td>
      </Tr>
      <ModalCategory
        title={"Cập nhật thông tin"}
        isOpen={isOpenUpdate}
        setOpen={setIsOpenUpdate}
        category={categorySelect}
        setCategory={setCategorySelect}
        parentCategories={categories}
        parent={parent}
        onFinish={() => {
          categoryApi.systemProductCategoryControllerUpdateModel(
            { ...categorySelect, parentId: parent?.id },
            (err, data, response) => {
              if (data) {
                setIsOpenUpdate(false);
                setReload(!reload);
                TOAST.success(
                  toast,
                  "Category",
                  "Cập nhật category thành công"
                );
              } else {
                TOAST.error(toast, "Category", "Cập nhật category thất bại");
              }
            }
          );
        }}
      />
    </>
  );
}

export default TableRowDataCategory;
