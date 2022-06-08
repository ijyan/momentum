const currentDate = document.querySelector('.current__date');
const currentClock = document.querySelector('.current__clock');
const date = new Date();

function getClock() {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    currentClock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const dayName = date.toLocaleString('en-US', { weekday: 'short' });
    const day = String(date.getDate());
    const month = String(date.getMonth() + 1);
    currentDate.innerText = `${dayName}. ${month}월 ${day}일 `;
}

// 즉시 호출 : website가 load 되자마자 getClock()을 바로 실행하기 위해
getClock();
getDate();
setInterval(getClock, 1000);
