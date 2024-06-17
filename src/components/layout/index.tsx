import { Navbar } from "../navbar";
import { Footer } from "../footer";
import { Outlet } from "react-router-dom";

type Props = {};

export const Layout = (_props: Props) => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
