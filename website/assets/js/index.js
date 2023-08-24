const counter = document.getElementById('counter');
updateCounter = async () => {
    let response = await fetch('https://ww5vcheuc4pqbjchcnw2bbm2ym0ppnmq.lambda-url.ap-northeast-2.on.aws/');
    let data = await response.json();
    counter.innerHTML = `目前訪客數量:${data}`;
}

updateCounter();
