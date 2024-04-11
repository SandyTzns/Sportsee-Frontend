import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import "../styles/ScoreChart.css";

export const ScoreChart = ({ data }) => {
  const scoreData = data * 100;
  const score = [{ value: scoreData, fill: "#FF0000" }];
  const formatDataAngle = scoreData * 3.6;
  const startAngle = 90;
  const endAngle = startAngle + formatDataAngle;

  return (
    <div className="score-container item item-6">
      <ResponsiveContainer>
        <RadialBarChart
          width={220}
          height={233}
          cx={109}
          cy={120}
          innerRadius={90}
          outerRadius={190}
          startAngle={startAngle}
          endAngle={endAngle}
          barSize={10}
          data={score}
        >
          <RadialBar
            minAngle={15}
            cornerRadius={10}
            background
            clockWise
            dataKey="value"
            fill="red"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="score-text">
        <span className="percent">{scoreData}%</span>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    </div>
  );
};
