import React from "react";

import { Outlet } from "react-router-dom";

// === Components === //
import Header from "../Header";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-full text-gray-700 bg-gray-900">
      <Header></Header>
      <div className="flex min-h-full">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
