import { ReactNode } from "react";
// import { AppSidebar } from "../components/SideBar";
import TemporaryDrawer from "../components/organisms/Drawer/Drawer";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-[100vw]">
      {/* <AppSidebar /> */}
      <TemporaryDrawer />
      <main className="w-[100vw]">{children}</main>
    </div>
  );
}
