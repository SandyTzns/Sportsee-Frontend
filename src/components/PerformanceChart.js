import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getData } from "../services/getData";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import "../styles/PerformanceChart.css";

export const PerformanceChart = () => {
  const { id } = useParams();
  const [performance, setPerformance] = useState([]);

  useEffect(() => {
    const data = async () => {
      const request = await getData("USER_PERFORMANCE", parseInt(id));
      if (!request) return alert("Error Perfomance Chart");

      let performanceResponseData = request.data?.data;
      let performanceResponsekind = request.data?.kind;

      let newPerformanceArray = performanceResponseData?.map((object) => {
        return {
          value: object.value,
          kind: performanceResponsekind[`${object.kind}`],
        };
      });
      setPerformance(newPerformanceArray);
    };
    data();
  }, [id]);

  return (
    <div className="performance-container item item-5">
      <RadarChart
        cx={135}
        cy={130}
        outerRadius={60}
        width={253}
        height={253}
        data={performance}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="kind" />
        <Radar dataKey="value" fill="red" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
};
