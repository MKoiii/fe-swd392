import React, { useContext, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import DynamicFormVariant from "../dynamicFormVariant";
import { CiCircleRemove } from "react-icons/ci";
import FileUpload from "../../../../components/upload";
import { ProductContext } from "../../AddProduct";
import { CHOICE_KIND } from "../../../../constant";

const DynamicFormSetting = ({ isDetail }) => {
  const textColor = useColorModeValue("gray.700", "white");
  // const [formFields, setFormFields] = useState([]);
  const { addProduct, setAddProduct, addSku, setAddSku } =
    useContext(ProductContext);

  const addField = () => {
    const newField = {
      index: addProduct?.productConfigs
        ? addProduct?.productConfigs.length + 1
        : 1,
      name: "",
      choiceKind: CHOICE_KIND.SINGLE_CHOICE,
      variants: [],
      required: true,
    };
    const configs = addProduct?.productConfigs
      ? addProduct?.productConfigs
      : [];
    // setFormFields([...formFields, newField]);
    setAddProduct({ ...addProduct, productConfigs: [...configs, newField] });
  };

  const removeField = (id) => {
    const updatedFields = addProduct?.productConfigs?.filter(
      (field) => field.index !== id
    );
    setAddProduct({ ...addProduct, productConfigs: updatedFields });
  };

  const handleFieldChange = (id, key, value) => {
    const updatedFields = addProduct?.productConfigs?.map((field) =>
      field.index === id ? { ...field, [key]: value } : field
    );
    setAddProduct({ ...addProduct, productConfigs: updatedFields });
  };

  const handleSubmit = () => {
    // Handle form submission here
    // console.log("Form data:", formFields);
  };

  return (
    <Flex flexDirection={"column"} gap={"16px"}>
      {addProduct?.productConfigs?.map((field) => (
        <Flex
          key={field.index}
          flexDirection={"column"}
          gap={"16px"}
          border={"1px solid #eee"}
          borderRadius={"6px"}
          p="16px 32px"
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
              disabled={isDetail}
              opacity={"1 !important"}
            />
            <FormErrorMessage>Nhập tên cài đặt</FormErrorMessage>
          </FormControl>
          <Flex alignItems={"center"} gap={"16px"}>
            <FormControl
              isRequired
              isInvalid={field?.choiceKind === "" || !field?.choiceKind}
            >
              <FormLabel>Loại lựa chọn</FormLabel>
              <Select
                defaultValue={CHOICE_KIND.SINGLE_CHOICE}
                onChange={(e) =>
                  handleFieldChange(field?.index, "choiceKind", e.target.value)
                }
                value={field?.choiceKind}
                disabled={isDetail}
                opacity={"1 !important"}
              >
                <option value={CHOICE_KIND.SINGLE_CHOICE}>Chọn một</option>
                <option value={CHOICE_KIND.MULTIPLE_CHOICE}>Chọn nhiều</option>
              </Select>
              <FormErrorMessage>Chọn loại lựa chọn</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel isRequired>Bắt buộc</FormLabel>
              <Select
                defaultValue={true}
                onChange={(e) =>
                  handleFieldChange(field?.index, "required", e.target.value)
                }
                value={field?.required}
                disabled={isDetail}
                opacity={"1 !important"}
              >
                <option value={true}>Có</option>
                <option value={false}>Không</option>
              </Select>
            </FormControl>
          </Flex>
          <Flex
            flexDirection={"column"}
            border={"1px solid #eee"}
            borderRadius={"6px"}
            p="16px 32px"
            gap={"16px"}
          >
            <Text fontSize="xl" color={textColor} fontWeight="bold">
              Cài đặt phiên bản sản phẩm
            </Text>
            <DynamicFormVariant
              configIndex={field?.index}
              isDetail={isDetail}
            />
          </Flex>
          {!isDetail ? (
            <Button
              leftIcon={<CiCircleRemove size={"24px"} />}
              variant="outline"
              colorScheme="red"
              onClick={() => removeField(field.index)}
            >
              Xoá
            </Button>
          ) : (
            <></>
          )}
        </Flex>
      ))}
      {!isDetail ? (
        <Flex alignItems={"center"} gap={"16px"}>
          <Button variant="outline" colorScheme="green" onClick={addField}>
            Thêm cài đặt
          </Button>
        </Flex>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default DynamicFormSetting;
