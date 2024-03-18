import { USER_MAIN_DATA } from "../data/data";

export function UserOfMockedData() {
  // think about deconsrtucturing like in USER
  let user = USER_MAIN_DATA.map((u) => {
    return {
      id: u.id,
      calorie: u.keyData.calorieCount,
      protein: u.keyData.proteinCount,
      carbs: u.keyData.carbohydrateCount,
      fat: u.keyData.lipidCount,
      firstName: u.userInfos.firstName,
      score: (u.score || u.todayScore) * 100,
    };
  });
  console.log(user[1]);
  return <h1>Hello NEW DAY</h1>;
}
