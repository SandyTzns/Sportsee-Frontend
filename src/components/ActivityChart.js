import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "../styles/ActivityChart.css";

export const ActivityChart = ({ data }) => {
  const newActivity = data;

  // const data = [
  //   {
  //     name: "1",
  //     uv: 70,
  //     pv: 240,
  //   },
  //   {
  //     name: "2",
  //     uv: 69,
  //     pv: 220,
  //   },
  //   {
  //     name: "3",
  //     uv: 70,
  //     pv: 280,
  //   },
  //   {
  //     name: "4",
  //     uv: 70,
  //     pv: 500,
  //   },
  //   {
  //     name: "5",
  //     uv: 69,
  //     pv: 160,
  //   },
  //   {
  //     name: "6",
  //     uv: 69,
  //     pv: 162,
  //   },
  //   {
  //     name: "7",
  //     uv: 69,
  //     pv: 390,
  //   },
  // ];

  return (
    <div className="activity_wrapper item item-2">
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

      <BarChart width={785} height={200} data={newActivity} barGap={7}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} color="#DEDEDE" />
        <XAxis
          dataKey="day"
          strokeOpacity={1}
          tickLine={false}
          tickFormatter={(day) => new Date(day).getDate()}
          padding={{ left: 9, right: 9 }}
          scale="point"
        />
        <YAxis
          orientation="right"
          dataKey="kilogram"
          strokeDasharray={1}
          tickCount={3}
          strokeOpacity={0}
        />

        <Tooltip />
        <Bar
          dataKey="kilogram"
          fill="black"
          barSize={7}
          radius={[3, 3, 0, 0]}
        />
        <Bar dataKey="calories" fill="red" barSize={7} radius={[3, 3, 0, 0]} />
      </BarChart>
    </div>
  );
};
