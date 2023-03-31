import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../component/Sidebar/Sidebar";

const RootLayout = () => {
  return (
    <Fragment>
      <Sidebar />

        <Outlet />
  
    </Fragment>
  );
};
export default RootLayout;
