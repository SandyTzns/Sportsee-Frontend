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
    <div className="score-container">
      <h2>SCORE CHART</h2>
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={100}
        outerRadius={200}
        startAngle={90}
        endAngle={360}
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
