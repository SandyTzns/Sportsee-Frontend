import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "../styles/ActivityChart.css";

export const ActivityChart = () => {
  const data = [
    {
      name: "1",
      uv: 70,
      pv: 240,
    },
    {
      name: "2",
      uv: 69,
      pv: 220,
    },
    {
      name: "3",
      uv: 70,
      pv: 280,
    },
    {
      name: "4",
      uv: 70,
      pv: 500,
    },
    {
      name: "5",
      uv: 69,
      pv: 160,
    },
    {
      name: "6",
      uv: 69,
      pv: 162,
    },
    {
      name: "7",
      uv: 69,
      pv: 390,
    },
  ];

  return (
    <div className="activity_wrapper">
      <h2>DAILY ACTIVITY CHART</h2>
      <div className="legend">
        <span>Activité quotidienne</span>
        <ul>
          <li>
            <span className="blacktxt">Poids (kg)</span>
          </li>
          <li className="redDot">
            <span className="blacktxt">Calories brûlées (Kcal)</span>
          </li>
        </ul>
      </div>

      <BarChart width={637} height={300} data={data} barGap={7}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} color="#DEDEDE" />
        <XAxis
          dataKey="name"
          strokeOpacity={1}
          tickLine={false}
          scale="point"
          padding={{ left: 9, right: 9 }}
        />
        <YAxis
          orientation="right"
          strokeDasharray={1}
          tickCount={3}
          strokeOpacity={0}
        />
        <Tooltip />
        <Bar dataKey="pv" fill="black" barSize={7} radius={[3, 3, 0, 0]} />
        <Bar dataKey="uv" fill="red" barSize={7} radius={[3, 3, 0, 0]} />
      </BarChart>
    </div>
  );
};
