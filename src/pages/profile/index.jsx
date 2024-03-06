// pages/profile.js
import {
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Layout } from "./components/layout";
import MainBoard from "../../components/mainBoard";
import { TOAST } from "../../constant";
import { MdEmail, MdHeadset, MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

const ProfileContent = () => {
  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ante eu ligula imperdiet porta.",
    profilePicture: "https://via.placeholder.com/150",
  };

  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={50}
      h={"100vh"}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="sm"
        mx="auto"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        shadow="lg"
        rounded="lg"
        overflow="hidden"
      >
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
          alt="avatar"
        />

        <Flex alignItems="center" px={6} py={3} bg="gray.900">
          <Icon as={MdHeadset} h={6} w={6} color="white" />

          <Text mx={3} color="white" fontWeight="bold" fontSize="lg">
            Focusing
          </Text>
        </Flex>

        <Box py={4} px={6}>
          <Text
            fontSize="xl"
            fontWeight="bold"
            color="gray.800"
            _dark={{
              color: "white",
            }}
          >
            Patterson johnson
          </Text>

          <Text
            py={2}
            color="gray.700"
            _dark={{
              color: "gray.400",
            }}
          >
            Full Stack maker & UI / UX Designer , love hip hop music Author of
            Building UI.
          </Text>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
          >
            <Icon as={BsFillBriefcaseFill} h={6} w={6} mr={2} />

            <Text px={2} fontSize="sm">
              Choc UI
            </Text>
          </Flex>

          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
          >
            <Icon as={MdLocationOn} h={6} w={6} mr={2} />

            <Text px={2} fontSize="sm">
              California
            </Text>
          </Flex>
          <Flex
            alignItems="center"
            mt={4}
            color="gray.700"
            _dark={{
              color: "gray.200",
            }}
          >
            <Icon as={MdEmail} h={6} w={6} mr={2} />

            <Text px={2} fontSize="sm">
              patterson@example.com
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

const Profile = () => {
  return (
    <>
      <MainBoard children={<ProfileContent />} />
    </>
  );
};

export default Profile;
