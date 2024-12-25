"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import { SidebarGroupLabel } from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const items = [
    {
      title: "ホーム",
      url: "/Dashboard",
      icon: Home,
    },
    {
      title: "お知らせ",
      url: "/Dashboard/MyInfo",
      icon: Inbox,
    },
    {
      title: "カレンダー",
      url: "/Dashboard/Calendar",
      icon: Calendar,
    },
    {
      title: "検索",
      url: "/Dashboard/Sarch",
      icon: Search,
    },
    {
      title: "設定",
      url: "/Dashboard/Setting",
      icon: Settings,
    },
    {
      title: "Users",
      url: "/Dashboard/Users",
      icon: Settings,
    },
  ];
  const userData = {
    userName: "Taro",
    userId: "001",
  };
  const pageNames = {
    pageName: "DashBoard",
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <div className="flex justify-between flex-col   border-b-2 mb-3 p-[8px]">
          <div className="flex justify-between">
            <SidebarGroupLabel className="text-xl">
              {pageNames.pageName}
            </SidebarGroupLabel>
            <p
              onClick={toggleDrawer(false)}
              className="text-gray-500 rounded-sm items-center flex underline  cursor-pointer"
            >
              close
            </p>
          </div>
          <Avatar className="m-1 flex gap-[10px] ">
            <AvatarImage
              src="https://github.com/shadcn.png"
              width={50}
              height={50}
              className="rounded-full"
            />
            <AvatarFallback>CN</AvatarFallback>
            <div>
              <p>name: {userData.userName}</p>
              <p>id: {userData.userId}</p>
            </div>
          </Avatar>
        </div>
        {items.map((text) => (
          <ListItem key={text.title} disablePadding>
            <a href={text.url}>
              <ListItemButton>
                <ListItemIcon>
                  <text.icon />
                </ListItemIcon>
                <ListItemText primary={text.title} />
              </ListItemButton>
            </a>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"ログアウト"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="border-r-2 pt-3">
      <Button onClick={toggleDrawer(true)} className="flex flex-col">
        <Avatar className="m-1">
          <AvatarImage
            src="https://github.com/shadcn.png"
            width={50}
            height={50}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-xs">myNameIs{userData.userName}</p>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
