import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "../services/getData";
import "../styles/SessionsChart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  YAxis,
} from "recharts";

export const SessionsChart = () => {
  const { id } = useParams();
  const [session, setSession] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_AVERAGE_SESSIONS", parseInt(id));
      if (!request) return alert("Error Average Session Chart");
      setSession(request.data.sessions);
    };
    data();
  }, [id]);
  const formatLabel = (value) => {
    if (value === 1) return "L";
    if (value === 2) return "M";
    if (value === 3) return "M";
    if (value === 4) return "J";
    if (value === 5) return "V";
    if (value === 6) return "S";
    if (value === 7) return "D";
    return value;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip">
          <p>{payload[0].value + " min"}</p>
        </div>
      );
    }
  };

  return (
    <div className="sessions-container item item-4">
      <div className="sessions_legend">
        <span>Durée moyenne des</span>
        <span>sessions</span>
      </div>
      <LineChart width={253} height={200} data={session}>
        <CartesianGrid stroke="none" fill="red" />
        <XAxis
          dataKey="day"
          tickFormatter={formatLabel}
          strokeOpacity={0}
          tickLine={false}
          tick={{
            fill: "rgba(255,255,255,0.6)",
            fontSize: "14px",
          }}
          padding={{ left: 10, right: 10 }}
        />
        <YAxis hide domain={["dataMin - 3", "auto"]} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Line
          type="natural"
          dataKey="sessionLength"
          stroke="white"
          strokeWidth={2}
          activeDot={true}
          dot={false}
        />
      </LineChart>
    </div>
  );
};
