import React from "react";
import { BarChart } from "@mui/x-charts";
import { Card, CardContent, Typography } from "@mui/material";

const SalesChart = () => {
  // モックデータ
  const salesData: { month: string; amount: number }[] = [
    { month: "2024-1", amount: 1000 },
    { month: "2024-2", amount: 1500 },
    { month: "2024-3", amount: 2000 },
    { month: "2024-4", amount: 2000 },
    { month: "2024-5", amount: 2000 },
    { month: "2024-6", amount: 2000 },
    { month: "2024-7", amount: 2000 },
    { month: "2024-8", amount: 2000 },
    { month: "2024-9", amount: 2000 },
    { month: "2024-10", amount: 2000 },
    { month: "2024-11", amount: 2000 },
    { month: "2024-12", amount: 2000 },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">月別売上グラフ</Typography>
        <BarChart
          width={800}
          height={400}
          dataset={salesData}
          xAxis={[{ dataKey: "month", scaleType: "band" }]}
          series={[
            {
              data: salesData.map((item) => item.amount),
              label: "売上",
            },
          ]}
        />
      </CardContent>
    </Card>
  );
};

export default SalesChart;
