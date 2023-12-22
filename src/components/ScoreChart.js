import { RadialBarChart, RadialBar } from "recharts";
import "../styles/ScoreChart.css";

export const ScoreChart = ({ data }) => {
  const scoreData = [data];
  const formatDataAngle = scoreData[0].score * 3.6;
  const startAngle = 90;
  const endAngle = startAngle + formatDataAngle;

  return (
    <div className="score-container item item-6">
      <RadialBarChart
        width={258}
        height={233}
        cx={125}
        cy={120}
        innerRadius={100}
        outerRadius={200}
        startAngle={startAngle}
        endAngle={endAngle}
        barSize={10}
        data={scoreData}
      >
        <RadialBar
          minAngle={15}
          cornerRadius={10}
          background
          clockWise
          dataKey="score"
          fill="red"
        />
      </RadialBarChart>
      <div className="text">
        <span className="percent">{scoreData[0].score}%</span>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    </div>
  );
};
