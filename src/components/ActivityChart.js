import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "../services/getData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../styles/ActivityChart.css";

export const ActivityChart = () => {
  const { id } = useParams();
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_ACTIVITY", parseInt(id));
      if (!request) return alert("Error Chart Activity");
      let activitySessions = request.data.sessions;
      let newActivity = activitySessions?.map((object) => {
        return {
          day: object.day,
          kilogram: object.kilogram,
          calories: Math.round(object.calories / 10),
        };
      });
      setActivity(newActivity);
    };
    data();
  }, [id]);

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
    <div className="activity_container">
      <div className="legend">
        <span>Activité quotidienne</span>
        <ul>
          <li>
            <span className="legend-text">Poids (kg)</span>
          </li>
          <li className="redDot">
            <span className="legend-text">Calories brûlées (Kcal)</span>
          </li>
        </ul>
      </div>
      <ResponsiveContainer>
        <BarChart
          data={activity}
          barCategoryGap={1}
          barGap={7}
          className="barChart"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            color="#DEDEDE"
          />
          <XAxis
            dataKey="day"
            strokeOpacity={1}
            tickLine={false}
            tickFormatter={(day) => new Date(day).getDate()}
            padding={{ left: 9, right: 9 }}
            tickMargin={10}
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
            activeBar={true}
          />
          <Bar
            dataKey="calories"
            fill="red"
            barSize={7}
            radius={[3, 3, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
