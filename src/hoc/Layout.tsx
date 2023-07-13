// import Footer from '@/components/footer/Footer'
import Sidebar from "@/components/navigation/Sidebar";
import Toolbar from "@/components/navigation/Toolbar";

import React from "react";

type PropsType = {
  children: React.ReactNode;
};

const Layout = ({ children }: PropsType) => {
  return (
    <div className="grid grid-cols-12 ">
      <div className="col-span-2 bg-[#263544] text-[#B7C0CD]">
        <Sidebar />
      </div>
      <div className="col-span-10 bg-[#f2f7fb] ">
        <Toolbar />
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
