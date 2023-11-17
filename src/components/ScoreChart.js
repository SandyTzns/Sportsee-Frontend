// SCORE
import { RadialBarChart, RadialBar } from "recharts";
import "../styles/ScoreChart.css";

export const ScoreChart = ({ data }) => {
  const scoreData = [data];

  // Karl = 12% --> 43.2degré --> startAngle{0} endAngle{43.2} ou starAngle{90} endAngle{113.2}
  // Cécile = 18% --> 108degré --> startAngle{0} endAngle{108} ou starAngle{90} endAngle{198}
  const startAngle = 90;
  const endAngle = 140;
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
