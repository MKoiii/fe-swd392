import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Button,
  VStack,
  Flex,
  Text,
  useColorModeValue,
  Textarea,
  Icon,
  InputLeftElement,
  InputGroup,
  NumberInput,
  NumberInputField,
  useToast,
  Image,
  FormErrorMessage,
  Code,
  Select,
} from "@chakra-ui/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Select as ReactSelect } from "chakra-react-select";
import MainBoard from "../../components/mainBoard";
import BreadcrumbCustom from "../../components/breadcrumb";
import { FiFile } from "react-icons/fi";
import FileUpload from "../../components/upload";
import DynamicFormSetting from "./components/dynamicFormSetting";
import {
  AppProductCategoryControllerApi,
  AppProductControllerApi,
  MediaControllerApi,
} from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import { CHOICE_KIND, IMAGES, STATUS_STR, TOAST } from "../../constant";
import { useParams } from "react-router-dom";
import { ProductContext } from "./AddProduct";
import DynamicFormSku from "./components/dynamicFormSku";
import TableProductConfigs from "./components/tableProductConfig";
const categoryApi = new AppProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
const productApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
const mediaApi = new MediaControllerApi(ApiClientSingleton.getInstance());
const SettingSkuContent = () => {
  const { productId, skuId } = useParams();
  const links = [
    { link: "/dashboard", name: "Trang chủ" },
    { link: "/manage-products", name: "Quản lý sản phẩm" },
    {
      link: `/manage-products/detail/${productId}`,
      name: "Chi tiêt lý sản phẩm",
    },
    { link: "#", name: "Cài đặt SKU" },
  ];
  const { addProduct, setAddProduct, skus, setSkus } =
    useContext(ProductContext);
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const [categories, setCategories] = useState([]);
  const [previewUrls, setPriviewUrls] = useState([]);
  const [skuSelect, setSkuSelect] = useState();

  useEffect(() => {
    categoryApi.appProductCategoryControllerGetInfoList((err, data, res) => {
      if (data) {
        const newCategories = [];
        data?.data?.forEach((category) => {
          if (!category?.children) {
            newCategories?.push(category);
          } else {
            newCategories.push(...category?.children);
          }
        });
        setCategories(newCategories);
      }
    });
  }, []);

  useEffect(() => {
    if (productId) {
      productApi.appProductControllerGetDetailsById(
        Number(productId),
        (err, data) => {
          if (data) {
            const res = data?.data;
            setAddProduct(res);
            if (res?.skus) {
              setSkuSelect(...res?.skus?.filter((s) => s?.id === skuId));
            }
          }
        }
      );
    }
  }, [productId, skuId]);

  return (
    <Flex flexDirection={"column"} gap={"16px"}>
      <BreadcrumbCustom links={links} />
      <Text fontSize="xl" color={textColor} fontWeight="bold">
        Cài đặt SKU
      </Text>
      <Flex alignItems={"start"} gap={"32px"}>
        <Flex flex={1}>
          <Flex
            flex={1}
            flexDirection={"column"}
            border={"1px solid #eee"}
            borderRadius={"6px"}
            p="16px 32px"
            gap={"16px"}
            minH={"100vh"}
          >
            {previewUrls?.map((url, index) => {
              if (url) {
                return (
                  <Box position={"relative"}>
                    <Image src={IMAGES.getImage(url)} boxSize="180px" />
                  </Box>
                );
              }
            })}
            <FormControl>
              <FormLabel>Tên sản phẩm</FormLabel>
              <Input
                placeholder="Tên sản phẩm"
                disabled
                value={addProduct?.name}
                opacity={"1 !important"}
              />
            </FormControl>

            <Flex gap={"16px"}>
              <FormControl>
                <FormLabel>Loại sản phẩm</FormLabel>
                <Select
                  value={addProduct?.categoryId}
                  disabled
                  placeholder="Chọn loại sản phẩm"
                  opacity={"1 !important"}
                >
                  {categories?.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Trạng thái</FormLabel>
                <Select
                  value={addProduct?.status}
                  disabled
                  placeholder="Trạng thái"
                  opacity={"1 !important"}
                >
                  <option value={STATUS_STR.ACTIVE}>Hoạt động</option>
                  <option value={STATUS_STR.INACTIVE}>Vô hiệu hoá</option>
                </Select>
              </FormControl>
            </Flex>

            <FormControl>
              <FormLabel>Mô tả</FormLabel>
              <Textarea
                minH={48}
                placeholder="Mô tả sản phẩm"
                value={addProduct?.description}
                disabled
                opacity={"1 !important"}
              />
            </FormControl>

            <Flex
              flexDirection={"column"}
              border={"1px solid #eee"}
              borderRadius={"6px"}
              p="16px 32px"
              gap={"16px"}
            >
              <DynamicFormSku product={addProduct} defaultSku={skuSelect} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
const SettingSku = () => {
  const [addProduct, setAddProduct] = useState();
  const [skus, setSkus] = useState([]);
  return (
    <ProductContext.Provider
      value={{ addProduct, setAddProduct, skus, setSkus }}
    >
      <SettingSkuContent />
    </ProductContext.Provider>
  );
};

export default SettingSku;
