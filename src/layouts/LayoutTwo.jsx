import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderTwo, Footer } from "../components/Index";

function LayoutTwo() {
  return (
    <div>
        <HeaderTwo />
        <Outlet />
        <Footer />
    </div>
  )
}

export default LayoutTwo