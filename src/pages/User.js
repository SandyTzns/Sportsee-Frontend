// import "../styles/User.css";
// import { HorizontalNavbar } from "../components/HorizontalNavbar";
// import { VerticalNavbar } from "../components/VerticalNavbar";
// import { Specs } from "../components/Specs";
// import { Greetings } from "../components/Greetings";
// import { ActivityChart } from "../components/ActivityChart";
// import { ScoreChart } from "../components/ScoreChart";
// import { PerformanceChart } from "../components/PerformanceChart";
// import { SessionsChart } from "../components/SessionsChart";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useFetch } from "../utils/useFetch";

// export function User() {
//   const { id } = useParams();

//   const baseUrl = `http://localhost:3000/user/${id}`;

//   const { data: rawUserData } = useFetch(baseUrl);
//   const [userData, setUserData] = useState({});

//   const { data: rawActivityData } = useFetch(`${baseUrl}/activity`);
//   const [activity, setActivity] = useState({});

//   const { data: rawSessionData } = useFetch(`${baseUrl}/average-sessions`);
//   const [sessions, setSessions] = useState({});

//   const { data: rawPerformanceData } = useFetch(`${baseUrl}/performance`);
//   const [performance, setPerformance] = useState({});

//   useEffect(() => {
//     // user
//     setUserData({
//       userId: rawUserData?.id,
//       // calorie: rawUserData?.keydata.calorieCount,
//       // carbs: rawUserData?.keydata.carbohydrateCount,
//       // fat: rawUserData?.keydata.lipidCount,
//       // protein: rawUserData?.keydata.proteinCount,
//       // score: (rawUserData?.todayScore || rawUserData?.score) * 100,
//       // firstName: rawUserData?.keydata.userInfos.firstname,
//     });
//     // activity
//     let activitySessions = rawActivityData?.sessions;
//     let newActivity = activitySessions?.map((object) => {
//       return {
//         day: object.day,
//         kilogram: object.kilogram,
//         calories: Math.round(object.calories / 10),
//       };
//     });
//     setActivity(newActivity);
//     console.log(activity);

//     // session
//     setSessions(rawSessionData?.sessions);

//     // performance
//     let performanceResponseData = rawPerformanceData?.data;
//     let performanceResponsekind = rawPerformanceData?.kind;

//     let newPerformanceArray = performanceResponseData?.map((object) => {
//       return {
//         value: object.value,
//         kind: performanceResponsekind[`${object.kind}`],
//       };
//     });
//     setPerformance(newPerformanceArray);
//   }, [rawUserData, rawActivityData, rawSessionData, rawPerformanceData]);

//   return (
//     <div className="layout_container">
//       <HorizontalNavbar />
//       <div className="content-container">
//         <VerticalNavbar />
//         <div className="content">
//           {/* {<Greetings name={userData.firstName} />} */}
//           <div className="charts-container">
//             <div className="allcharts">
//               {/* <ActivityChart data={activity} /> */}
//               <div className="smallercharts">
//                 {/* <SessionsChart data={sessions} /> */}
//                 <PerformanceChart data={performance} />
//                 <ScoreChart data={userData} />
//               </div>
//             </div>
//             {/* {<Specs data={userData} />} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
