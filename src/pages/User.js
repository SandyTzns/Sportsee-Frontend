import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/User.css";
import axios from "axios";
import { Greetings } from "../components/Greetings";
import { Specs } from "../components/Specs";
import { PerformanceChart } from "../components/PerformanceChart";
import { ScoreChart } from "../components/ScoreChart";
import { SessionsChart } from "../components/SessionsChart";
import { ActivityChart } from "../components/ActivityChart";
import { HorizontalNavbar } from "../components/HorizontalNavbar";
import { VerticalNavbar } from "../components/VerticalNavbar";

function User() {
  const { id } = useParams();

  useEffect(() => {
    fetchData();
    fetchPerformance();
    fetchActivity();
  }, []);

  const [data, setData] = useState({});
  const [performance, setPerformance] = useState({});
  const [activity, setActivity] = useState({});
  // const [session, setsession] = useState({});

  // FETCH USER_MAIN_DATA
  const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/user/${id}`)
      .then((response) => {
        let dataResponse = response.data.data;
        setData({
          id: dataResponse.id,
          calorie: dataResponse.keyData.calorieCount,
          carbs: dataResponse.keyData.carbohydrateCount,
          fat: dataResponse.keyData.lipidCount,
          protein: dataResponse.keyData.proteinCount,
          score: dataResponse.todayScore * 100,
          firstName: dataResponse.userInfos.firstName,
        });
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };
  const fetchPerformance = async () => {
    await axios
      .get(`http://localhost:3000/user/${id}/performance`)
      .then((response) => {
        let performanceResponse = response.data.data;
        let performanceResponseData = performanceResponse.data;
        let performanceResponseKind = performanceResponse.kind;

        let newArr = performanceResponseData.map((object) => {
          return {
            value: object.value,
            kind: performanceResponseKind[`${object.kind}`],
          };
        });
        setPerformance(newArr);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  // FETCH USER_ACTIVITY
  const fetchActivity = async () => {
    await axios
      .get(`http://localhost:3000/user/${id}/activity`)
      .then((response) => {
        // console.log(response.data.data);
        let activityResponse = response.data.data.sessions;
        setActivity(activityResponse);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });

    // console.log(activity);
  };

  // const fetchSession = async () => {
  //   await axios
  //     .get(`http://localhost:3000/user/${id}/average-sessions`)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(`Error: ${error}`);
  //     });
  // };

  return (
    <div className="grid-container">
      <HorizontalNavbar />
      <VerticalNavbar />
      <Greetings name={data.firstName} />
      <ActivityChart data={activity} />
      <Specs data={data} />
      <SessionsChart />
      <PerformanceChart data={performance} />
      <ScoreChart />
    </div>
  );
}

export default User;
