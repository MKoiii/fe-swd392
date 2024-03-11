// Chakra imports
import {
  Avatar,
  Badge,
  Button,
  Flex,
  Table,
  Tag,
  TagLabel,
  Tbody,
  Td,
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
import { FiPlus } from "react-icons/fi";
import Paginate from "../../../../components/paginate";
import { useNavigate } from "react-router-dom";
import {
  IMAGES,
  MERCHANT_STATUS,
  STATUS_STR,
  TOAST,
} from "../../../../constant";

const TableMerchants = ({
  title,
  captions,
  data,
  currentPage,
  totalPage,
  setCurrentPage,
}) => {
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
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
              {data?.map((merchant) => {
                return (
                  <Tr>
                    <Td textAlign={"center"}>
                      <Flex direction="column">
                        <Text fontSize="md" color={textColor} fontWeight="bold">
                          {merchant?.name}
                        </Text>
                      </Flex>
                    </Td>
                    <Td textAlign={"center"}>
                      <Flex direction="column">
                        <Text fontSize="md" color={textColor} fontWeight="bold">
                          {merchant?.phone}
                        </Text>
                      </Flex>
                    </Td>
                    <Td textAlign={"center"}>
                      <Flex direction="column">
                        <Text fontSize="md" color={textColor} fontWeight="bold">
                          {merchant?.addressDetails}
                        </Text>
                      </Flex>
                    </Td>
                    <Td textAlign={"center"}>
                      <Badge
                        bg={MERCHANT_STATUS[merchant?.status]?.color}
                        fontSize="16px"
                        p="3px 10px"
                        borderRadius="8px"
                        color={"white"}
                      >
                        {MERCHANT_STATUS[merchant?.status]?.name}
                      </Badge>
                    </Td>
                    <Td textAlign={"center"}>
                      <Flex justifyContent={"center"} gap={"8px"}>
                        <Button
                          p="0px"
                          bg="transparent"
                          variant="no-hover"
                          onClick={() => {
                            navigate(`/manage-merchants/${merchant?.id}`);
                          }}
                        >
                          <Tag size={"lg"} variant="outline" colorScheme="gray">
                            <TagLabel>Chi tiết</TagLabel>
                          </Tag>
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                );
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

export default TableMerchants;
