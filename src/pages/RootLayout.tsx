import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: FunctionComponent = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default RootLayout;
