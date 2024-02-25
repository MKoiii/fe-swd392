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
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Layout } from "./components/layout";
import MainBoard from "../../components/mainBoard";
import { TOAST } from "../../constant";

const ProfileContent = ({ user }) => {
  const toast = useToast();

  const handleAddToWallet = () => {
    TOAST.success(
      toast,
      "Added to Wallet",
      "Your pass has been added to your wallet."
    );
  };

  return (
    <Layout>
      <Box p={5}>
        <Flex align="center">
          <Heading size="lg">User Profile</Heading>
        </Flex>
        <Stack spacing={5} mt={5}>
          <Stack spacing={3}>
            <Heading size="md">User Information</Heading>
            <Text>Name: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
            <Text>Phone: {user?.phone}</Text>
          </Stack>
          <Stack spacing={3}>
            <Heading size="md">Wallet</Heading>
            <Text>Passes: {user?.wallet.passes.length}</Text>
            <Button colorScheme="blue" onClick={handleAddToWallet}>
              Add to Wallet
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Layout>
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
