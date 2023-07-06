import React from "react";

import { Outlet } from "react-router-dom";

import Navigation from "./nav";
import Footer from "./footer";

export default function Layout() {
  return (
    <div className="layout-container">
      <Navigation />

      <Outlet />

      <Footer />
    </div>
  );
}
