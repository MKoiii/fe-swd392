import {
  Avatar,
  Badge,
  Button,
  Flex,
  Tag,
  TagLabel,
  Td,
  Text,
  Tr,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import ModalUser from "../modalUser";
import { SystemUserControllerApi } from "../../../../api/generated/generate-api";
import ApiClientSingleton from "../../../../api/apiClientImpl";
import { UserContext } from "../..";
import { TOAST } from "../../../../constant";

const userApi = new SystemUserControllerApi(ApiClientSingleton.getInstance());
function TableRowDataUsers({ userInfo, roles }) {
  const { id, name, email, phone, photo, active, roleKind } = userInfo;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);
  const [userSelect, setUserSelect] = useState();
  const { reload, setReload } = useContext(UserContext);
  const toast = useToast();

  return (
    <>
      <Tr>
        <Td minWidth={{ sm: "160px" }} pl="0px" py={".6rem"}>
          <Flex
            justifyContent={"start"}
            align="center"
            py=".4rem"
            minWidth="100%"
            flexWrap="nowrap"
          >
            <Avatar src={photo} w="50px" borderRadius="12px" me="18px" />
            <Flex direction="column">
              <Text
                fontSize="md"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {name}
              </Text>
            </Flex>
          </Flex>
        </Td>

        <Td>
          <Flex alignItems={"center"} direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {phone}
            </Text>
          </Flex>
        </Td>
        <Td>
          <Flex alignItems={"center"} direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold">
              {email}
            </Text>
          </Flex>
        </Td>
        <Td>
          <Flex alignItems={"center"} direction="column">
            <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
              {roleKind}
            </Text>
          </Flex>
        </Td>
        <Td>
          <Flex alignItems={"center"} direction="column">
            <Badge
              bg={active ? "green.400" : bgStatus}
              color={active ? "white" : colorStatus}
              fontSize="16px"
              p="3px 10px"
              borderRadius="8px"
            >
              {active ? "Hoạt động" : "Đã khoá"}
            </Badge>
          </Flex>
        </Td>
        <Td>
          <Flex justifyContent={"center"} gap={"8px"}>
            <Button p="0px" bg="transparent" variant="no-hover">
              <Tag size={"lg"} variant="outline" colorScheme="gray">
                <TagLabel>Chi tiết</TagLabel>
              </Tag>
            </Button>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() => {
                userApi.systemUserControllerGetDetailsById(
                  id,
                  (err, data, response) => {
                    const res = data?.data;
                    setUserSelect(res);
                  }
                );
                setIsOpenModalUser(true);
              }}
            >
              <Tag size={"lg"} variant="outline" colorScheme="blue">
                <TagLabel>Cập nhật</TagLabel>
              </Tag>
            </Button>
            <Button
              p="0px"
              bg="transparent"
              variant="no-hover"
              onClick={() => {}}
            >
              <Tag size={"lg"} variant="outline" colorScheme="red">
                <TagLabel>Xoá</TagLabel>
              </Tag>
            </Button>
          </Flex>
        </Td>
      </Tr>
      <ModalUser
        isCreate={false}
        title={"Cập nhật thông tin"}
        isOpen={isOpenModalUser}
        setOpen={setIsOpenModalUser}
        user={userSelect}
        setUser={setUserSelect}
        roles={roles}
        onFinish={() => {
          userApi.systemUserControllerUpdateModel(
            userSelect,
            (err, data, res) => {
              if (data) {
                setIsOpenModalUser(false);
                setReload(!reload);
                TOAST.success(toast, "User", "Cập nhật người dùng thành công");
              } else {
                TOAST.error(toast, "User", "Cập nhật người dùng thất bại");
              }
            }
          );
        }}
      />
    </>
  );
}

export default TableRowDataUsers;
