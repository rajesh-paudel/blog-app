import { SideBar } from "@/components/SideBar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="min-h-screen">
        <SideBar></SideBar>
      </div>

      <div className="flex-1"> {children}</div>
    </div>
  );
};
export default layout;
