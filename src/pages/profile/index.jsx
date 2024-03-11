// pages/profile.js
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import ProfileContent from "./ProfileContent";
import DeliveryAddress from "./DeliveryAddress";

const Profile = () => {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Thông tin cá nhân</Tab>
          <Tab>Địa chỉ giao hàng</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <ProfileContent />
          </TabPanel>
          <TabPanel>
            <DeliveryAddress />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Profile;
