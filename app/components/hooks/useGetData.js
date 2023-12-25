import { useEffect, useState } from "react";

const useGetData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
  
};

export default useGetData;
