import "../styles/ChartRadar.css";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";

export const PerformanceChart = ({ data }) => {
  const NewMe = data;
  return (
    <div className="scoreCharts">
      <h2>THIS CHART IS ALREADY DONE WITH THE API</h2>
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={500}
        height={500}
        data={NewMe}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};
