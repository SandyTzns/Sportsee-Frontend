import { useEffect, useState } from "react";
import axios from "axios";

export function useFetchTest(url, mock) {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await axios.get(url);
            setData(response.data.data);
      } catch (error) {
        setError(`Error: ${error}`);
      } finally {
        setLoading(false);
      }
    }

    function fetchMockedData() {}

    if (mock) {
      fetchMockedData();
    } else {
      fetchData();
    }
  }, [url]);

  return { data, error, loading };
}
