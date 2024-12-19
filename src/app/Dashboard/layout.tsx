import { ReactNode } from "react";
import { AppSidebar } from "../components/SideBar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-[100vw]">
      <AppSidebar />
      <main className="w-[90vw]">{children}</main>
    </div>
  );
}
