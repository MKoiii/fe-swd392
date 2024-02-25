// Chakra imports
import {
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/card/Card";
import CardBody from "../../../../components/card/CardBody";
import CardHeader from "../../../../components/card/CardHeader";
import React, { useState } from "react";
import TableRowDataUsers from "../tableRowDataUsers";
import Paginate from "../../../../components/paginate";

const TableUsers = ({ title, captions, data }) => {
  const textColor = useColorModeValue("gray.700", "white");
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          {title}
        </Text>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              {captions.map((caption, idx) => {
                return (
                  <Th color="gray.400" key={idx} ps={idx === 0 ? "0px" : null}>
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((row) => {
              return (
                <TableRowDataUsers
                  key={`${row.email}-${row.name}`}
                  name={row.name}
                  logo={row.logo}
                  email={row.email}
                  subdomain={row.subdomain}
                  domain={row.domain}
                  status={row.status}
                  date={row.date}
                />
              );
            })}
          </Tbody>
          <Paginate
            isTable={true}
            currentPage={currentPage}
            totalPages={10}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          />
        </Table>
      </CardBody>
    </Card>
  );
};

export default TableUsers;
