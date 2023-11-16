import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import "../styles/ActivityChart.css";

export const ActivityChart = ({ data }) => {
  const newActivity = data;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value + "kg"}</p>
          <p>{payload[1].value * 10 + "Kcal"}</p>
        </div>
      );
    }
  };

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
          tickMargin={20}
        />

        <YAxis
          orientation="right"
          dataKey="kilogram"
          strokeDasharray={1}
          tickCount={3}
          strokeOpacity={0}
          tickMargin={20}
          axisLine={false}
        />

        <Tooltip content={<CustomTooltip />} />
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
