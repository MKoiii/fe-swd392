import React from "react";
import MainBoard from "../../components/mainBoard";
import DashboardContent from "./page";

const Dashboard = () => {
  return (
    <>
      <MainBoard children={<DashboardContent />} />
    </>
  );
};

export default Dashboard;
