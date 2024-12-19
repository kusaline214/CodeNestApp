"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import UserList from "./UserList/UserList";
import ActiveProjectList from "./ActiveProjectList/ActiveProjectList";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import ProjectStatus from "./ProjectStatus/ProjectStatus";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-[100%] ">
      <Box sx={{ bgcolor: "background.gray", width: "100%" }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              label="所属者リスト"
              {...a11yProps(0)}
              // className="bg-[#252525] text-white font-bold"
            />
            <Tab
              label="案件リスト"
              {...a11yProps(1)}
              // className="bg-[#252525] text-white font-bold"
            />
            <Tab
              label="提携企業リスト"
              {...a11yProps(2)}
              // className="bg-[#252525] text-white font-bold"
            />
            <Tab
              label="参画案件"
              {...a11yProps(2)}
              // className="bg-[#252525] text-white font-bold"
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <UserList />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <ActiveProjectList />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <CompanyInfo />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <ProjectStatus />
        </TabPanel>
      </Box>
    </div>
  );
}
