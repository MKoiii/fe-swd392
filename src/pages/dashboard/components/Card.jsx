import {
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import React from "react";
import Card from "../../../components/card/Card";
import CardBody from "../../../components/card/CardBody";
import IconBox from "../../../components/icons/IconBox";

const CardReport = ({ title, amount, percentage, icon, isPercent }) => {
  const iconTeal = useColorModeValue("teal.300", "teal.300");
  const textColor = useColorModeValue("white", "white");
  return (
    <Card bg="gray.500" borderRadius="8px" minH="83px">
      <CardBody>
        <Flex
          flexDirection="row"
          align="center"
          justify="center"
          w="100%"
          gap={"16px"}
        >
          <Stat me="auto">
            <StatLabel fontSize="lg" color="white" fontWeight="bold" pb=".1rem">
              {title}
            </StatLabel>
            <Flex>
              <StatNumber fontSize="md" color={textColor}>
                {amount}
              </StatNumber>
              {isPercent ? (
                <StatHelpText
                  alignSelf="flex-end"
                  justifySelf="flex-end"
                  m="0px"
                  color={percentage > 0 ? "green.400" : "red.400"}
                  fontWeight="bold"
                  ps="3px"
                  fontSize="md"
                >
                  {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
                </StatHelpText>
              ) : (
                <></>
              )}
            </Flex>
          </Stat>
          <IconBox as="box" h={"45px"} w={"45px"} bg={iconTeal}>
            {icon}
          </IconBox>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default CardReport;
