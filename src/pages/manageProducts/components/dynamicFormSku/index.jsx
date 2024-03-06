import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import FileUpload from "../../../../components/upload";
import { ProductContext } from "../../AddProduct";
import { CHOICE_KIND, IMAGES, TOAST } from "../../../../constant";
import { CiCircleRemove } from "react-icons/ci";
import { Select } from "chakra-react-select";
import {
  MediaControllerApi,
  SystemSkuControllerApi,
} from "../../../../api/generated/generate-api";
import ApiClientSingleton from "../../../../api/apiClientImpl";
import { useNavigate } from "react-router-dom";

const mediaApi = new MediaControllerApi(ApiClientSingleton.getInstance());
const skuApi = new SystemSkuControllerApi(ApiClientSingleton.getInstance());
const DynamicFormSku = ({ product, defaultSku }) => {
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  // const [formFields, setFormFields] = useState([]);
  const { addProduct, setAddProduct, skus, setSkus } =
    useContext(ProductContext);

  const navigate = useNavigate();
  const [previewUrls, setPriviewUrls] = useState([]);
  const [sku, setSku] = useState();
  const [pickedVariants, setPickedVariants] = useState({});

  useEffect(() => {
    if (defaultSku) {
      setSku(defaultSku);
      var picked = {};
      product?.productConfigs?.forEach((config) => {
        config?.variants?.forEach((v) => {
          const isPicked =
            sku?.variants?.filter((d) => d?.id === v?.id)?.length > 0;
          if (isPicked) {
            console.log(v);
            picked = {
              ...picked,
              [config?.id]: { value: v.id, label: v.name },
            };
          }
        });
      });
      setPickedVariants(picked);
    }
  }, [defaultSku]);
  return (
    <Flex flexDirection={"column"} gap={"16px"}>
      <Flex
        flexDirection={"column"}
        border={"1px solid #eee"}
        borderRadius={"6px"}
        p="16px 32px"
        gap={"16px"}
      >
        <Text fontSize="xl" color={textColor} fontWeight="bold">
          Cài đặt số lượng sản phẩm
        </Text>

        <Flex gap={"16px"}>
          {product?.productConfigs?.map((config) => {
            return (
              <FormControl isRequired={config?.required}>
                <FormLabel>Chọn phiên bản: {config?.name}</FormLabel>
                <Select
                  // isMulti={CHOICE_KIND.MULTIPLE_CHOICE === config?.choiceKind}
                  name="global-tag-variant"
                  tagVariant="outline"
                  options={config?.variants?.map((v) => {
                    return { value: v?.id, label: v?.name };
                  })}
                  placeholder="Chọn phiên bản..."
                  onChange={(e) => {
                    setPickedVariants({
                      ...pickedVariants,
                      [config?.id]: e,
                    });
                  }}
                  value={pickedVariants[config?.id]}
                />
              </FormControl>
            );
          })}
        </Flex>
        <FormControl isRequired>
          <FormLabel>Giá sản phẩm</FormLabel>
          <NumberInput value={sku?.price}>
            <NumberInputField
              placeholder="Giá sản phẩm"
              onChange={(e) => {
                setSku({ ...sku, price: e.target.value });
              }}
            />
          </NumberInput>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Số lượng sản phẩm</FormLabel>
          <NumberInput value={sku?.quantity}>
            <NumberInputField
              placeholder="Số lượng sản phẩm"
              onChange={(e) => {
                setSku({ ...sku, quantity: e.target.value });
              }}
            />
          </NumberInput>
        </FormControl>
        <FileUpload
          isMultiple={false}
          onFilesSelect={(files) => {
            console.log(files);
            if (files?.length > 0) {
              const file = files[0];
              mediaApi.mediaControllerUploadPublic(
                "OTHER",
                file,
                (err, data, res) => {
                  const rs = data?.data;
                  setSku({ ...sku, image: rs?.previewUrl });
                  setPriviewUrls([...previewUrls, rs?.previewUrl]);
                  TOAST.success(toast, "Upload File", "Upload File thành công");
                }
              );
            }
          }}
        />
        {previewUrls?.map((url, index) => {
          if (url) {
            return (
              <Box position={"relative"}>
                <Image src={IMAGES.getImage(url)} boxSize="180px" />
              </Box>
            );
          }
        })}
        {sku?.image && previewUrls?.length <= 0 ? (
          <Box position={"relative"}>
            <Image src={IMAGES.getImage(sku?.image)} boxSize="180px" />
          </Box>
        ) : (
          <></>
        )}
      </Flex>
      <Flex alignItems={"center"} gap={"16px"}>
        <Button
          variant="outline"
          colorScheme="blue"
          onClick={() => {
            const variantIds = [];
            product?.productConfigs?.forEach((c) => {
              variantIds.push(pickedVariants[c?.id]?.value);
            });
            const req = { ...sku, productId: product?.id, variantIds };
            if (defaultSku) {
              skuApi.appSkuControllerUpdateModel(req, (err, data, res) => {
                if (data) {
                  TOAST.success(
                    toast,
                    "Cập nhật SKU",
                    "Cập nhật SKU thành công"
                  );
                  navigate(`/manage-products/detail/${product?.id}`);
                } else {
                  TOAST.error(toast, "Cập nhật SKU", res?.body?.message);
                }
              });
            } else {
              skuApi.appSkuControllerCreateModel(req, (err, data, res) => {
                if (data) {
                  TOAST.success(toast, "Cài đặt SKU", "Cài đặt SKU thành công");
                  navigate(`/manage-products/detail/${product?.id}`);
                } else {
                  TOAST.error(toast, "Cài đặt SKU", res?.body?.message);
                }
              });
            }
          }}
        >
          Lưu
        </Button>
      </Flex>
    </Flex>
  );
};

export default DynamicFormSku;
