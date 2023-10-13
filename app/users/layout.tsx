import Sidebar from "@/components/sidebar/SideBar";
import React from "react";
interface UsersLayoutProps {
  children: React.ReactNode;
}
const UsersLayout = async ({ children }: { children: UsersLayoutProps }) => {
  return (
    <Sidebar>
      <div className="h-full">
        {/* <UserList items={users} /> */}
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;
