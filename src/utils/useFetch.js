import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // run once, on start
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data.data);
    } catch (error) {
      setError(`Error: ${error}`);
    }
  };

  return { data, error };
}

export default useFetch;
