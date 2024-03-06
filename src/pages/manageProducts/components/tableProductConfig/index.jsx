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
import ApiClientSingleton from "../../../../api/apiClientImpl";
import { SystemProductCategoryControllerApi } from "../../../../api/generated/generate-api";
import { FiPlus } from "react-icons/fi";
import { ProductContext } from "../../AddProduct";
import TableRowDataProducts from "../tableRowDataProducts";
import Paginate from "../../../../components/paginate";
import { useNavigate } from "react-router-dom";
import TableRowDataProductConfigs from "../tableRowProductConfig";

const categoryApi = new SystemProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
const TableProductConfigs = ({ title, captions, data, productId }) => {
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const { reload, setReload } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <>
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
              onClick={() =>
                navigate(`/manage-products/setting-sku/${productId}`)
              }
            >
              Tạo mới cài đặt SKU
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
                  <TableRowDataProductConfigs
                    key={row?.id}
                    productConfig={row}
                    productId={productId}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default TableProductConfigs;
