import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Greetings } from "../components/Greetings";
// import { Specs } from "../components/Specs";
import axios from "axios";
// import { PerformanceChart } from "../components/PerformanceChart";
// import { ScoreChart } from "../components/ScoreChart";
// import { SessionsChart } from "../components/SessionsChart";
import { ActivityChart } from "../components/ActivityChart";

function User() {
  const { id } = useParams();

  useEffect(() => {
    fetchData();
    fetchPerformance();
    fetchActivity();
  }, []);

  const [data, setData] = useState({});
  const [performance, setPerformance] = useState({});
  // const [activity, setActivity] = useState({})
  // const [session, setsession] = useState({})

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
  // FETCH USER_PERFORMANCE
  const fetchPerformance = async () => {
    await axios
      .get(`http://localhost:3000/user/${id}/performance`)
      .then((response) => {
        let activityResponse = response.data.data;
        let activityResponseData = activityResponse.data;
        let activityResponseKind = activityResponse.kind;

        let newArr = activityResponseData.map((object) => {
          return {
            value: object.value,
            kind: activityResponseKind[`${object.kind}`],
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
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  };

  // FETCH USER_AVERAGE_SESSIONS
  // const fetchSession = async () => {
  //   await axios
  //     .get(`http://localhost:3000/user/${id}/average-sessions`)
  //     .then((response) => {
  //  console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(`Error: ${error}`);
  //     });
  // };

  return (
    <div>
      <Greetings name={data.firstName} />
      {/* <Specs data={data} />
      <PerformanceChart data={performance} /> */}
      {/* <ScoreChart /> */}
      {/* <SessionsChart />*/}
      <ActivityChart />
    </div>
  );
}

export default User;
