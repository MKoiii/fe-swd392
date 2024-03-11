import {
  Button,
  Flex,
  Image,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { GENDER, IMAGES, TOAST } from "../../constant";
import {
  AppUserControllerApi,
  MediaControllerApi,
} from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import { useEffect, useState } from "react";
import moment from "moment";
import FileUpload from "../../components/upload";
import LogoImage from "../../assets/logo512.png";

const userApi = new AppUserControllerApi(ApiClientSingleton.getInstance());
const mediaApi = new MediaControllerApi(ApiClientSingleton.getInstance());
const ProfileContent = () => {
  const [user, setUser] = useState();
  const toast = useToast();

  useEffect(() => {
    userApi.appUserControllerGetDetailsByContext((err, data) => {
      if (data) {
        setUser(data?.data);
      }
    });
  }, []);

  return (
    <Flex width={"960px"} minH={"600px"} justify={"center"}>
      <Flex w={"100%"} justify={"center"}>
        <Flex flex={0.7} padding={"32px"} direction={"column"} gap={"16px"}>
          <Flex align={"center"} gap={"16px"}>
            <Text align={"right"} flex={0.2}>
              Tên
            </Text>
            <Input
              flex={0.8}
              value={user?.name ? user?.name : ""}
              placeholder="Tên"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Flex>
          <Flex align={"center"} gap={"16px"}>
            <Text align={"right"} flex={0.2}>
              Email
            </Text>
            <Input
              flex={0.8}
              value={user?.email ? user?.email : ""}
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Flex>
          <Flex align={"center"} gap={"16px"}>
            <Text align={"right"} flex={0.2}>
              Số điện thoại
            </Text>
            <Input
              flex={0.8}
              value={user?.phone ? user?.phone : ""}
              placeholder="Số điện thoại"
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
          </Flex>
          <Flex align={"center"} gap={"16px"}>
            <Text align={"right"} flex={0.2}>
              Giới tính
            </Text>
            <RadioGroup
              onChange={(e) => setUser({ ...user, gender: e })}
              value={user?.gender}
              m={"0 16px"}
              flex={0.8}
            >
              <Stack direction="row">
                <Radio value={GENDER.MALE.value}>{GENDER.MALE.name}</Radio>
                <Radio value={GENDER.FEMALE.value}>{GENDER.FEMALE.name}</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
          <Flex align={"center"} gap={"16px"}>
            <Text align={"right"} flex={0.2}>
              Ngày sinh
            </Text>
            <Input
              type="date"
              flex={0.8}
              value={
                user?.birthday
                  ? moment(user?.birthday).format("YYYY-MM-DD")
                  : ""
              }
              onChange={(e) => setUser({ ...user, birthday: e.target.value })}
            />
          </Flex>
          <Flex align={"center"} gap={"16px"}>
            <Text align={"right"} flex={0.2}></Text>
            <Flex flex={0.8}>
              <Button
                w={"80px"}
                colorScheme="blue"
                onClick={() => {
                  console.log(user);
                  userApi.appUserControllerUpdateModel(user, (err, data) => {
                    if (data) {
                      TOAST.success(
                        toast,
                        "Thông tin cá nhân",
                        "Cập nhật thông tin cá nhân thành công"
                      );
                    }
                  });
                }}
              >
                Lưu
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex={0.3} justifyContent={"center"}>
          <Flex direction={"column"} align={"center"} gap={"16px"}>
            <Image
              boxSize="150px"
              name="Segun Adebayo"
              objectFit={"cover"}
              src={
                user?.photo && user?.isReview
                  ? user?.photo
                  : user?.photo && !user?.isReview
                  ? IMAGES.getImage(user?.photo)
                  : LogoImage
              }
              borderRadius={"50%"}
            />
            <FileUpload
              disabledReview={true}
              isMultiple={false}
              onReview={(files) => {
                if (files?.length > 0) {
                  const file = files[0];
                  setUser({
                    ...user,
                    photo: window.URL.createObjectURL(file),
                    isReview: true,
                  });
                }
              }}
              onFilesSelect={(files) => {
                if (files?.length > 0) {
                  const file = files[0];
                  mediaApi.mediaControllerUploadPublic(
                    "OTHER",
                    file,
                    (err, data, res) => {
                      const rs = data?.data;
                      setUser({
                        ...user,
                        photo: rs?.previewUrl,
                        isReview: false,
                      });
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
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileContent;
