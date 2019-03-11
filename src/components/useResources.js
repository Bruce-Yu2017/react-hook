import { useState, useEffect } from "react";
import axios from "axios";

const useResource = data => {
  const [resources, setResource] = useState([]);
  const fetchData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/${data}`).then(data => {
      setResource(data.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, [data]);
  return resources;
};

export default useResource;
