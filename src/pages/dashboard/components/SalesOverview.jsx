// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import React from "react";
import CardHeader from "../../../components/card/CardHeader";
import Card from "../../../components/card/Card";

const SalesOverview = ({ title, percentage, chart }) => {
  const textColor = useColorModeValue("gray.700", "white");
  return (
    <Card p="28px 10px 16px 0px" mb={{ sm: "26px", lg: "0px" }}>
      <CardHeader mb="20px" pl="22px">
        <Flex direction="column" alignSelf="flex-start">
          <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
            Thống kê
          </Text>
          {/* <Text fontSize="md" fontWeight="medium" color="gray.400">
            <Text
              as="span"
              color={percentage > 0 ? "green.400" : "red.400"}
              fontWeight="bold"
            >
              {`${percentage}%`} more
            </Text>{" "}
            in 2021
          </Text> */}
        </Flex>
      </CardHeader>
      <Box
        align={"center"}
        direction={"column"}
        w="100%"
        h={{ sm: "300px" }}
        ps="8px"
        gap={"16px"}
      >
        {chart}
        <Text fontSize="lg" color={textColor} fontWeight="bold" mt="16px">
          {title}
        </Text>
      </Box>
    </Card>
  );
};

export default SalesOverview;
