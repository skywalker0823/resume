import React from "react";


const url = "https://ww5vcheuc4pqbjchcnw2bbm2ym0ppnmq.lambda-url.ap-northeast-2.on.aws/"

export default async function Counter() {
    const [count, setCount] = React.useState(0);

    let response = fetch(url);
    let data = await response.json();
    setCount(data);
    
    return (
        <div>
            <h1>目前訪客數量:{count}</h1>
        </div>
    );
}
