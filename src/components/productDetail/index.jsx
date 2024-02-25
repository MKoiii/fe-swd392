import React, { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const Product = ({ image, title, price, description }) => {
  return (
    <Box>
      <Image src={image} alt={title} />
      <Flex flexDirection="column" justifyContent="space-between">
        <Box>
          <Text fontWeight="bold">{title}</Text>
          <Text>{price}</Text>
        </Box>
        <Text>{description}</Text>
      </Flex>
    </Box>
  );
};

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box>
      <Carousel
        currentIndex={currentIndex}
        onChange={(index) => setCurrentIndex(index)}
        minSlides={1}
        maxSlides={1}
      >
        {images?.map((image) => (
          <Box key={image}>
            <Image src={image} alt="Product Image" />
          </Box>
        ))}
      </Carousel>
      <Box mt={4}>
        <button onClick={handlePrevSlide}>Prev</button>
        <button onClick={handleNextSlide}>Next</button>
      </Box>
    </Box>
  );
};

const ProductDetail = () => {
  const productData = {
    id: 1,
    image: "https://source.unsplash.com/collection/404339/800x600",
    title: "Product Name",
    price: "$100",
    description: "Product description...",
    images: [
      "https://source.unsplash.com/collection/404339/800x600",
      "https://source.unsplash.com/collection/404339/800x600",
    ],
  };
  const { image, title, price, description, images } = productData;

  return (
    // <Box>
    //   <Flex flexWrap="wrap" justifyContent="space-between">
    //     <Box w="50%">
    //       <Carousel images={images} />
    //     </Box>
    //     <Box w="50%">
    //       <Product {...productData} />
    //     </Box>
    //   </Flex>
    //   <Text mt={4}>{description}</Text>
    // </Box>
    <p>asdaddasdad</p>
  );
};

export default ProductDetail;
