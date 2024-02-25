import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Header from "../landingPage/components/Header";
import ProductCart from "../../components/productCard";
import Paginate from "../../components/paginate";
import Footer from "../landingPage/components/Footer";

const Products = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  // Giả sử danh sách các danh mục sản phẩm
  const categories = [
    { id: 1, name: "Thời trang nam" },
    { id: 2, name: "Thời trang nữ" },
    { id: 3, name: "Điện thoại di động" },
    // Thêm các danh mục khác nếu cần
  ];

  return (
    <>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        {...props}
      >
        <Header />
      </Flex>
      <Flex gap={"16px"}>
        <Box
          rowSpan={2}
          colSpan={1}
          display={"flex"}
          // justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={6}
          flex={"0 0 16%"}
          borderRight={"1px solid #cecece"}
        >
          <Flex flexDirection={"column"} width={"80%"} gap={4}>
            <Text fontSize={"2xl"}>Categories</Text>
            <Checkbox value="naruto">Naruto</Checkbox>
            <Checkbox value="sasuke">Sasuke</Checkbox>
            <Checkbox value="kakashi">Kakashi</Checkbox>
          </Flex>
          <Flex flexDirection={"column"} width={"80%"} gap={4}>
            <Text fontSize={"2xl"}>Price</Text>
            <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 30]}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Flex alignItems={"center"} gap={6}>
              <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
          </Flex>
          <Button
            w={"80%"}
            bg={"blue.400"}
            color={"#fff"}
            _hover={{ bg: "blue.300" }}
          >
            Filter
          </Button>
        </Box>
        <Box flex={"0 0 80%"}>
          <Flex flexDirection={"column"}>
            <Grid templateColumns="repeat(4, 1fr)" gap={6}>
              <GridItem>
                <ProductCart />
              </GridItem>
              <GridItem>
                <ProductCart />
              </GridItem>
              <GridItem>
                <ProductCart />
              </GridItem>
              <GridItem>
                <ProductCart />
              </GridItem>
              <GridItem>
                <ProductCart />
              </GridItem>
              <GridItem>
                <ProductCart />
              </GridItem>
              <GridItem>
                <ProductCart />
              </GridItem>
              <GridItem>
                <ProductCart />
              </GridItem>
            </Grid>
            <Paginate
              isTable={false}
              currentPage={currentPage}
              totalPages={10}
              onPageChange={(curr) => {
                setCurrentPage(curr);
              }}
            />
          </Flex>
        </Box>
      </Flex>
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        m="0 auto"
        {...props}
      >
        <Footer />
      </Flex>
    </>
  );
};

export default Products;
