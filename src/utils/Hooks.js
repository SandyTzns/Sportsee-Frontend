import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/User.css";
import axios from "axios";

export function Hooks() {
  const { id } = useParams();

  useEffect(() => {
    fetchData();
    fetchPerformance();
    fetchActivity();
    fetchSession();
  }, []);

  const [data, setData] = useState({});
  const [performance, setPerformance] = useState({});
  const [activity, setActivity] = useState({});
  const [session, setSession] = useState({});

  return;
}

export const fetchData = async () => {
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

export const fetchPerformance = async () => {
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

export const fetchActivity = async () => {
  await axios
    .get(`http://localhost:3000/user/${id}/activity`)
    .then((response) => {
      let activityResponse = response.data.data.sessions;

      let newActivity = activityResponse.map((object) => {
        return {
          day: object.day,
          kilogram: object.kilogram,
          calories: Math.round(object.calories / 10),
        };
      });
      setActivity(newActivity);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};

export const fetchSession = async () => {
  await axios
    .get(`http://localhost:3000/user/${id}/average-sessions`)
    .then((response) => {
      let sessionResponse = response.data.data.sessions;
      setSession(sessionResponse);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
};
