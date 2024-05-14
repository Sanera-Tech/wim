import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
