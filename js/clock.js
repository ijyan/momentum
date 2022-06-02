const clock = document.querySelector('.clock');

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// 즉시 호출 : website가 load 되자마자 getClock()을 바로 실행하기 위해
getClock();
setInterval(getClock, 1000);
