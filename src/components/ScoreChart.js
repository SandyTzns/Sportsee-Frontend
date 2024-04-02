import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import "../styles/ScoreChart.css";

export const ScoreChart = ({ data }) => {
  const scoreData = data * 100;
  const score = [{ value: scoreData, fill: "#FF0000" }];
  const formatDataAngle = scoreData * 3.6;
  const startAngle = 90;
  const endAngle = startAngle + formatDataAngle;
  //
  // const score = [{ value: scoreData, fill: "red" }];
  // console.log(scoreData);

  return (
    <div className="score-container item item-6">
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
      <div className="text">
        <span className="percent">{scoreData}%</span>
        <span>de votre</span>
        <span>objectif</span>
      </div>
    </div>
  );
};

// <RadialBarChart
//         width={220}
//         height={233}
//         cx={125}
//         cy={120}
//         innerRadius={100}
//         outerRadius={200}
//         startAngle={startAngle}
//         endAngle={endAngle}
//         barSize={10}
//         data={scoreData}
//       >
//         <RadialBar
//           minAngle={15}
//           cornerRadius={10}
//           background
//           clockWise
//           dataKey={score.value}
//           fill="red"
//         />
//       </RadialBarChart>
//       <div className="text">
//         <span className="percent">{scoreData}%</span>
//         <span>de votre</span>
//         <span>objectif</span>
//       </div>

//  <div>
//         <h2 className="title">Score</h2>
//       </div>
//       <div className="score">
//         <p>
//           {result}%<br></br>
//           <span> de votre objectif</span>
//         </p>
//       </div>

//       <ResponsiveContainer width="100%" height="100%">
//         <RadialBarChart
//           data={score}
//           innerRadius="70%"
//           startAngle={90}
//           endAngle={450}
//           barSize={10}
//         >
//           <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
//           <RadialBar dataKey="value" cornerRadius="100%" />
//         </RadialBarChart>
//       </ResponsiveContainer>
