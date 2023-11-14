// SCORE
import { RadialBarChart, RadialBar } from "recharts";
import "../styles/ScoreChart.css";

export const ScoreChart = () => {
  const data = [
    {
      name: "18-24",
      uv: 12,
      pv: 100,
      fill: "red",
    },
  ];

  return (
    <div className="score-container item item-6">
      <RadialBarChart
        width={258}
        height={233}
        cx={125}
        cy={120}
        innerRadius={100}
        outerRadius={200}
        startAngle={90}
        endAngle={46.8}
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          cornerRadius={10}
          background
          clockWise
          dataKey="uv"
        />
      </RadialBarChart>{" "}
      <div className="text">
        <span className="percent">12%</span>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    </div>
  );
};
