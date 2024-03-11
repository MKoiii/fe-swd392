import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import FileUpload from "../../components/upload";
import LocationControllerApi from "../../api/generated/generate-api/api/LocationControllerApi";
import ApiClientSingleton from "../../api/apiClientImpl";
import { IMAGES, LOCATION_KIND, TOAST } from "../../constant";
import {
  AppMerchantControllerApi,
  MediaControllerApi,
} from "../../api/generated/generate-api";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const mediaApi = new MediaControllerApi(ApiClientSingleton.getInstance());
const locationApi = new LocationControllerApi(ApiClientSingleton.getInstance());
const merchantApi = new AppMerchantControllerApi(
  ApiClientSingleton.getInstance()
);
const RegisterMerchant = () => {
  const [info, setInfo] = useState({});
  const [locations, setLocations] = useState([]);
  const [previews, setPreviews] = useState();
  const toast = useToast();
  const navigate = useNavigate();

  const getLocation = (kind, parentId) => {
    locationApi.locationControllerGetInfoListWithFilter(
      kind,
      { parentId },
      (err, data) => {
        if (data) {
          const res = data?.data;
          setLocations({ ...locations, [kind]: res });
        }
      }
    );
  };

  const uploadFile = (files, key) => {
    if (files?.length > 0) {
      const file = files[0];
      setPreviews({ ...previews, [key]: URL.createObjectURL(file) });
      mediaApi.mediaControllerUploadPublic("OTHER", file, (err, data, res) => {
        const rs = data?.data;
        setInfo({ ...info, [key]: rs?.previewUrl });
        TOAST.success(toast, "Upload File", "Upload File thành công");
      });
      console.log(files, key);
    }
  };

  useEffect(() => {
    getLocation(LOCATION_KIND.PROVINCE);
    merchantApi.appMerchantControllerGetDetailsByContext((err, data) => {
      if (data) {
        const res = data?.data;
        setInfo(res);
        getLocation(LOCATION_KIND.DISTRICT, res?.provinceId);
        getLocation(LOCATION_KIND.WARD, res?.districtId);
        setPreviews({
          idBack: IMAGES.getImage(res?.idBack),
          idFront: IMAGES.getImage(res?.idFront),
          avatar: IMAGES.getImage(res?.avatar),
          coverImage: IMAGES.getImage(res?.coverImage),
        });
      }
    });
  }, []);
  return (
    <Flex my={"24px"} width={"800px"} direction={"column"} gap={"16px"}>
      <Flex gap={"16px"} align={"center"}>
        <FormControl isRequired>
          <FormLabel>Tên cửa hàng</FormLabel>
          <Input
            placeholder="Tên cửa hàng"
            onChange={(e) => {
              setInfo({ ...info, name: e.target.value });
            }}
            value={info?.name}
          />
          <FormErrorMessage>Nhập tên cửa hàng</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Tên người đại diện</FormLabel>
          <Input
            placeholder="Tên người đại diện"
            onChange={(e) => {
              setInfo({ ...info, representativeName: e.target.value });
            }}
            value={info?.representativeName}
          />
          <FormErrorMessage>Nhập tên người đại diện</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap={"16px"} align={"center"}>
        <FormControl isRequired>
          <FormLabel>Số điện thoại</FormLabel>
          <Input
            placeholder="Số điện thoại"
            onChange={(e) => {
              setInfo({ ...info, phone: e.target.value });
            }}
            value={info?.phone}
          />
          <FormErrorMessage>Nhập Số điện thoại</FormErrorMessage>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Số điện thoại người đại diện</FormLabel>
          <Input
            placeholder="Số điện thoại người đại diện"
            onChange={(e) => {
              setInfo({ ...info, representativePhone: e.target.value });
            }}
            value={info?.representativePhone}
          />
          <FormErrorMessage>Nhập Số điện thoại người đại diện</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap={"16px"} align={"center"}>
        <FormControl isRequired>
          <FormLabel>Email thoại người đại diện</FormLabel>
          <Input
            type="email"
            placeholder="Email thoại người đại diện"
            onChange={(e) => {
              setInfo({ ...info, representativeEmail: e.target.value });
            }}
            value={info?.representativeEmail}
          />
          <FormErrorMessage>Nhập Email thoại người đại diện</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex gap={"16px"} align={"center"}>
        <FormControl>
          <FormLabel>Mô tả</FormLabel>
          <Textarea
            placeholder="Mô tả"
            minH={"120px"}
            onChange={(e) => {
              setInfo({ ...info, description: e.target.value });
            }}
            value={info?.description}
          />
        </FormControl>
      </Flex>
      <Flex gap={"16px"} align={"center"}>
        <FormControl isRequired>
          <FormLabel>Tỉnh/Thành phố</FormLabel>
          <Select
            placeholder="Tỉnh/Thành phố"
            onChange={(e) => {
              setInfo({ ...info, provinceId: e.target.value });
              getLocation(LOCATION_KIND.DISTRICT, e.target.value);
            }}
            value={info?.provinceId}
          >
            {locations[LOCATION_KIND.PROVINCE]?.map((p) => {
              return (
                <option key={p?.id} value={p?.id}>
                  {p?.name}
                </option>
              );
            })}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Quận/Huyện</FormLabel>
          <Select
            placeholder="Quận/Huyện"
            onChange={(e) => {
              setInfo({ ...info, districtId: e.target.value });
              getLocation(LOCATION_KIND.WARD, e.target.value);
            }}
            value={info?.districtId}
          >
            {locations[LOCATION_KIND.DISTRICT]?.map((p) => {
              return (
                <option key={p?.id} value={p?.id}>
                  {p?.name}
                </option>
              );
            })}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Xã/Phường</FormLabel>
          <Select
            placeholder="Xã/Phường"
            onChange={(e) => {
              setInfo({ ...info, wardId: e.target.value });
            }}
            value={info?.wardId}
          >
            {locations[LOCATION_KIND.WARD]?.map((p) => {
              return (
                <option key={p?.id} value={p?.id}>
                  {p?.name}
                </option>
              );
            })}
          </Select>
        </FormControl>
      </Flex>
      <Flex gap={"16px"} align={"center"}>
        <FormControl isRequired>
          <FormLabel>Địa chỉ chi tiết</FormLabel>
          <Textarea
            placeholder="Địa chỉ chi tiết"
            minH={"120px"}
            onChange={(e) => {
              setInfo({ ...info, addressDetails: e.target.value });
            }}
            value={info?.addressDetails}
          />
        </FormControl>
      </Flex>
      <Divider />
      <Text>Thông tin khác</Text>
      <Flex gap={"16px"} align={"center"}>
        <FormControl>
          <FormLabel>Facebook</FormLabel>
          <Input
            placeholder="Facebook"
            onChange={(e) => {
              setInfo({ ...info, facebook: e.target.value });
            }}
            value={info?.facebook}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Zalo</FormLabel>
          <Input
            placeholder="Zalo"
            onChange={(e) => {
              setInfo({ ...info, zalo: e.target.value });
            }}
            value={info?.zalo}
          />
        </FormControl>
      </Flex>
      <Flex gap={"16px"} align={"center"}>
        <FormControl>
          <FormLabel>Instagram</FormLabel>
          <Input
            placeholder="Instagram"
            onChange={(e) => {
              setInfo({ ...info, instagram: e.target.value });
            }}
            value={info?.instagram}
          />
        </FormControl>
        <FormControl>
          <FormLabel>Youtube</FormLabel>
          <Input
            placeholder="Youtube"
            onChange={(e) => {
              setInfo({ ...info, youtube: e.target.value });
            }}
            value={info?.youtube}
          />
        </FormControl>
      </Flex>
      <Divider />
      <Flex gap={"16px"} align={"center"} justify={"space-between"}>
        <Flex gap={"16px"} direction={"column"}>
          <Text>Ảnh mặt trước CMND/CCCD</Text>
          <FileUpload
            key={"idFront"}
            isMultiple={false}
            onFilesSelect={(files) => {
              uploadFile(files, "idFront");
            }}
          />
          {previews?.idFront ? (
            <Box position={"relative"}>
              <Image src={previews["idFront"]} boxSize="180px" />
            </Box>
          ) : (
            <></>
          )}
        </Flex>
        <Flex gap={"16px"} direction={"column"}>
          <Text>Ảnh mặt sau CMND/CCCD</Text>
          <FileUpload
            key={"idBack"}
            isMultiple={false}
            onFilesSelect={(files) => {
              uploadFile(files, "idBack");
            }}
          />
          {previews?.idBack ? (
            <Box position={"relative"}>
              <Image src={previews["idBack"]} boxSize="180px" />
            </Box>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
      <Flex gap={"16px"} align={"center"} justify={"space-between"}>
        <Flex gap={"16px"} direction={"column"}>
          <Text>Ảnh của hàng</Text>
          <FileUpload
            key={"avatar"}
            isMultiple={false}
            onFilesSelect={(files) => {
              console.log(files);
              uploadFile(files, "avatar");
            }}
          />
          {previews?.avatar ? (
            <Box position={"relative"}>
              <Image src={previews["avatar"]} boxSize="180px" />
            </Box>
          ) : (
            <></>
          )}
        </Flex>
        <Flex gap={"16px"} direction={"column"}>
          <Text>Ảnh banner cửa hàng</Text>
          <FileUpload
            key={"coverImage"}
            isMultiple={false}
            onFilesSelect={(files) => {
              uploadFile(files, "coverImage");
            }}
          />
          {previews?.coverImage ? (
            <Box position={"relative"}>
              <Image src={previews["coverImage"]} boxSize="180px" />
            </Box>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>

      <Flex gap={"16px"} align={"center"} mt={"16px"}>
        <Button
          bg={"blue.400"}
          color={"#fff"}
          onClick={() => {
            merchantApi.appMerchantControllerCreateModel(info, (err, data) => {
              if (data) {
                TOAST.success(
                  toast,
                  "Đăng ký merchant",
                  "Lưu đăng ký merchant thành công"
                );
              } else {
                TOAST.error(
                  toast,
                  "Đăng ký merchant",
                  "Lưu đăng ký merchant không thành công"
                );
              }
            });
          }}
        >
          Lưu nháp
        </Button>
        <Button
          bg={"green.400"}
          color={"#fff"}
          onClick={() => {
            merchantApi.appMerchantControllerSubmitDraft((err, data) => {
              if (data) {
                TOAST.success(
                  toast,
                  "Đăng ký merchant",
                  "Xác nhận gửi đăng ký merchant thành công"
                );
                navigate("/home");
              } else {
                TOAST.error(
                  toast,
                  "Đăng ký merchant",
                  "Xác nhận gửi đăng ký merchant không thành công"
                );
              }
            });
          }}
        >
          Gửi yêu cầu
        </Button>
      </Flex>
    </Flex>
  );
};

export default RegisterMerchant;
