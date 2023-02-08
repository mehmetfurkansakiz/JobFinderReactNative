import axios from "axios";
import { useState, useEffect } from "react";

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  console.log("try catch girmeden");
  const fetchData = async () => {
    try {
      console.log("try geldim");
      const { data: responseData } = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      console.log("catch geldim");
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data, error };
}
export default useFetch;
