import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

const RootLayout: FunctionComponent = () => {
  return (
    <div className="mx-6 my-8">
      <Outlet />
    </div>
  );
};

export default RootLayout;
