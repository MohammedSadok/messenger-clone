import React from "react";
import DesktopSidebar from "./DesktopSidebar";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  return (
    // const currentUser = await getCurrentUser();

    <div className="h-full">
      <DesktopSidebar />
      {/* 
      <MobileFooter /> */}
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
};

export default SideBar;
