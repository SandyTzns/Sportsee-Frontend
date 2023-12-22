// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "../styles/User.css";
// import axios from "axios";
// import { Greetings } from "../components/Greetings";
// import { Specs } from "../components/Specs";
// import { PerformanceChart } from "../components/PerformanceChart";
// import { ScoreChart } from "../components/ScoreChart";
// import { SessionsChart } from "../components/SessionsChart";
// import { ActivityChart } from "../components/ActivityChart";
// import { HorizontalNavbar } from "../components/HorizontalNavbar";
// import { VerticalNavbar } from "../components/VerticalNavbar";
// import { useFetch } from "../utils/useFetch";

// function User() {
//   const { id: userId } = useParams();

//   const {
//     data: user,
//     isLoading: userIsLoading,
//     error: userNotFound,
//   } = useFetch("http://localhost:3000/user/" + userId);

//   const { data: performance, isLoading: performanceIsLoading } = useFetch(
//     "http://localhost:3000/user/" + userId + "/performance"
//   );
//   console.log(user);
//   // const fetchData = async () => {
//   //   await axios
//   //     .get(`http://localhost:3000/user/${id}`)
//   //     .then((response) => {
//   //       let dataResponse = response.data.data;
//   //       setData({
//   //         id: dataResponse.id,
//   //         calorie: dataResponse.keyData.calorieCount,
//   //         carbs: dataResponse.keyData.carbohydrateCount,
//   //         fat: dataResponse.keyData.lipidCount,
//   //         protein: dataResponse.keyData.proteinCount,
//   //         score: dataResponse.todayScore * 100,
//   //         firstName: dataResponse.userInfos.firstName,
//   //       });
//   //     })
//   //     .catch((error) => {
//   //       console.log(`Error: ${error}`);
//   //     });
//   // };
//   // const fetchPerformance = async () => {
//   //   await axios
//   //     .get(`http://localhost:3000/user/${id}/performance`)
//   //     .then((response) => {
//   //       let performanceResponse = response.data.data;
//   //       let performanceResponseData = performanceResponse.data;
//   //       let performanceResponseKind = performanceResponse.kind;

//   //       let newArr = performanceResponseData.map((object) => {
//   //         return {
//   //           value: object.value,
//   //           kind: performanceResponseKind[`${object.kind}`],
//   //         };
//   //       });
//   //       setPerformance(newArr);
//   //     })
//   //     .catch((error) => {
//   //       console.log(`Error: ${error}`);
//   //     });
//   // };

//   // const fetchActivity = async () => {
//   //   await axios
//   //     .get(`http://localhost:3000/user/${id}/activity`)
//   //     .then((response) => {
//   //       let activityResponse = response.data.data.sessions;

//   //       let newActivity = activityResponse.map((object) => {
//   //         return {
//   //           day: object.day,
//   //           kilogram: object.kilogram,
//   //           calories: Math.round(object.calories / 10),
//   //         };
//   //       });
//   //       setActivity(newActivity);
//   //     })
//   //     .catch((error) => {
//   //       console.log(`Error: ${error}`);
//   //     });
//   // };

//   // const fetchSession = async () => {
//   //   await axios
//   //     .get(`http://localhost:3000/user/${id}/average-sessions`)
//   //     .then((response) => {
//   //       let sessionResponse = response.data.data.sessions;
//   //       setSession(sessionResponse);
//   //     })
//   //     .catch((error) => {
//   //       console.log(`Error: ${error}`);
//   //     });
//   // };

//   return (
//     <div className="grid-container">
//       <HorizontalNavbar />
//       <VerticalNavbar />
//       <div>{user}</div>
//       {/* <Greetings name={data.firstName} />
//       <ActivityChart data={activity} userId={id} /> */}
//       {/* <Specs data={user} /> */}
//       {/* <SessionsChart data={session} />
//       <PerformanceChart data={performance} />
//       <ScoreChart data={data} /> */}
//     </div>
//   );
// }

// export default User;
