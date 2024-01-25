import React, { useState, useEffect } from "react";
import axios from "axios";

export default function LinkData() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response);
      setData(response.data);
      

    };
    fetchData();
   
  }, []);
  return (
    <div>
      {data && data.length > 0 && (
        <ul>
          {data.map((el) => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}









/**
 * we should always set a condition in return ()
 * because return always excutes first before useEffect so when it excutes it found data is null
 * we should force return to excute useEffect firstly and thujs with condition
 */