// components/layout.js
import { Box, Container, Flex, Image } from "@chakra-ui/react";

export const Layout = ({ children }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} minH={"100vh"}>
      <Container maxW={"container.lg"}>{children}</Container>
    </Box>
  );
};
