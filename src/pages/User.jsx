import "../styles/User.css";
import { useFetch } from "../axios/useFetch";
import { useParams } from "react-router-dom/dist";
import { HorizontalNavbar } from "../components/HorizontalNavbar";
import { VerticalNavbar } from "../components/VerticalNavbar";
import { Specs } from "../components/Specs";
import { Greetings } from "../components/Greetings";
import { ActivityChart } from "../components/ActivityChart";
import { ScoreChart } from "../components/ScoreChart";
import { PerformanceChart } from "../components/PerformanceChart";
import { SessionsChart } from "../components/SessionsChart";

export function User() {
  const { id } = useParams();
  useFetch(12, "");
  const { data: user } = useFetch(id, "", true);
  // const { data: activity } = useFetch(id, "activity", true);
  // const { data: performance } = useFetch(id, "performance", true);
  // const { data: sessions } = useFetch(id, "average-sessions", true);

  return (
    <div className="layout_container">
      <HorizontalNavbar />
      <div className="content-container">
        <VerticalNavbar />
        <div className="content">
          <Greetings name={user} />
          <div className="charts-container">
            <div className="allcharts">
              <ActivityChart />
              <div className="smallercharts">
                <SessionsChart />
                <PerformanceChart />
                <ScoreChart />
              </div>
            </div>
            <Specs data={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
