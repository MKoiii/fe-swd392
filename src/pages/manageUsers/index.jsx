import React from "react";
import MainBoard from "../../components/mainBoard";
import ManageUserContent from "./page";

const ManageUsers = () => {
  return (
    <>
      <MainBoard children={<ManageUserContent />} />
    </>
  );
};

export default ManageUsers;
