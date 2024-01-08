import { useState } from "react";
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
import { useFetchTest } from "../utils/useFetchTest";
import { useParams } from "react-router-dom/dist";

function User() {
  const { id } = useParams();
  /* const {
    data: user,
    error: userError,
    loading: userLoading,
  } = useFetchTest(`http://localhost:3000/user/${id}`);
  console.log("USER",user)
  
  const profile = {
    userId: user?.id,
    calorie: user?.keyData.calorieCount,
    carbs: user?.keyData.carbohydrateCount,
    fat: user?.keyData.lipidCount,
    protein: user?.keyData.proteinCount,
    score: (user?.score || user?.todayScore) * 100,
    firstName: user?.userInfos.firstName,
  }
  console.log("Profile",profile)
*/
  const setUserDataFunc = (data) => {
    setUserData({
      userId: data?.id,
      calorie: data?.keyData.calorieCount,
      carbs: data?.keyData.carbohydrateCount,
      fat: data?.keyData.lipidCount,
      protein: data?.keyData.proteinCount,
      score: (data?.score || data?.todayScore) * 100,
      firstName: data?.userInfos.firstName,
    });
  };

  const setActivityFunc = (data) => {
    let activitySessions = data?.sessions;

    let newActivity = activitySessions?.map((object) => {
      return {
        day: object.day,
        kilogram: object.kilogram,
        calories: Math.round(object.calories / 10),
      };
    });
    setActivity(newActivity);
  };

  const setSessionsFunc = (data) => setSessions(data?.sessions);

  const setPerformanceFunc = (data) => {
    let performanceResponseData = data?.data;
    let performanceResponseKind = data?.kind;

    let newArr = performanceResponseData?.map((object) => {
      return {
        value: object.value,
        kind: performanceResponseKind[`${object.kind}`],
      };
    });
    setPerformance(newArr);
  };

  const [userData, setUserData] = useState({});
  //const resUserErr = useFetch("", setUserDataFunc, "user");
  const resUserErr = useFetch("", setUserDataFunc);

  const [activity, setActivity] = useState({});
  //const resActivityErr = useFetch(`/activity`, setActivityFunc, "activity");
  const resActivityErr = useFetch(`/activity`, setActivityFunc);

  const [sessions, setSessions] = useState("");
  /*const resSessionsErr = useFetch(
    `/average-sessions`,
    setSessionsFunc,
    "sessions"
  );*/
  const resSessionsErr = useFetch(`/average-sessions`, setSessionsFunc);

  const [performance, setPerformance] = useState({});
  /*const resPerformanceErr = useFetch(
    `/performance`,
    setPerformanceFunc,
    "performance"
  );*/
  const resPerformanceErr = useFetch(`/performance`, setPerformanceFunc);

  return (
    <div>
      <HorizontalNavbar />
      <div className="container">
        <VerticalNavbar />
        <div className="contentArea">
          <Greetings name={userData.firstName} />
          <div className="sections">
            <div className="section1">
              <ActivityChart data={activity} />
              <div className="section3">
                <SessionsChart data={sessions} />
                <PerformanceChart data={performance} />
                <ScoreChart data={userData} />
              </div>
            </div>
            <div className="section2">
              <Specs data={userData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
/**
 * 
 * 
      
 */
