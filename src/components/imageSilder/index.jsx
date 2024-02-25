import { Button, Collapse, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const defaultValues = {
  images: null,
  captions: null,
  index: 0,
  prevIndex: -1,
};
const ImageSlideContext = createContext(defaultValues);

const ImageSlideController = ({ auto }) => {
  const [slide, setSlide] = useContext(ImageSlideContext);
  const changeSlide = (index) => {
    if (index >= slide?.images.length) {
      index = 0;
    }
    setSlide((prev) => {
      return {
        ...prev,
        index: index,
      };
    });
  };

  var interval = null;
  const autoSlide = useRef();
  autoSlide.current = () => {
    if (auto > 0) {
      interval = setInterval(() => {
        setSlide((prev) => {
          return {
            ...prev,
            index: prev.index + 1 >= prev.images.length ? 0 : prev.index + 1,
          };
        });
      }, auto);
    }
  };
  useEffect(() => {
    autoSlide.current();
    return () => clearInterval(interval);
  }, [interval]);

  return (
    <HStack mt={4} w="full" justify="center">
      {slide?.images &&
        slide?.images.map((img, index) => (
          <Button
            onClick={() => changeSlide(index)}
            colorScheme={slide?.index === index ? "blue" : "gray"}
            borderRadius="full"
            size="sm"
            key={`button_${img}`}
          >
            {index + 1}
          </Button>
        ))}
    </HStack>
  );
};

const ImageDisplay = ({ minH }) => {
  const [slide] = useContext(ImageSlideContext);

  return (
    <>
      <div style={{ position: "relative" }}>
        {slide?.images && (
          <Flex
            align="center"
            direction="column"
            width={"100%"}
            height={"640px"}
          >
            {slide?.images &&
              slide?.images.map((img, index) => (
                <Collapse
                  animateOpacity
                  in={index === slide?.index}
                  key={`image_${img}`}
                  style={{ width: "100%" }}
                >
                  <Image src={img} width={"100%"} />
                </Collapse>
              ))}
          </Flex>
        )}
        <div
          style={{
            position: "absolute",
            top: "calc(100% - 60px)",
            left: "calc(50vw - 96px)",
          }}
        >
          <ImageSlideController auto={5000} />
        </div>
      </div>
    </>
  );
};

const CaptionDisplay = () => {
  const [slide] = useContext(ImageSlideContext);
  const caption = useMemo(() => {
    return slide?.captions[slide?.index];
  }, [slide]);

  return (
    <Flex w="full" p={4} justify="center">
      <Text>{caption}</Text>
    </Flex>
  );
};

const ImageSlider = ({ images, captions, auto = 5000, minH = "500px" }) => {
  const [slide, setSlide] = useState({
    ...defaultValues,
    images: images,
    captions: captions,
  });

  return (
    <ImageSlideContext.Provider value={[slide, setSlide]}>
      <Flex w="full" direction="column">
        <ImageDisplay />
      </Flex>
    </ImageSlideContext.Provider>
  );
};

export default ImageSlider;
