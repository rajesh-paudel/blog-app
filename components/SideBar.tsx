"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BarChart,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
} from "lucide-react";

export function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="md:hidden m-4 ">
            <LayoutDashboard className="h-5 w-5"></LayoutDashboard>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle>Menu</SheetTitle>

          <DashboardSidebar />
        </SheetContent>
      </Sheet>
      <div className="hidden md:block w-[250px] min-h-screen  border-r-2">
        <DashboardSidebar></DashboardSidebar>
      </div>
    </div>
  );
}

const DashboardSidebar = () => {
  return (
    <div className="h-full px-4 py-6">
      <nav>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <LayoutDashboard className="w-5 h-5 mr-2"></LayoutDashboard>
            Overview
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <FileText className="w-5 h-5 mr-2" />
            Articles
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <MessageCircle className="w-5 h-5 mr-2" />
            Comments
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <BarChart className="w-5 h-5 mr-2" />
            Analytics
          </Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Button>
        </Link>
      </nav>
    </div>
  );
};
