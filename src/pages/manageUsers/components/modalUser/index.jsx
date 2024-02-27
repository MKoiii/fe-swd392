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
import { GENDER, ROLE, STATUS, TOAST } from "../../../../constant";
import moment from "moment";

const ModalUser = ({
  isCreate,
  isOpen,
  setOpen,
  title,
  user,
  setUser,
  onFinish,
  roles,
}) => {
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
              <FormLabel>Họ tên</FormLabel>
              <Input
                placeholder="Họ tên"
                value={user?.name}
                onChange={(e) => {
                  setUser({ ...user, name: e.target.value });
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Ngày sinh</FormLabel>
              <Input
                type="date"
                placeholder="Ngày sinh"
                value={moment(user?.birthday).format("YYYY-MM-DD")}
                onChange={(e) => {
                  setUser({ ...user, birthday: e.target.value });
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Số điện thoại</FormLabel>
              <Input
                placeholder="Số điện thoại"
                value={user?.phone}
                onChange={(e) => {
                  setUser({ ...user, phone: e.target.value });
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Email"
                value={user?.email}
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </FormControl>

            <FormControl mt={4}>
              <Flex
                alignItems={"center"}
                justifyContent={"space-between"}
                w={"100%"}
              >
                <Box w={"48%"}>
                  <FormLabel>Giới tính</FormLabel>
                  <Select
                    placeholder={!user?.gender ? "Giới tính" : ""}
                    value={user?.gender}
                    onChange={(e) => {
                      setUser({ ...user, gender: e.target.value });
                    }}
                  >
                    <option value={GENDER.MALE}>Nam</option>
                    <option value={GENDER.FEMALE}>Nữ</option>
                  </Select>
                </Box>
                <Box w={"48%"}>
                  <FormLabel>Trạng thái</FormLabel>
                  <Select
                    value={user?.active}
                    onChange={(e) => {
                      setUser({ ...user, active: e.target.value });
                    }}
                  >
                    <option value={STATUS.ACTIVE}>
                      <Tag colorScheme="green" variant="solid" size={"sm"}>
                        Hoạt động
                      </Tag>
                    </option>
                    <option value={STATUS.INACTIVE}>
                      <Tag colorScheme="gray" variant="solid" size={"sm"}>
                        Vô hiệu hoá
                      </Tag>
                    </option>
                  </Select>
                </Box>
              </Flex>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Roles</FormLabel>
              <Select
                placeholder="Chọn role"
                value={user?.roleId}
                onChange={(e) => setUser({ ...user, roleId: e.target.value })}
              >
                {isCreate
                  ? roles
                      ?.filter((r) => `ROLE_${r?.kind}` !== ROLE.SUPER_ADMIN)
                      ?.map((r) => {
                        return <option value={r?.id}>{r?.kind}</option>;
                      })
                  : roles?.map((r) => {
                      return <option value={r?.id}>{r?.kind}</option>;
                    })}
              </Select>
            </FormControl>
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

export default ModalUser;
