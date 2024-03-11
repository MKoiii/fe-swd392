import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainBoard from "../../components/mainBoard";
import {
  LocationControllerApi,
  SystemMerchantControllerApi,
} from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import {
  Badge,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import {
  GENDER,
  IMAGES,
  LOCATION_KIND,
  MERCHANT_STATUS,
  TOAST,
} from "../../constant";
import { SiZalo, SiFacebook, SiInstagram } from "react-icons/si";
import moment from "moment";
import BreadcrumbCustom from "../../components/breadcrumb";
import ModalApproveMerchant from "./ModalApproveMerchant";

const merchantApi = new SystemMerchantControllerApi(
  ApiClientSingleton.getInstance()
);
const locationApi = new LocationControllerApi(ApiClientSingleton.getInstance());
const MerchantDetailContent = () => {
  const { id } = useParams();
  const [merchant, setMerchant] = useState();
  const textColor = useColorModeValue("gray.700", "white");
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [actions, setActions] = useState({});
  const toast = useToast();
  const [location, setLocation] = useState({});
  const { reload, setReload } = useContext(MerchantContext);

  const links = [
    { link: "/dashboard", name: "Trang chủ" },
    { link: "/manage-merchants", name: "Quản lý đối tác" },
    { link: "#", name: "Thông tin chi tiết" },
  ];

  const getImage = (url) => {
    if (url) {
      return IMAGES.getImage(url);
    }
    return undefined;
  };
  const handleOnFinish = (reason) => {
    var data = {
      merchantId: id,
      status: MERCHANT_STATUS.DRAFT.value,
      reason: reason,
    };
    if (actions?.approve) {
      data = { ...data, status: MERCHANT_STATUS.ACTIVE.value };
    } else if (actions?.reject) {
      data = { ...data, status: MERCHANT_STATUS.DRAFT.value };
    } else if (actions?.lock) {
      data = { ...data, status: MERCHANT_STATUS.LOCK.value };
    }
    merchantApi.systemMerchantControllerApproveOrRejectMerchant(
      data,
      (err, data) => {
        if (data) {
          TOAST.success(
            toast,
            "Phê duyệt đối tác",
            "Phê duyệt đối tác thành công"
          );
          setReload(!reload);
          setIsOpenModal(false);
        } else {
          TOAST.error(
            toast,
            "Phê duyệt đối tác",
            "Phê duyệt đối tác không thành công"
          );
        }
      }
    );
  };
  useEffect(() => {
    merchantApi.systemMerchantControllerGetDetailsById(id, (err, data) => {
      if (data) {
        const res = data?.data;
        setMerchant(res);
      }
    });
  }, [id, reload]);
  console.log(location);
  return (
    <Flex flexDirection={"column"} gap={"16px"}>
      <BreadcrumbCustom links={links} />
      <Text fontSize="xl" color={textColor} fontWeight="bold">
        Thông tin chi tiết đối tác
      </Text>
      <Flex align={"center"} justify={"space-between"}>
        <Flex
          flex={0.6}
          direction={"column"}
          border={"1px #eee solid"}
          borderRadius={"6px"}
          p={"32px"}
          minH={"680px"}
          gap={"16px"}
        >
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Tên cửa hàng:
            </Text>
            <Text fontSize="lg"> {merchant?.name}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Số điện thoại:
            </Text>
            <Text fontSize="lg"> {merchant?.phone}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Tên người đại diện:
            </Text>
            <Text fontSize="lg"> {merchant?.representativeName}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Giới tính:
            </Text>
            <Text fontSize="lg">
              {" "}
              {merchant?.owner?.gender
                ? GENDER[merchant?.owner?.gender].name
                : "--"}
            </Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Giới tính:
            </Text>
            <Text fontSize="lg">
              {" "}
              {merchant?.owner?.birthday
                ? moment(merchant?.owner?.birthday).format("DD/MM?YYYY")
                : "--/--/--"}
            </Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Số điện thoại người đại diện:
            </Text>
            <Text fontSize="lg"> {merchant?.representativePhone}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Email người đại diện:
            </Text>
            <Text fontSize="lg"> {merchant?.representativeEmail}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Tỉnh/Thành phố:
            </Text>
            <Text fontSize="lg"> {merchant?.provinceName}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Quận/Huyện:
            </Text>
            <Text fontSize="lg"> {merchant?.districtName}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Xã/Phường:
            </Text>
            <Text fontSize="lg">{merchant?.wardName} </Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Địa chỉ chi tiết:
            </Text>
            <Text fontSize="lg"> {merchant?.addressDetails}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Trạng thái:
            </Text>
            <Badge
              bg={MERCHANT_STATUS[merchant?.status]?.color}
              fontSize="16px"
              p="3px 10px"
              borderRadius="8px"
              color={"white"}
            >
              {MERCHANT_STATUS[merchant?.status]?.name}
            </Badge>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Mô tả:
            </Text>
            <Text fontSize="lg"> {merchant?.description}</Text>
          </Flex>
          <Flex gap={"4px"} align={"center"}>
            <Text fontSize="lg" fontWeight={"bold"}>
              Mạng xã hội
            </Text>
            <Flex align={"center"} gap={"4px"}>
              <IconButton
                icon={<SiZalo />}
                onClick={() => {
                  if (merchant?.zalo) {
                    window.open(merchant?.zalo);
                  }
                }}
              />
              <IconButton
                icon={<SiFacebook />}
                onClick={() => {
                  if (merchant?.facebook) {
                    window.open(merchant?.facebook);
                  }
                }}
              />
              <IconButton
                icon={<SiInstagram />}
                onClick={() => {
                  if (merchant?.instagram) {
                    window.open(merchant?.instagram);
                  }
                }}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          flex={0.39}
          direction={"column"}
          border={"1px #eee solid"}
          borderRadius={"6px"}
          p={"16px"}
          gap={"32px"}
          minH={"680px"}
        >
          <Flex w={"100%"} align={"center"} justify={"space-between"}>
            <Flex flex={0.48} direction={"column"} gap={"8px"} align={"center"}>
              <Image
                borderRadius={"6px"}
                objectFit="cover"
                src={getImage(merchant?.idFront)}
                alt="Mặt trước CCCD/CMND"
                h={"200px"}
              />
              <Text fontSize="md">Ảnh mặt trước CCCD/CMND</Text>
            </Flex>
            <Flex flex={0.48} direction={"column"} gap={"8px"} align={"center"}>
              <Image
                borderRadius={"6px"}
                objectFit="cover"
                src={getImage(merchant?.idBack)}
                alt="mặt trước CCCD/CMND"
                h={"200px"}
              />
              <Text fontSize="md">Ảnh mặt sau CCCD/CMND</Text>
            </Flex>
          </Flex>
          <Flex w={"100%"} align={"center"} justify={"space-between"}>
            <Flex flex={0.48} direction={"column"} gap={"8px"} align={"center"}>
              <Image
                borderRadius={"6px"}
                objectFit="cover"
                src={getImage(merchant?.avatar)}
                alt="Ảnh cửa hàng"
                h={"200px"}
              />
              <Text fontSize="md">Ảnh cửa hàng</Text>
            </Flex>
            <Flex flex={0.48} direction={"column"} gap={"8px"} align={"center"}>
              <Image
                borderRadius={"6px"}
                objectFit="cover"
                src={getImage(merchant?.coverImage)}
                alt="Banner cửa hàng"
                h={"200px"}
              />
              <Text fontSize="md">Ảnh banner cửa hàng</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex align={"center"} gap={"16px"}>
        {merchant?.status !== MERCHANT_STATUS.ACTIVE.value ? (
          <>
            <Button
              color={"white"}
              bg={"blue.400"}
              onClick={() => {
                setActions({ approve: true, reject: false, lock: false });
                setIsOpenModal(true);
              }}
            >
              Duyệt
            </Button>
            <Button
              color={"white"}
              bg={"yellow.400"}
              onClick={() => {
                setActions({ approve: false, reject: true, lock: false });
                setIsOpenModal(true);
              }}
            >
              Từ chối
            </Button>
          </>
        ) : (
          <></>
        )}
        {merchant?.status === MERCHANT_STATUS.ACTIVE.value ? (
          <Button
            color={"white"}
            bg={"red.400"}
            onClick={() => {
              setActions({ approve: false, reject: false, lock: true });
              setIsOpenModal(true);
            }}
          >
            Khoá
          </Button>
        ) : (
          <></>
        )}
      </Flex>
      <ModalApproveMerchant
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        onFinish={(e) => handleOnFinish(e)}
      />
    </Flex>
  );
};

const MerchantContext = createContext();
const MerchantDetail = () => {
  const { id } = useParams();
  const [reload, setReload] = useState();
  return (
    <MerchantContext.Provider value={{ reload, setReload }}>
      <MainBoard children={<MerchantDetailContent />} />
    </MerchantContext.Provider>
  );
};

export default MerchantDetail;
