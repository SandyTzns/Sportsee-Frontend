import { RadialBarChart, RadialBar } from "recharts";
import "../styles/ScoreChart.css";

export const ScoreChart = ({ data }) => {
  const scoreData = (data?.todayScore || data?.score) * 100;
  const formatDataAngle = scoreData * 3.6;
  const startAngle = 90;
  const endAngle = startAngle + formatDataAngle;

  return (
    <div className="score-container item item-6">
      <RadialBarChart
        width={220}
        height={233}
        cx={125}
        cy={120}
        innerRadius={100}
        outerRadius={200}
        startAngle={100}
        endAngle={200}
        barSize={10}
        data={scoreData}
      >
        <RadialBar
          minAngle={15}
          cornerRadius={10}
          background
          clockWise
          dataKey="scoreData"
          fill="red"
        />
      </RadialBarChart>
      <div className="text">
        <span className="percent">{scoreData}%</span>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    </div>
  );
};
