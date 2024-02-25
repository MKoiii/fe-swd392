import { Box, Flex, Text } from "@chakra-ui/react";
import Logo from "./Logo";
import React from "react";
import Newsletter from "../../../components/newsletter";

export default function Footer() {
  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={0}
        p={0}
        bg={["primary.500", "primary.500", "transparent", "transparent"]}
      >
        <Logo />
        <Text>© 2024 logoipsum. All Rights Reserved.</Text>
      </Flex>
    </Box>
  );
}
