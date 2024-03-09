"use client";
import React, { useEffect } from "react";
import axios from "axios";
export default function Home() {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    async function search() {
      try {
        const response = await axios.get("/api/search");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    search();
  }, [])
  return (
    <main>
      <div className="card">
        
      </div>
    </main>
  );
}
