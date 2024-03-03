import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Select } from "@chakra-ui/select";
import { Tag } from "@chakra-ui/tag";
import { GENDER, STATUS, STATUS_STR, TOAST } from "../../../../constant";
import { useToast } from "@chakra-ui/toast";
import { Textarea } from "@chakra-ui/textarea";

const ModalCategory = ({
  isOpen,
  setOpen,
  title,
  category,
  setCategory,
  onFinish,
  parentCategories,
  parent,
}) => {
  const toast = useToast();
  const onClose = () => {
    if (setOpen !== undefined) {
      setOpen(false);
    }
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tên</FormLabel>
              <Input
                placeholder="Tên"
                value={category?.name}
                onChange={(e) => {
                  setCategory({ ...category, name: e.target.value });
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Mô tả</FormLabel>
              <Textarea
                placeholder="Mô tả"
                value={category?.description}
                onChange={(e) => {
                  setCategory({ ...category, description: e.target.value });
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Trạng thái</FormLabel>
              <Select
                placeholder="Trạng thái"
                value={category?.status}
                onChange={(e) => {
                  setCategory({ ...category, status: e.target.value });
                }}
              >
                <option value={STATUS_STR.ACTIVE}>Hoạt động</option>
                <option value={STATUS_STR.INACTIVE}>Vô hiệu hoá</option>
              </Select>
            </FormControl>

            {parent ? (
              <></>
            ) : (
              <FormControl mt={4}>
                <FormLabel>Category nguồn</FormLabel>
                <Select
                  placeholder="Category nguồn"
                  value={category?.parentId}
                  onChange={(e) =>
                    setCategory({ ...category, parentId: e.target.value })
                  }
                >
                  {parentCategories
                    ?.filter((c) => !c?.parentId && c?.id != category?.id)
                    ?.map((c) => {
                      return <option value={c?.id}>{c?.name}</option>;
                    })}
                </Select>
              </FormControl>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onFinish}>
              Lưu
            </Button>
            <Button onClick={onClose}>Huỷ</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCategory;
