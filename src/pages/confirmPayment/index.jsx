import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ConfirmPayment = () => {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState({ action: "", paymentId: "" });

  useEffect(() => {
    setParams({
      paymentId: searchParams.get("paymentId"),
      action: searchParams.get("action"),
    });
  }, []);

  return (
    <>
      {params.action === "cancel" ? (
        <>
          <Box textAlign="center" py={10} px={6}>
            <Box display="inline-block">
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bg={"red.500"}
                rounded={"50px"}
                w={"55px"}
                h={"55px"}
                textAlign="center"
              >
                <CloseIcon boxSize={"20px"} color={"white"} />
              </Flex>
            </Box>
            <Heading as="h2" size="xl" mt={6} mb={2}>
              Thanh toán thất bại
            </Heading>
            <Text color={"gray.500"}>
              Xin vui lòng thử lại sau. Cảm ơn bản đã tin tưởng sử dụng dịch vụ
              của chúng tôi.
            </Text>
          </Box>
        </>
      ) : (
        <>
          <Box textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              Thanh toán thàng công
            </Heading>
            <Text color={"gray.500"}>
              Cảm ơn bản đã tin tưởng sử dụng dịch vụ của chúng tôi.
            </Text>
          </Box>
        </>
      )}
    </>
  );
};

export default ConfirmPayment;
