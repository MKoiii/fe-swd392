import React, { useContext, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import { CiCircleRemove } from "react-icons/ci";
import { ProductContext } from "../../AddProduct";

const DynamicFormVariant = ({ configIndex }) => {
  const { addProduct, setAddProduct } = useContext(ProductContext);
  // const [formFields, setFormFields] = useState([
  //   { index: 1, name: "", value: "" },
  // ]);

  const getCurrentConfig = () => {
    const configs = addProduct?.productConfigs?.filter(
      (c) => c.index === configIndex
    );
    return configs?.length > 0 ? configs[0] : undefined;
  };

  const updateVariantConfig = (variants) => {
    let currentConfig = getCurrentConfig();
    console.log(currentConfig);
    if (currentConfig) {
      const newConfig = { ...currentConfig, variants: variants };
      const updatedFields = addProduct?.productConfigs?.map((field) =>
        field.index === configIndex ? newConfig : field
      );
      setAddProduct({ ...addProduct, productConfigs: updatedFields });
    }
  };

  const addField = () => {
    const newField = {
      index: getCurrentConfig()?.variants
        ? getCurrentConfig()?.variants?.length + 1
        : 1,
      name: "",
      isSoldOut: true,
    };
    const variants = getCurrentConfig()?.variants;

    console.log(addProduct);
    console.log(getCurrentConfig());
    console.log(variants);
    updateVariantConfig([...variants, newField]);
  };

  const removeField = (id) => {
    const updatedFields = getCurrentConfig()?.variants?.filter(
      (field) => field.index !== id
    );
    console.log(id);
    console.log(updatedFields);
    updateVariantConfig(updatedFields);
  };

  const handleFieldChange = (id, key, value) => {
    const updatedFields = getCurrentConfig()?.variants.map((field) =>
      field.index === id ? { ...field, [key]: value } : field
    );
    updateVariantConfig(updatedFields);
  };

  const handleSubmit = () => {
    // Handle form submission here
    // console.log("Form data:", formFields);
  };

  return (
    <Flex flexDirection={"column"} gap={"16px"}>
      {getCurrentConfig()?.variants?.map((field) => (
        <Flex
          key={field.index}
          flexDirection={"column"}
          border={"1px solid #eee"}
          borderRadius={"6px"}
          p="16px 32px"
          gap={"16px"}
        >
          <FormControl
            isRequired
            isInvalid={field?.name === "" || !field?.name}
          >
            <FormLabel>Tên</FormLabel>
            <Input
              placeholder="Tên"
              onChange={(e) =>
                handleFieldChange(field?.index, "name", e.target.value)
              }
              value={field?.name}
            />
            <FormErrorMessage>Nhập tên phiên bản</FormErrorMessage>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={field?.isSoldOut === "" || !field?.isSoldOut}
          >
            <FormLabel>Trạng thái</FormLabel>
            <Select
              onChange={(e) =>
                handleFieldChange(field?.index, "", e.target.value)
              }
              value={field?.isSoldOut}
            >
              <option value={true}>Còn hàng</option>
              <option value={false}>Hết hàng</option>
            </Select>
            <FormErrorMessage>Chọn trạng thái</FormErrorMessage>
          </FormControl>
          <Button
            leftIcon={<CiCircleRemove size={"24px"} />}
            variant="outline"
            colorScheme="red"
            onClick={() => removeField(field.index)}
          >
            Xoá
          </Button>
        </Flex>
      ))}
      <Flex alignItems={"center"} gap={"16px"}>
        <Button variant="outline" colorScheme="green" onClick={addField}>
          Thêm cài đặt
        </Button>
        {/* <Button variant="outline" colorScheme="blue" onClick={handleSubmit}>
          Lưu
        </Button> */}
      </Flex>
    </Flex>
  );
};

export default DynamicFormVariant;
