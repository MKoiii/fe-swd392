import { Box, Button, Flex } from "@chakra-ui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React, { useEffect, useMemo, useState } from "react";
import ImageSlider from "../../components/imageSilder";
import ProductCards from "./components/ProductCards";
import { Link, useNavigate } from "react-router-dom";
import Newsletter from "../../components/newsletter";
import { AppProductControllerApi } from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";

const productApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
export default function LandingPage(props) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const images = useMemo(
    () => [
      "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
      "https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
      "https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80",
    ],
    []
  );

  const captions = useMemo(
    () => [
      "caption for image1.jpg",
      "caption for image2.jpg",
      "caption for image3.jpg",
      "caption for image4.jpg",
    ],
    []
  );

  useEffect(() => {
    productApi.appProductControllerGetProductPagePublic(
      {
        page: 0,
        size: 20,
      },
      (err, data) => {
        console.log(data?.data);
        setProducts(data?.data);
      }
    );
  }, []);

  return (
    <>
      <Flex direction="column" align="center" m="0 auto" {...props}>
        <Box w={{ xl: "1200px" }}>
          <Header />
        </Box>

        <Flex w={{ xl: "1200px" }} align={"center"}>
          <Hero
            title="Adapted Chakra Landing Page Tutorial"
            subtitle="Used Create-React-App Chakra Template"
            image="https://source.unsplash.com/collection/404339/800x600"
            ctaText="Create your account now"
            ctaLink="/register"
          />
        </Flex>
        <Box height={"640px"} w={"100vw"}>
          <ImageSlider images={images} captions={captions} />
        </Box>
        <Flex
          direction="column"
          align="center"
          maxW={{ xl: "1200px" }}
          m="0 auto"
          minH={"640px"}
          {...props}
          py={12}
          position={"relative"}
        >
          <ProductCards products={products} />
          <div style={{ position: "absolute", top: "6px", right: 0 }}>
            <Button
              colorScheme="green" // Chọn màu cho nút
              size="sm" // Chọn kích thước (md: medium, lg: large, sm: small)
              borderRadius="md" // Bo góc của nút
              _hover={{ bg: "green.400" }} // Màu nền khi di chuột vào
              onClick={() => navigate("/products")}
            >
              See All Products
            </Button>
          </div>
        </Flex>
        <Box bg={"#eee"} w={"100vw"}>
          <Flex
            direction="column"
            align="center"
            maxW={{ xl: "1200px" }}
            m="0 auto"
            {...props}
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
