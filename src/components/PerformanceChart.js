import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import "../styles/PerformanceChart.css";

export const PerformanceChart = ({ data }) => {
  const NewMe = data;
  return (
    <div className="performance-wrapper item item-5">
      <RadarChart
        cx={125}
        cy={120}
        outerRadius={70}
        width={258}
        height={233}
        data={NewMe}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};
