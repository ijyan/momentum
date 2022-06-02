const clock = document.querySelector('.clock');

function getClock() {
    const date = new Date();

    // date.getHours() 를 string으로 변환환
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 즉시 호출 : website가 load 되자마자 getClock()을 바로 실행하기 위해
getClock();
setInterval(getClock, 1000);
