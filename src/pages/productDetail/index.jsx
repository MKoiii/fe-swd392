import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import { RiSubtractFill } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import Header from "../landingPage/components/Header";
import Footer from "../landingPage/components/Footer";
import {
  AppMerchantControllerApi,
  AppProductControllerApi,
} from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import { useParams } from "react-router-dom";
import { CART, TOAST } from "../../constant";
import { GlobalContext } from "../../App";

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

const Variant = ({ variant, chooseVariantId, onClick, disable }) => {
  return (
    <>
      <Flex
        border={"1px solid"}
        borderColor={variant?.id === chooseVariantId ? "blue.400" : "#cecece"}
        align={"center"}
        justifyContent={"center"}
        p={"6px 12px"}
        color={variant?.id === chooseVariantId ? "blue.400" : "gray.700"}
        borderRadius={"4px"}
        cursor={disable ? "default" : "pointer"}
        onClick={() => {
          if (onClick) {
            if (!disable) {
              onClick();
            }
          }
        }}
        opacity={disable ? 0.35 : 1}
      >
        <Text>{variant?.name}</Text>
      </Flex>
    </>
  );
};

const merchantApi = new AppMerchantControllerApi(
  ApiClientSingleton.getInstance()
);
const Product = ({ product, item, setItem }) => {
  const [totalquantity, setTotalQuantity] = useState(0);
  const [merchant, setMerchant] = useState({});
  const [price, setPrice] = useState(0);
  const [suggestVariantIds, setSuggestVariantIds] = useState([]);
  const [variantIdsSelect, setVariantIdsSelect] = useState({});
  const toast = useToast();
  const { reload, setReload } = useContext(GlobalContext);

  const handleFieldChange = (configId, variantId) => {
    if (variantIdsSelect) {
      const tmp = { ...variantIdsSelect, [configId]: variantId };
      setVariantIdsSelect(tmp);
    }
  };

  const checkAvailableVariant = (variantId) => {
    if (product && product?.skus) {
      for (let sku of product?.skus) {
        if (sku?.variantIds?.includes(variantId)) {
          return true;
        }
      }
    }
    return false;
  };

  const getSuggestVariants = () => {
    var rs = [];
    const variantIds = product?.productConfigs
      ?.filter((c) => c?.id in variantIdsSelect && variantIdsSelect[c?.id])
      ?.map((c) => {
        if (c?.id in variantIdsSelect) {
          return variantIdsSelect[c?.id];
        }
      });
    if (product?.skus) {
      for (let sku of product?.skus) {
        var count = 0;
        for (let id of variantIds) {
          if (sku?.variantIds?.includes(id)) {
            count++;
          }
        }
        if (count === variantIds?.length) {
          rs = [...rs, ...sku?.variantIds];
        }
      }
    }
    setSuggestVariantIds(rs);
  };

  const getCurrentPrice = () => {
    if (product && product?.skus) {
      let variantIds = Object.values(variantIdsSelect);
      let checker = (arr, target) =>
        target.every((v) => arr.includes(v)) && arr?.length === target?.length;
      for (let sku of product?.skus) {
        if (checker(sku?.variantIds, variantIds)) {
          setPrice(sku?.price);
          setTotalQuantity(sku?.quantity);
          setItem({ ...item, sku: sku });
          return;
        }
      }
      var totalQuantity = 0;
      product?.skus?.forEach((s) => {
        totalQuantity += s?.quantity;
      });
      setTotalQuantity(totalQuantity);
      setPrice(product?.fromPrice);
    }
  };

  const getMerchantInfo = (merchantId) => {
    merchantApi.appMerchantControllerGetInfoById(merchantId, (err, data) => {
      if (data) {
        setMerchant(data?.data);
      }
    });
  };

  useEffect(() => {
    getSuggestVariants();
    getCurrentPrice();
  }, [variantIdsSelect]);

  useEffect(() => {
    if (product) {
      var totalQuantity = 0;
      product?.skus?.forEach((s) => {
        totalQuantity += s?.quantity;
      });
      setTotalQuantity(totalQuantity);
      setPrice(product?.fromPrice);
      getMerchantInfo(product?.merchantId);
    }
  }, [product]);
  return (
    <Flex flexDirection={"column"} gap={4}>
      <Rating rating={4} numReviews={12} />
      <Text fontSize={"2xl"}>{product?.name}</Text>
      <Flex>
        <Text>Giá: {price.toLocaleString()}VNĐ</Text>
      </Flex>
      <Text>Mô tả: {product?.description}</Text>
      {product?.productConfigs?.map((config) => {
        return (
          <Flex gap={"8px"} align={"center"}>
            <Text>{config?.name}:</Text>
            {config?.variants?.map((v) => {
              return (
                <Variant
                  disable={
                    !checkAvailableVariant(v?.id) ||
                    (suggestVariantIds?.length > 0 &&
                      !suggestVariantIds?.includes(v?.id))
                  }
                  variant={v}
                  chooseVariantId={variantIdsSelect[config?.id]}
                  onClick={() => {
                    if (
                      config?.id in variantIdsSelect &&
                      variantIdsSelect[config?.id] === v?.id
                    ) {
                      handleFieldChange(config?.id, undefined);
                    } else {
                      handleFieldChange(config?.id, v?.id);
                    }
                  }}
                />
              );
            })}
          </Flex>
        );
      })}
      <Text>Số lượng:</Text>
      <Flex align={"center"} gap={"16px"}>
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
              if (item?.quantity > 0) {
                const quantity = item?.quantity;
                setItem({ ...item, quantity: quantity - 1 });
              }
            }}
            icon={<RiSubtractFill />}
          />
          <Text>{item?.quantity}</Text>
          <IconButton
            onClick={() => {
              const quantity = item?.quantity;
              setItem({ ...item, quantity: quantity + 1 });
            }}
            icon={<BiPlus />}
          />
        </Flex>
        <Text>{totalquantity} sản phẩm sẵn có</Text>
      </Flex>
      <Button
        _hover={{ bg: "rgba(66,153,255,0.8)" }}
        w={"80%"}
        bg={"blue.400"}
        color={"#fff"}
        isDisabled={!item || !item?.sku || item?.quantity === 0}
        onClick={() => {
          const success = CART.addToCart({
            ...item,
            merchant: merchant,
            product: product,
          });
          if (success) {
            TOAST.success(toast, "Mua hàng", "Thêm sản phẩm thành công");
            setReload(!reload);
          }
        }}
      >
        Thêm vào giỏ hàng
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

const productApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
const ProductDetail = (props) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [item, setItem] = useState({ sku: undefined, quantity: 0 });

  const getProductDetail = (productId) => {
    productApi.appProductControllerGetProductDetailsPublic(
      productId,
      (err, data) => {
        if (data) {
          setProduct(data?.data);
        }
      }
    );
  };

  useEffect(() => {
    if (id) {
      getProductDetail(id);
    }
  }, [id]);
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
              <Product product={product} item={item} setItem={setItem} />
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
