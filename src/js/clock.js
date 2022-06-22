const localInfo = document.querySelector('.local-info');
const currentDate = document.querySelector('.current__date');
const currentClock = document.querySelector('.current__clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    currentClock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate() {
    const date = new Date();
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const dayName = date.toLocaleString('en-US', { weekday: 'short' });
    const day = String(date.getDate());
    const month = monthNames[date.getMonth() + 1];
    currentDate.innerText = `${dayName}. ${day} ${month} `;
}

getClock();
getDate();
setInterval(getClock, 1000);

function activeClass() {
    localInfo.classList.add('ani-fadeup1');
}

if (savedUsername !== null) {
    activeClass();
}

loginForm.addEventListener('submit', activeClass);
