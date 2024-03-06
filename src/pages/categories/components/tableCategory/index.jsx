// Chakra imports
import {
  Button,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/card/Card";
import CardBody from "../../../../components/card/CardBody";
import CardHeader from "../../../../components/card/CardHeader";
import React, { createContext, useContext, useEffect, useState } from "react";
import Paginate from "../../../../components/paginate";
import ApiClientSingleton from "../../../../api/apiClientImpl";
import { DEFAULE_PAGE_SIZE, TOAST } from "../../../../constant";
import { SystemProductCategoryControllerApi } from "../../../../api/generated/generate-api";
import TableRowDataCategory from "../tableRowDataCategories";
import { FiPlus } from "react-icons/fi";
import ModalCategory from "../modalCategory";
import { CategoriesContext } from "../../Categories";

const categoryApi = new SystemProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
const CategoryContext = createContext({});
const TableCateogries = ({ title, captions, data, parent }) => {
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const [isOpenCreate, setIsOpenCreate] = useState(false);
  const [categoryCreate, setCategoryCreate] = useState();
  const { reload, setReload } = useContext(CategoriesContext);

  return (
    <CategoryContext.Provider value={{ reload, setReload }}>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Flex alignItems={"center"} gap={"8px"}>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              {title}
            </Text>
            <Button
              leftIcon={<FiPlus />}
              colorScheme="twitter"
              variant="solid"
              size={"sm"}
              borderRadius={"6px"}
              onClick={() => setIsOpenCreate(true)}
            >
              Tạo mới
            </Button>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                {captions.map((caption, idx) => {
                  return (
                    <Th
                      textAlign={"center"}
                      color="gray.400"
                      key={idx}
                      ps={idx === 0 ? "0px" : null}
                    >
                      {caption}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((row) => {
                return (
                  <TableRowDataCategory
                    key={row?.id}
                    category={row}
                    categories={data}
                    parent={parent}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>

        <ModalCategory
          parent={parent}
          title={"Tạo mới category"}
          isOpen={isOpenCreate}
          setOpen={setIsOpenCreate}
          category={categoryCreate}
          parentCategories={data}
          setCategory={setCategoryCreate}
          onFinish={() => {
            categoryApi.systemProductCategoryControllerCreateModel(
              { ...categoryCreate, parentId: parent?.id },
              (err, data, response) => {
                if (data) {
                  setIsOpenCreate(false);
                  setReload(!reload);
                  TOAST.success(
                    toast,
                    "Category",
                    "Tạo mới category thành công"
                  );
                } else {
                  TOAST.error(toast, "Category", "Tạo mới category thất bại");
                }
              }
            );
          }}
        />
      </Card>
    </CategoryContext.Provider>
  );
};

export default TableCateogries;
export { CategoryContext };
