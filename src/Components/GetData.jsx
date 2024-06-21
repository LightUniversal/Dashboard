import React, { useState, useEffect } from "react";

const GetData = () => {

    const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if(res.status !== 200) {
            throw new Error("Check the url");
        }
        const result = await res.json();
        setData(result)
        console.log(result);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return <div></div>;
};

export default GetData;
