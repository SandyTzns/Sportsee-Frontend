import axios from "axios";
import { useEffect, useState } from "react";
import {
  getUserMockedData,
  getActivityMockedData,
  getSessionsMockedData,
  getPerformanceMockedData,
} from "./getMockedData";
import { useParams } from "react-router-dom";



function useFetch(url, setDataFunc, mockDataType) {
  const { id } = useParams();

  const baseUrl = `http://localhost:3000/user/${id}` + url;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (mockDataType) {
      getMockedData(mockDataType);
    } else {
      getData();
    }
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(baseUrl);
      setData(response.data.data);
      setDataFunc(response.data.data);
    } catch (error) {
      setError(`Error: ${error}`);
    }
  };

  const getMockedData = (type) => {
    switch (type) {
      case "user":
        const dataUser = getUserMockedData(id);
        return setDataFunc(dataUser);

      case "sessions":
        const dataSessions = getSessionsMockedData(id);
        return setDataFunc(dataSessions);

      case "activity":
        const dataActivity = getActivityMockedData(id);
        return setDataFunc(dataActivity);

      case "performance":
        const dataPerformance = getPerformanceMockedData(id);
        return setDataFunc(dataPerformance);

      default:
        const defaultData = getUserMockedData(id);
        return setDataFunc(defaultData);
    }
  };

  return { data, error };
}

export default useFetch;
