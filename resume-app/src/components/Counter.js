import React, { useState, useEffect } from "react";

const url = "https://ww5vcheuc4pqbjchcnw2bbm2ym0ppnmq.lambda-url.ap-northeast-2.on.aws/";

export default function Counter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(url);
        let data = await response.json();
        setCount(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // 空依賴數組表示僅在組件初次渲染時執行一次

  return (
    <div>
      <h1>目前訪客數量: {count !== null ? count : "Loading..."}</h1>
    </div>
  );
}
