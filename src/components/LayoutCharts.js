// import { Context } from "./Context";
// import { useContext } from "react";

import { ChartArea } from "./ChartArea";
import { ChartBar } from "./ChartBar";
import { ChartRadar } from "./ChartRadar";
import { ChartRadialBar } from "./ChartRadialBar";
import "../styles/LayoutCharts.css";

export const LayoutCharts = () => {
  return (
    <div className="wrapper">
      <ChartBar />
      <ChartArea />
      <ChartRadar />
      <ChartRadialBar />
    </div>
  );
};
