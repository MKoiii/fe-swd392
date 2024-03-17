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
import React, { createContext, useContext, useEffect, useState } from "react";
import ApiClientSingleton from "../../../../api/apiClientImpl";
import { SystemProductCategoryControllerApi } from "../../../../api/generated/generate-api";
import { FiPlus } from "react-icons/fi";
import Paginate from "../../../../components/paginate";
import { useNavigate } from "react-router-dom";
import Card from "../../../../components/card/Card";
import CardHeader from "../../../../components/card/CardHeader";
import CardBody from "../../../../components/card/CardBody";
import TableRowDataOrders from "../rowDataOrder";

const categoryApi = new SystemProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
const TableOrders = ({
  title,
  captions,
  data,
  currentPage,
  totalPage,
  setCurrentPage,
}) => {
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const navigate = useNavigate();

  return (
    <>
      <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Flex alignItems={"center"} gap={"8px"}>
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              {title}
            </Text>
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
                return <TableRowDataOrders key={row?.id} order={row} />;
              })}
            </Tbody>
            <Paginate
              isTable={true}
              colSpan={captions?.length}
              currentPage={currentPage}
              totalPages={totalPage}
              onPageChange={(page) => {
                setCurrentPage(page);
              }}
            />
          </Table>
        </CardBody>
      </Card>
    </>
  );
};

export default TableOrders;
