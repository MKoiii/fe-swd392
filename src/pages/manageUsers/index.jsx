import React, { createContext, useState } from "react";
import MainBoard from "../../components/mainBoard";
import ManageUserContent from "./page";

const UserContext = createContext({});
const ManageUsers = () => {
  const [reload, setReload] = useState(false);
  return (
    <UserContext.Provider value={{ reload, setReload }}>
      <ManageUserContent />
    </UserContext.Provider>
  );
};

export default ManageUsers;
export { UserContext };
