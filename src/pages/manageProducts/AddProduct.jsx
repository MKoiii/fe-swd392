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
  Select,
  Textarea,
  Icon,
  InputLeftElement,
  InputGroup,
  NumberInput,
  NumberInputField,
  useToast,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
import { IMAGES, STATUS_STR, TOAST } from "../../constant";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../App";

const categoryApi = new AppProductCategoryControllerApi(
  ApiClientSingleton.getInstance()
);
const productApi = new AppProductControllerApi(
  ApiClientSingleton.getInstance()
);
const mediaApi = new MediaControllerApi(ApiClientSingleton.getInstance());
const AddProductContent = () => {
  const { productId } = useParams();

  const links = [
    { link: "/dashboard", name: "Trang chủ" },
    { link: "/manage-products", name: "Quản lý sản phẩm" },
    { link: "#", name: productId ? "Cập nhật sản phẩm" : "Thêm sản phẩm" },
  ];
  const toast = useToast();
  const textColor = useColorModeValue("gray.700", "white");
  const { addProduct, setAddProduct } = useContext(ProductContext);
  const [categories, setCategories] = useState([]);
  const [previewUrls, setPriviewUrls] = useState([]);
  const { reload, setReload } = useContext(GlobalContext);

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
  }, [reload]);

  useEffect(() => {
    if (productId) {
      productApi.appProductControllerGetDetailsById(
        Number(productId),
        (err, data) => {
          if (data) {
            const res = data?.data;
            setAddProduct(res);
            setPriviewUrls([...previewUrls, res?.image]);
          }
        }
      );
    }
  }, [reload]);

  return (
    <Flex flexDirection={"column"} gap={"16px"}>
      <BreadcrumbCustom links={links} />
      <Text fontSize="xl" color={textColor} fontWeight="bold">
        Thêm sản phẩm
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
                      setAddProduct({ ...addProduct, image: rs?.previewUrl });
                      setPriviewUrls([...previewUrls, rs?.previewUrl]);
                      TOAST.success(
                        toast,
                        "Upload File",
                        "Upload File thành công"
                      );
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
            <FormControl
              isRequired
              isInvalid={addProduct?.name === "" || !addProduct?.name}
            >
              <FormLabel>Tên sản phẩm</FormLabel>
              <Input
                placeholder="Tên sản phẩm"
                value={addProduct?.name}
                onChange={(e) =>
                  setAddProduct({ ...addProduct, name: e.target.value })
                }
              />
              <FormErrorMessage>Nhập tên sản phẩm</FormErrorMessage>
            </FormControl>

            <Flex gap={"16px"}>
              <FormControl
                isRequired
                isInvalid={
                  addProduct?.categoryId === "" || !addProduct?.categoryId
                }
              >
                <FormLabel>Loại sản phẩm</FormLabel>
                <Select
                  value={addProduct?.categoryId}
                  onChange={(e) =>
                    setAddProduct({
                      ...addProduct,
                      categoryId: Number(e.target.value),
                    })
                  }
                  placeholder="Chọn loại sản phẩm"
                >
                  {categories?.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </Select>
                <FormErrorMessage>Chọn loại sản phẩm</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={addProduct?.status === "" || !addProduct?.status}
              >
                <FormLabel>Trạng thái</FormLabel>
                <Select
                  value={addProduct?.status}
                  onChange={(e) =>
                    setAddProduct({ ...addProduct, status: e.target.value })
                  }
                  placeholder="Trạng thái"
                >
                  <option value={STATUS_STR.ACTIVE}>Hoạt động</option>
                  <option value={STATUS_STR.INACTIVE}>Vô hiệu hoá</option>
                </Select>
                <FormErrorMessage>Chọn trạng thái sản phẩm</FormErrorMessage>
              </FormControl>
            </Flex>

            <FormControl>
              <FormLabel>Mô tả</FormLabel>
              <Textarea
                minH={48}
                placeholder="Mô tả sản phẩm"
                value={addProduct?.description}
                onChange={(e) =>
                  setAddProduct({ ...addProduct, description: e.target.value })
                }
              />
            </FormControl>

            <Flex
              flexDirection={"column"}
              border={"1px solid #eee"}
              borderRadius={"6px"}
              p="16px 32px"
              gap={"16px"}
            >
              <Text fontSize="xl" color={textColor} fontWeight="bold">
                Cài đặt sản phẩm
              </Text>
              <DynamicFormSetting />
            </Flex>

            <Flex alignItems={"center"} gap={"16px"}>
              <Button
                variant="outline"
                colorScheme="blue"
                onClick={() => {
                  if (productId) {
                    productApi.appProductControllerUpdateModel(
                      addProduct,
                      (err, data, res) => {
                        if (data) {
                          TOAST.success(
                            toast,
                            "Sản phẩm",
                            "Cập nhật sản phẩm thành công"
                          );
                          setAddProduct(undefined);
                          setReload(!reload)
                        } else {
                          TOAST.error(
                            toast,
                            "Sản phẩm",
                            "Cập nhật sản phẩm thất bại, vui lòng kiểm tra lại dữ liệu"
                          );
                        }
                      }
                    );
                  } else {
                    productApi.appProductControllerCreateModel(
                      addProduct,
                      (err, data, res) => {
                        if (data) {
                          TOAST.success(
                            toast,
                            "Sản phẩm",
                            "Thêm sản phẩm thành công"
                          );
                          setAddProduct(undefined);
                          setReload(!reload)
                          window.location.reload(true)
                        } else {
                          TOAST.error(
                            toast,
                            "Sản phẩm",
                            "Thêm sản phẩm thất bại, vui lòng kiểm tra lại dữ liệu"
                          );
                        }
                      }
                    );
                  }
                }}
              >
                Lưu
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

const ProductContext = createContext({});
const AddProduct = () => {
  const [reload, setReload] = useState(false);
  const [addProduct, setAddProduct] = useState({});
  const [addSku, setAddSku] = useState({});
  return (
    <ProductContext.Provider
      value={{
        reload,
        setReload,
        addProduct,
        setAddProduct,
        addSku,
        setAddSku,
      }}
    >
      <AddProductContent />
    </ProductContext.Provider>
  );
};

export { ProductContext };
export default AddProduct;
