import React from "react";
import { ROLE, TOKEN } from "../constant";
import { jwtDecode } from "jwt-decode";
import { Navigate, Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../pages/landingPage/components/Header";
import Hero from "../pages/landingPage/components/Hero";
import Newsletter from "../components/newsletter";
import Footer from "../pages/landingPage/components/Footer";

const UserPrivateRouter = () => {
  const accessToken = TOKEN.getAccessToken();
  if (!accessToken) {
    return <Navigate to="/login" />;
  }
  const decoded = jwtDecode(accessToken);
  const roles = decoded?.resource_access?.auction?.roles;
  if (roles.includes(ROLE.USER)) {
    return (
      <>
        <Flex direction="column" align="center" m="0 auto">
          <Box w={{ xl: "1200px" }}>
            <Header />
          </Box>
          <Outlet />
          <Box bg={"#eee"} w={"100vw"}>
            <Flex
              direction="column"
              align="center"
              maxW={{ xl: "1200px" }}
              m="0 auto"
            >
              <Box>
                <Newsletter />
              </Box>
              <Footer />
            </Flex>
          </Box>
        </Flex>
      </>
    );
  }
  return <Navigate to="/login" />;
};

export default UserPrivateRouter;
