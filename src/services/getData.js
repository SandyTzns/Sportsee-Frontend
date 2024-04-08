import apiCall from "../data/apiCall";
import MockData from "../data/mockData";

// J'initialise une variable pour vérifier que la condition est true or not

let useDatafromAPI = "true";

// condition ternaire pour savoir si j'utilise les data de l'API ou du MOCKDATA en fonction du dessus

const exportedAPI = useDatafromAPI == "true" ? apiCall : MockData;

export const getData = async (type, id) => {
  let data = [];

  switch (type) {
    case "USER_MAIN_DATA":
      data = await exportedAPI.getUser(id);
      break;
    case "USER_ACTIVITY":
      data = await exportedAPI.getActivity(id);
      break;
    case "USER_PERFORMANCE":
      data = await exportedAPI.getPerformance(id);
      break;
    case "USER_AVERAGE_SESSIONS":
      data = await exportedAPI.getAverageSessions(id);
      break;
  }
  return data;
};
