import { useEffect, useState } from "react";
import axios from "axios";
import {
  getUserMockedData,
  getActivityMockedData,
} from "../mockedData/getMockedData";

export function useFetch(userId, endpoint, mockData) {
  const base_url = `http://localhost:3000/user/${userId}/${endpoint}`;
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    // use Axios to fetch data in API
    async function fetchData() {
      try {
        const response = await axios.get(base_url);
        setData(response.data.data);
      } catch (error) {
        setError(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    }

    // call mockedData in frontend
    function fetchMockedData() {
      let response = getUserMockedData(userId);
      setData(response);
    }

    if (mockData) {
      fetchMockedData();
    } else {
      fetchData();
    }
  }, [userId, endpoint, mockData]);

  return { data, error, loading };
}
