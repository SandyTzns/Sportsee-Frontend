// SCORE
import { RadialBarChart, RadialBar } from "recharts";
import "../styles/ScoreChart.css";

export const ScoreChart = ({ data }) => {
  const scoreData = data;
  // const scoreDataString = scoreData.toString();

  // console.log(scoreData);
  // console.log();

  let number = 12;
  console.log(number.toString());

  const mockData = [
    {
      uv: "1222",
      score: 12,
    },
  ];
  // Karl = 12% --> 43.2degré --> startAngle{0} endAngle{43.2} ou starAngle{90} endAngle{113.2}
  // Cécile = 18% --> 108degré --> startAngle{0} endAngle{108} ou starAngle{90} endAngle{198}

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
        endAngle={198}
        barSize={10}
        // data={mockData}
        // data={scoreData}
      >
        <RadialBar
          minAngle={15}
          cornerRadius={10}
          background
          clockWise
          dataKey="uv"
          // dataKey={scoreDataString}
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
