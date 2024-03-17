import React, { useEffect, useState } from "react";
import BreadcrumbCustom from "../../../components/breadcrumb";
import { Box, Flex, Input, Text } from "@chakra-ui/react";
import Authors from "../components";
import { TABLE_USER_DATA } from "../../../mock";
import CardReport from "../components/Card";
import { FaFileInvoiceDollar } from "react-icons/fa";
import SalesOverview from "../components/SalesOverview";
import LineChart from "../../../components/charts/LineChart";
import { MerchantOrderControllerApi } from "../../../api/generated/generate-api";
import ApiClientSingleton from "../../../api/apiClientImpl";
import moment from "moment";
const links = [{ link: "#", name: "Dashboard" }];
const merchantApi = new MerchantOrderControllerApi(
  ApiClientSingleton.getInstance()
);
const DashboardContent = () => {
  const [report, setReport] = useState();
  const [date, setDate] = useState();
  const [chart, setChart] = useState({ labels: [], data: [] });

  useEffect(() => {
    let data = {};
    if (date) {
      data = { date: moment(date).format("YYYY-MM-DD") };
    }
    merchantApi.merchantOrderControllerBusinessPerformance(
      data,
      (err, data) => {
        if (data) {
          setReport(data?.data);
        }
      }
    );
  }, [date]);
  useEffect(() => {
    merchantApi.merchantOrderControllerRevenueByThisAndLastMonth(
      (err, data) => {
        if (data) {
          const res = data?.data;
          setChart({
            labels: res?.map((d) => d?.createdOnlyDate),
            data: [{ name: "Doanh số", data: res?.map((d) => d?.revenue) }],
          });
        }
      }
    );
  }, []);
  return (
    <Flex direction={"column"} gap={"32px"} minH={"calc(100vh - 80px)"}>
      <BreadcrumbCustom links={links} />
      <Box>
        <Flex direction={"column"} gap={"32px"}>
          <Flex direction={"column"} gap={"16px"}>
            <Flex align={"center"} gap={"8px"} w={"400px"}>
              <Text flex={0.3}>Lọc theo ngày</Text>
              <Input
                flex={0.7}
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Flex>
            <Flex align={"center"} justify={"space-around"} gap={"32px"}>
              <CardReport
                title={"Hoá đơn"}
                amount={report?.numberOfBill?.toLocaleString()}
                icon={<FaFileInvoiceDollar />}
              />
              <CardReport
                title={"Doanh số hoàn trả"}
                amount={report?.returnRevenue?.toLocaleString()}
                icon={<FaFileInvoiceDollar />}
              />
              <CardReport
                title={"Doanh số bán lẻ"}
                amount={report?.retailRevenue?.toLocaleString()}
                icon={<FaFileInvoiceDollar />}
              />
              <CardReport
                title={"GTTB/Hoá đơn"}
                amount={report?.meanPerBill?.toLocaleString()}
                icon={<FaFileInvoiceDollar />}
              />
              <CardReport
                title={"GTTB/Khách mua"}
                amount={report?.meanPerCustomer?.toLocaleString()}
                icon={<FaFileInvoiceDollar />}
              />
            </Flex>
          </Flex>
          <Flex>
            <SalesOverview
              title={"Bảng thông kê doanh thu"}
              percentage={5}
              chart={
                <LineChart data={chart?.data} categories={chart?.labels} />
              }
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default DashboardContent;
