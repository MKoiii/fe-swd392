import React, { useContext, useEffect, useState } from "react";
import { AppOrderControllerApi } from "../../api/generated/generate-api";
import ApiClientSingleton from "../../api/apiClientImpl";
import {
  Box,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import MyOrderDetail from "./MyOrderDetail";
import { ORDER_STATE } from "../../constant";
import { GlobalContext } from "../../App";

const orderApi = new AppOrderControllerApi(ApiClientSingleton.getInstance());
const MyOrder = () => {
  const [orderState, setOrderState] = useState(ORDER_STATE.NEW.value);
  const [orders, setOrders] = useState([]);

  const { reload, setReload } = useContext(GlobalContext);
  useEffect(() => {
    orderApi.appOrderControllerGetInfoPageWithFilter(
      { status: orderState, page: 0, size: 9999 },
      (err, data) => {
        if (data) {
          const res = data?.data;
          setOrders(res ? res : []);
        }
      }
    );
  }, [orderState, reload]);
  return (
    <Box w={{ xl: "1200px", lg: "900px" }} mb={"32px"}>
      <Tabs>
        <TabList>
          <Tab onClick={() => setOrderState(ORDER_STATE.NEW.value)}>
            {ORDER_STATE.NEW.name}
          </Tab>
          <Tab onClick={() => setOrderState(ORDER_STATE.PAID.value)}>
            {ORDER_STATE.PAID.name}
          </Tab>
          <Tab onClick={() => setOrderState(ORDER_STATE.DELIVERED.value)}>
            {ORDER_STATE.DELIVERED.name}
          </Tab>
          <Tab onClick={() => setOrderState(ORDER_STATE.COMPLETED.value)}>
            {ORDER_STATE.COMPLETED.name}
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <MyOrderDetail orders={orders} orderState={ORDER_STATE.NEW.value} />
          </TabPanel>
          <TabPanel>
            <MyOrderDetail
              orders={orders}
              orderState={ORDER_STATE.PAID.value}
            />
          </TabPanel>
          <TabPanel>
            <MyOrderDetail
              orders={orders}
              orderState={ORDER_STATE.DELIVERED.value}
            />
          </TabPanel>
          <TabPanel>
            <MyOrderDetail
              orders={orders}
              orderState={ORDER_STATE.COMPLETED.value}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default MyOrder;
