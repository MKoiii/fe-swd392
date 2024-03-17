// pages/profile.js
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import ProfileContent from "../profile/ProfileContent";

const AdminProfile = () => {
  return (
    <Flex align={"center"} justify={"center"}>
      <ProfileContent />
    </Flex>
  );
};

export default AdminProfile;
