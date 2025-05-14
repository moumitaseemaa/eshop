import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const CommonLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default CommonLayout;
