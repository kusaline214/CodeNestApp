"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChecklistIcon from "@mui/icons-material/Checklist";
import BusinessIcon from "@mui/icons-material/Business";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Menu items.
const items = [
  {
    title: "ホーム",
    url: "/Dashboard",
    icon: Home,
  },
  {
    title: "お知らせ",
    url: "/Dashboard/Info",
    icon: Inbox,
  },
  {
    title: "カレンダー",
    url: "/Dashboard/Calendar",
    icon: Calendar,
  },
  {
    title: "検索",
    url: "/Dashboard/Search",
    icon: Search,
  },
  {
    title: "マイページ",
    url: "/Dashboard/MyPage",
    icon: AccountCircleIcon,
  },
  {
    title: "売り上げ確認",
    url: "/Dashboard/SalesConfirmation",
    icon: AccountBalanceWalletIcon,
  },
  {
    title: "請求書発行",
    url: "/Dashboard/Invoice",
    icon: AssignmentTurnedInIcon,
  },
];
const dashboardLinks = [
  {
    title: "参画案件一覧",
    url: "/Dashboard/ActiveProjectList",
    icon: AssignmentIcon,
  },
  {
    title: "提携会社一覧",
    url: "/Dashboard/CompanyInfo",
    icon: BusinessIcon,
  },
  { title: "手続き一覧", url: "/Dashboard/ProjectStatus", icon: ChecklistIcon },
  {
    title: "ユーザー管理",
    url: "/Dashboard/UserList",
    icon: AddReactionIcon,
  },
  {
    title: "売り上げ管理",
    url: "/Dashboard/#",
    icon: CurrencyYenIcon,
  },
];

// const nowPath = window.location.pathname.split("/");
// const isDashboard = nowPath.includes("Dashboard");
const isAdmin = true;

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="h-[100vh]">
          <div className="flex justify-between items-center  border-b-2 mb-3">
            <SidebarGroupLabel className="text-xl">DashBoard</SidebarGroupLabel>
            <Avatar className="m-1">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <hr />
            {isAdmin ? (
              <SidebarMenu>
                <h3 className="pl-2 my-1">Admin Menu</h3>
                {dashboardLinks.map((item) => (
                  <SidebarMenuItem key={item.title} className="">
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            ) : null}
            <SidebarMenu className="absolute bottom-[50px] left-1 ">
              <SidebarMenuItem className="">
                <SidebarMenuButton asChild>
                  <a href="#">
                    <Settings />
                    <span>設定</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
