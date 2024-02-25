import React, { useState } from "react";
import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import Header from "../landingPage/components/Header";
import Footer from "../landingPage/components/Footer";

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

const Product = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <Flex flexDirection={"column"} gap={4}>
      <Rating rating={4} numReviews={12} />
      <Text fontSize={"2xl"}>Product name</Text>
      <Flex>
        <Text>Price: 100$</Text>
      </Flex>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam
        sapiente quis et corrupti facilis laborum magnam architecto molestias
        nostrum maxime, impedit id quam a distinctio eaque earum quos similique.
      </Text>
      <Text>Quantity:</Text>
      <Flex
        alignItems={"center"}
        gap={6}
        p={"8px"}
        border={"1px solid #eee"}
        width={"fit-content"}
        borderRadius={"8px"}
      >
        <IconButton
          onClick={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
          icon={<RiSubtractFill />}
        />
        <Text>{quantity}</Text>
        <IconButton
          onClick={() => {
            setQuantity(quantity + 1);
          }}
          icon={<BiPlus />}
        />
      </Flex>
      <Button
        _hover={{ bg: "rgba(66,153,255,0.8)" }}
        w={"80%"}
        bg={"blue.400"}
        color={"#fff"}
      >
        Add to card
      </Button>
    </Flex>
  );
};

const Carousel = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};

const ProductDetail = (props) => {
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
      <Flex
        direction="column"
        align="center"
        maxW={{ xl: "1200px" }}
        h={"80vh"}
        m="0 auto"
        {...props}
      >
        <Box>
          <Flex flexWrap="wrap" justifyContent="space-between" gap={"8px"}>
            <Box w="50%">
              <Product />
            </Box>
            <Box w="48%">
              <Carousel />
            </Box>
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

export default ProductDetail;
