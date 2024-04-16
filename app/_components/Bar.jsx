"use client";
import "../globals.css";
import { BarChart } from "@mui/x-charts/BarChart";
import { useEffect } from "react";

export default function Bar({ rating }) {
  useEffect(() => {
    function calcOverallScore() {
      console.log(rating);
    }
    calcOverallScore();
  }, []);

  return (
    <div>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: [
              "8AM",
              "9AM",
              "10 AM",
              "11AM",
              "12PM",
              "1PM",
              "2PM",
              "3PM",
              "4PM",
              "5PM",
              "6PM",
              "7PM",
              "8PM",
            ],
          },
        ]}
        series={[{ data: [3, 4, 1, 6, 5], label: "Activity" }]}
        width={600}
        height={350}
      />
    </div>
  );
}
