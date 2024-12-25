"use client";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

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
    url: "#",
    icon: Inbox,
  },
  {
    title: "カレンダー",
    url: "#",
    icon: Calendar,
  },
  {
    title: "検索",
    url: "#",
    icon: Search,
  },
  {
    title: "マイページ",
    url: "#",
    icon: Search,
  },
];
const dashboardLinks = [
  { title: "参画案件", url: "/Dashboard/ActiveProjectList" },
  { title: "提携会社一覧", url: "/Dashboard/CompanyInfo" },
  { title: "案件詳細", url: "/Dashboard/ProjectStatus" },
  { title: "ユーザーリスト", url: "/Dashboard/UserList" },
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
                {dashboardLinks.map((item) => (
                  <SidebarMenuItem key={item.title} className="">
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
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
