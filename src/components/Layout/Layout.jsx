import React from "react";
import { useLocation } from "react-router-dom";
import AdminNav from "../../admin/AdminNav";
import Routers from "../../routers/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Layout() {

  const location = useLocation()
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
