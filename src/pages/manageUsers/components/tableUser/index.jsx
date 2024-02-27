// Chakra imports
import {
  Button,
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/card/Card";
import CardBody from "../../../../components/card/CardBody";
import CardHeader from "../../../../components/card/CardHeader";
import React, { useContext, useEffect, useState } from "react";
import TableRowDataUsers from "../tableRowDataUsers";
import Paginate from "../../../../components/paginate";
import ApiClientSingleton from "../../../../api/apiClientImpl";
import { DEFAULE_PAGE_SIZE, TOAST } from "../../../../constant";
import { UserContext } from "../..";
import { FiPlus } from "react-icons/fi";
import ModalUser from "../modalUser";
import {
  SystemRoleControllerApi,
  SystemUserControllerApi,
} from "../../../../api/generated/generate-api";

const userApi = new SystemUserControllerApi(ApiClientSingleton.getInstance());
const roleApi = new SystemRoleControllerApi(ApiClientSingleton.getInstance());
const TableUsers = ({ title, captions, data }) => {
  const { reload, setReload } = useContext(UserContext);
  const textColor = useColorModeValue("gray.700", "white");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [users, setUsers] = useState([]);
  const [userCreate, setUserCreate] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [roles, setRoles] = useState([]);
  const toast = useToast();

  const getUserFilter = async () => {
    try {
      userApi.systemUserControllerGetInfoPageWithFilter(
        {
          page: currentPage - 1,
          size: DEFAULE_PAGE_SIZE,
        },
        (error, data, response) => {
          const res = data?.data;
          setUsers(res?.data);
          setTotalPage(res?.totalPages);
        }
      );
    } catch (err) {}
  };

  useEffect(() => {
    getUserFilter();
  }, [currentPage, reload]);

  useEffect(() => {
    roleApi.systemRoleControllerGetInfoList((err, data, res) => {
      if (data) {
        setRoles(data?.data);
      }
    });
    getUserFilter();
  }, []);

  return (
    <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
      <CardHeader p="6px 0px 22px 0px">
        <Flex alignItems={"center"} gap={"8px"}>
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            {title}
          </Text>
          <Button
            leftIcon={<FiPlus />}
            colorScheme="twitter"
            variant="solid"
            size={"sm"}
            borderRadius={"6px"}
            onClick={() => setIsOpen(true)}
          >
            Tạo mới
          </Button>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color={textColor}>
          <Thead>
            <Tr my=".8rem" pl="0px" color="gray.400">
              {captions.map((caption, idx) => {
                return (
                  <Th
                    textAlign={"center"}
                    color="gray.400"
                    key={idx}
                    ps={idx === 0 ? "0px" : null}
                  >
                    {caption}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {users?.map((row) => {
              return (
                <TableRowDataUsers
                  key={`${row.email}-${row.name}`}
                  userInfo={row}
                  roles={roles}
                />
              );
            })}
          </Tbody>
          <Paginate
            isTable={true}
            colSpan={captions?.length}
            currentPage={currentPage}
            totalPages={totalPage}
            onPageChange={(page) => {
              setCurrentPage(page);
            }}
          />
        </Table>
      </CardBody>

      <ModalUser
        isCreate={true}
        title={"Tạo mới"}
        isOpen={isOpen}
        setOpen={setIsOpen}
        user={userCreate}
        setUser={setUserCreate}
        roles={roles}
        onFinish={() => {
          userApi.systemUserControllerCreateModel(
            userCreate,
            (err, data, res) => {
              if (data) {
                setIsOpen(false);
                setReload(!reload);
                TOAST.success(toast, "User", "Tạo mới người dùng thành công");
              } else {
                TOAST.error(toast, "User", "Tạo mới người dùng thất bại");
              }
            }
          );
        }}
      />
    </Card>
  );
};

export default TableUsers;
