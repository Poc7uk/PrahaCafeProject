import { useState, useEffect } from "react";

const useApi = (data) => {
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState("");
  const [apiLoading, setApiLoading] = useState(false);

  const promise = new Promise((resolve, reject) => {
    if (data) {
      setTimeout(function () {
        resolve(data);
      }, 2000);
    } else {
      reject("Не вдалося запросити дані зі сервера");
    }
  });

  useEffect(() => {
    setApiLoading(true);
    promise
      .then((data) => {
        setApiData(data);
      })
      .catch((error) => {
        setApiError(error);
      })
      .finally(() => {
        setApiLoading(false);
      });
  }, []);

  return [apiData, apiLoading, apiError];
};

export default useApi;
