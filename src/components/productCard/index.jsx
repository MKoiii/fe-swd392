"use client";

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { IMAGES } from "../../constant";

const data = {
  isNew: true,
  imageURL: "https://source.unsplash.com/collection/404339/800x600",
  name: "Wayfarer Classic",
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};
function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

function ProductCart({ product }) {
  const navigate = useNavigate();
  return (
    <Flex w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue("white", "gray.800")}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Box
          cursor={"pointer"}
          onClick={() => navigate(`/product-detail/${product?.id}`)}
        >
          <Image
            width={"280px"}
            height={"200px"}
            src={IMAGES.getImage(product?.image)}
            alt={`Picture of ${product?.name}`}
            roundedTop="lg"
          />
        </Box>
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              New
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Box>
            {/* <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"gray.800"}
              fontSize={"1.2em"}
            >
              <chakra.a href={"#"} display={"flex"}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
              </chakra.a>
            </Tooltip> */}
          </Flex>

          <Flex
            justifyContent="space-between"
            alignContent="center"
            direction={"column"}
          >
            <Box fontSize="xl" color={useColorModeValue("gray.800", "white")}>
              {`${product?.fromPrice?.toLocaleString()} - ${product?.toPrice?.toLocaleString()}`}
              <Box as="span" color={"gray.600"} fontSize="lg">
                VNĐ
              </Box>
            </Box>
            <Rating rating={data.rating} numReviews={data.numReviews} />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductCart;
