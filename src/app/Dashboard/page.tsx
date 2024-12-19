"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
              // className="bg-[#ffffff] text-black font-bold"
            />
            <Tab
              label="案件リスト"
              {...a11yProps(1)}
              // className="bg-[#ffffff] text-black font-bold"
            />
            <Tab
              label="提携企業リスト"
              {...a11yProps(2)}
              // className="bg-[#ffffff] text-black font-bold"
            />
            <Tab
              label="参画案件"
              {...a11yProps(2)}
              // className="bg-[#ffffff] text-black font-bold"
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          所属者リストコンポーネント表示
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          案件リストコンポーネント表示
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          提携企業リストコンポーネント表示
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          参画案件表示
        </TabPanel>
      </Box>
    </div>
  );
}
