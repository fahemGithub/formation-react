import React, { useState, useEffect } from "react";
import axios from "axios"

export default function LinkData() {
  const {data, setData} = useState(null)
  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(response);
    }
    fetchData();
  }, [])
  return (
    <div></div>
  )
}