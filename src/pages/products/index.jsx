import React, { useEffect, useState } from "react";
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
import {
  AppProductCategoryControllerApi,
  AppProductControllerApi,
} from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";

const productApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
const categoryApi = new AppProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
const MAX_PRICE = 99999999;
const Products = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  // Giả sử danh sách các danh mục sản phẩm
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState({
    fromPrice: 0,
    toPrice: MAX_PRICE,
    categoryIds: [],
  });
  const getProducts = () => {
    productApi.appProductControllerGetProductPagePublic(
      {
        ...filter,
        page: currentPage - 1,
        size: 12,
      },
      (err, data) => {
        setProducts(data?.data);
        setTotalPages(data?.totalPages);
      }
    );
  };

  useEffect(() => {
    categoryApi.appProductCategoryControllerGetInfoList((err, data) => {
      if (data) {
        const res = data?.data;
        var tmp = [];
        for (let category of res) {
          if (category) {
            if (category?.children) {
              tmp = [...tmp, ...category?.children];
            } else {
              tmp = [...tmp, category];
            }
          }
        }
        console.log(tmp);
        setCategories(tmp);
      }
    });
  }, []);

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  return (
    <>
      <Flex gap={"32px"} my={"16px"} w={"100vw"}>
        <Box
          rowSpan={2}
          colSpan={1}
          display={"flex"}
          // justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={6}
          flex={0.16}
          borderRight={"1px solid #cecece"}
        >
          <Flex flexDirection={"column"} width={"80%"} gap={4}>
            <Text fontSize={"2xl"}>Categories</Text>
            {categories?.map((c) => {
              return (
                <Checkbox
                  value={c?.id}
                  onChange={(e) => {
                    var tmp = filter?.categoryIds;
                    if (e.target.checked) {
                      tmp = [...tmp, e.target.value];
                    } else {
                      tmp = tmp?.filter((id) => id != e.target.value);
                    }
                    setFilter({ ...filter, categoryIds: tmp });
                  }}
                >
                  {c?.name}
                </Checkbox>
              );
            })}
          </Flex>
          <Flex flexDirection={"column"} width={"80%"} gap={4}>
            <Text fontSize={"2xl"}>Price</Text>
            <RangeSlider
              aria-label={["min", "max"]}
              defaultValue={[filter?.fromPrice, filter?.toPrice]}
              max={MAX_PRICE}
              onChange={(value) => {
                setFilter({
                  ...filter,
                  fromPrice: value[0],
                  toPrice: value[1],
                });
              }}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
            <Flex alignItems={"center"} gap={6} direction={"column"}>
              <NumberInput
                value={filter?.fromPrice?.toLocaleString()}
                max={MAX_PRICE}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <NumberInput
                value={filter?.toPrice?.toLocaleString()}
                max={MAX_PRICE}
              >
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
            onClick={getProducts}
          >
            Lọc
          </Button>
        </Box>
        <Box flex={0.85}>
          <Flex flexDirection={"column"}>
            <Flex alignItems={"center"} flexWrap={"wrap"} gap={"12px"}>
              {products?.map((p) => {
                return (
                  <>
                    <Flex key={p?.id}>
                      <ProductCart product={p} />
                    </Flex>
                  </>
                );
              })}
            </Flex>
            <Paginate
              isTable={false}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(curr) => {
                setCurrentPage(curr);
              }}
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Products;
