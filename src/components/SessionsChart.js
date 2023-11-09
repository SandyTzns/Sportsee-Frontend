// USER AVERAGE SESSIONS = line chart
import "../styles/SessionsChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const SessionsChart = () => {
  const data = [
    {
      name: "L",
      pv: 30,
    },
    {
      name: "M",
      pv: 23,
    },
    {
      name: "M",
      pv: 45,
    },
    {
      name: "J",
      pv: 50,
    },
    {
      name: "V",
      pv: 0,
    },
    {
      name: "S",
      pv: 0,
    },
    {
      name: "D",
      pv: 60,
    },
  ];
  return (
    <div className="helloContainer">
      <LineChart width={258} height={263} data={data}>
        <CartesianGrid stroke="none" fill="red" />
        <XAxis
          dataKey="name"
          strokeOpacity={0}
          tickLine={false}
          tick={{
            fill: "rgba(255,255,255,0.6)",
            fontSize: "12px",
          }}
          tickMargin={20}
        />
        <YAxis hide domain={["dataMin-10", "dataMax+10"]} />
        <Tooltip cursor={false} />
        <Line
          type="natural"
          dataKey="pv"
          stroke="white"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </div>
  );
};
