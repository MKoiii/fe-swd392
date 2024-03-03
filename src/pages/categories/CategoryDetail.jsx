import React, { useContext, useEffect, useState } from "react";
import MainBoard from "../../components/mainBoard";
import BreadcrumbCustom from "../../components/breadcrumb";
import { TABLE_USER_DATA } from "../../mock";
import TableCateogries from "./components/tableCategory";
import { useParams } from "react-router-dom";
import { SystemProductCategoryControllerApi } from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import { CategoriesContext } from "./Categories";
import {
  Avatar,
  useColorModeValue,
  Flex,
  Box,
  Text,
  Divider,
  Badge,
} from "@chakra-ui/react";
import { STATUS_STR } from "../../constant";

const categoryApi = new SystemProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
const CategoryDetailContent = () => {
  const { categoryId } = useParams();
  const { reload } = useContext(CategoriesContext);
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const links = [
    { link: "/dashboard", name: "Home" },
    { link: "/manage-categories", name: "Manage Categoties" },
    { link: "#", name: "Category Detail" },
  ];
  const [category, setCategory] = useState();
  const [childCategories, setChildCategories] = useState();

  const getCategoryDetail = () => {
    categoryApi.systemProductCategoryControllerGetDetailsById(
      categoryId,
      (err, data, res) => {
        if (data) {
          const rs = data.data;
          console.log(data);
          setCategory(rs);
        }
      }
    );
  };

  const getChildCategories = () => {
    categoryApi.systemProductCategoryControllerGetInfoListWithFilter(
      { parentId: categoryId },
      (err, data, res) => {
        if (data) {
          const rs = data?.data;
          setChildCategories(rs);
        }
      }
    );
  };

  useEffect(() => {
    if (categoryId) {
      getCategoryDetail();
      getChildCategories();
    }
  }, [categoryId, reload]);

  return (
    <>
      <BreadcrumbCustom links={links} />
      <Flex flexDirection={"column"} gap={"16px "} mt={"16px"}>
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Thông tin chi tiết
        </Text>
        <Flex alignItems={"center"} justifyContent={"start"} gap={"64px"}>
          <Flex
            justifyContent={"start"}
            alignItems={"center"}
            py=".4rem"
            flexWrap="nowrap"
          >
            <Avatar
              src={category?.icon}
              w="50px"
              borderRadius="12px"
              me="18px"
            />
            <Flex direction="column">
              <Text fontSize="md" color={textColor}>
                {category?.name}
              </Text>
            </Flex>
          </Flex>
          <Text>Mô tả: {category?.description}</Text>
          <Flex alignItems={"center"} gap={"8px"}>
            <Text>Trạng thái: </Text>
            <Badge
              bg={
                category?.status === STATUS_STR.ACTIVE ? "green.400" : bgStatus
              }
              color={
                category?.status === STATUS_STR.ACTIVE ? "white" : colorStatus
              }
              fontSize="16px"
              p="3px 10px"
              borderRadius="8px"
            >
              {category?.status === STATUS_STR.ACTIVE ? "Hoạt động" : "Đã khoá"}
            </Badge>
          </Flex>
        </Flex>
        <Divider />
        <TableCateogries
          title={"Bảng Category"}
          captions={["Tên", "Môt tả", "Trạng thái", "Hành động"]}
          data={childCategories}
          parent={category}
        />
      </Flex>
    </>
  );
};

const CategoryDetail = () => {
  const [reload, setReload] = useState(false);
  return (
    <CategoriesContext.Provider value={{ reload, setReload }}>
      <MainBoard children={<CategoryDetailContent />} />
    </CategoriesContext.Provider>
  );
};

export default CategoryDetail;
