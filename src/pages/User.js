import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/User.css";
import { Greetings } from "../components/Greetings";
import { Specs } from "../components/Specs";
import { PerformanceChart } from "../components/PerformanceChart";
import { ScoreChart } from "../components/ScoreChart";
import { SessionsChart } from "../components/SessionsChart";
import { ActivityChart } from "../components/ActivityChart";
import { HorizontalNavbar } from "../components/HorizontalNavbar";
import { VerticalNavbar } from "../components/VerticalNavbar";
import useFetch from "../utils/useFetch";

function User() {
  const { id } = useParams();

  const baseUrl = `http://localhost:3000/user/${id}`;

  const { data: rawUserData } = useFetch(baseUrl);
  const [userData, setUserData] = useState({});

  const { data: rawActivityData } = useFetch(`${baseUrl}/activity`);
  const [activity, setActivity] = useState({});

  const { data: rawSessionData } = useFetch(`${baseUrl}/average-sessions`);
  const [sessions, setSessions] = useState("");

  const { data: rawPerformanceData } = useFetch(`${baseUrl}/performance`);
  const [performance, setPerformance] = useState({});

  useEffect(() => {
    setUserData({
      userId: rawUserData?.id,
      calorie: rawUserData?.keyData.calorieCount,
      carbs: rawUserData?.keyData.carbohydrateCount,
      fat: rawUserData?.keyData.lipidCount,
      protein: rawUserData?.keyData.proteinCount,
      score: rawUserData?.todayScore * 100,
      firstName: rawUserData?.userInfos.firstName,
    });
  }, [rawUserData]);

  useEffect(() => {
    let activitySessions = rawActivityData?.sessions;

    let newActivity = activitySessions?.map((object) => {
      return {
        day: object.day,
        kilogram: object.kilogram,
        calories: Math.round(object.calories / 10),
      };
    });
    setActivity(newActivity);
  }, [rawActivityData]);

  useEffect(() => {
    setSessions(rawSessionData?.sessions);
  }, [rawSessionData]);

  useEffect(() => {
    let performanceResponseData = rawPerformanceData?.data;
    let performanceResponseKind = rawPerformanceData?.kind;

    let newArr = performanceResponseData?.map((object) => {
      return {
        value: object.value,
        kind: performanceResponseKind[`${object.kind}`],
      };
    });
    setPerformance(newArr);
  }, [rawPerformanceData]);

  return (
    <div className="grid-container">
      <HorizontalNavbar />
      <VerticalNavbar />
      <Greetings name={userData.firstName} />
      <ActivityChart data={activity} />
      <Specs data={userData} />
      <SessionsChart data={sessions} />
      <PerformanceChart data={performance} />
      <ScoreChart data={userData} />
    </div>
  );
}

export default User;
