// USER AVERAGE SESSIONS = line chart
import "../styles/SessionsChart.css";
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from "recharts";

export const SessionsChart = ({ data }) => {
  const newSession = data;

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p>{payload[0].value + " min"}</p>
        </div>
      );
    }
  };

  return (
    <div className="helloContainer item item-4">
      <LineChart width={258} height={233} data={newSession}>
        <CartesianGrid stroke="none" fill="red" />
        <XAxis
          dataKey="day"
          strokeOpacity={0}
          tickLine={false}
          tick={{
            fill: "rgba(255,255,255,0.6)",
            fontSize: "12px",
          }}
          tickMargin={20}
        />

        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </div>
  );
};
