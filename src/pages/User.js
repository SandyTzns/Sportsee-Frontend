import "../styles/User.css";
import { HorizontalNavbar } from "../components/HorizontalNavbar";
import { VerticalNavbar } from "../components/VerticalNavbar";
import { Specs } from "../components/Specs";
import { Greetings } from "../components/Greetings";
import { ActivityChart } from "../components/ActivityChart";
import { ScoreChart } from "../components/ScoreChart";
import { PerformanceChart } from "../components/PerformanceChart";
import { SessionsChart } from "../components/SessionsChart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getData } from "../services/getData";

export function User() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = async () => {
      const response = await getData("USER_MAIN_DATA", parseInt(id));
      if (!response) return alert("cannot get API");
      setData(response.data);
    };
    data();
  }, [id]);

  return (
    <div className="wrapper">
      <HorizontalNavbar />
      <div className="main">
        <VerticalNavbar />
        <div className="dashboard">
          <Greetings name={data.userInfos?.firstName} />
          <div className="charts">
            <div className="recharts">
              <ActivityChart />
              <div className="smaller-charts">
                <SessionsChart />
                <PerformanceChart />
                <ScoreChart data={data.todayScore || data.score} />
              </div>
            </div>
            <Specs data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
