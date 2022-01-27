const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const second = document.querySelector(".second");
const day = document.querySelector(".day");

let times = new Date;
let getHours = times.getHours();
let getMinutes = times.getMinutes();
let getSecond = times.getSeconds();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function setTimer() {
    getHours < 10 ? hours.innerHTML = `0${getHours}` :
    hours.innerHTML = getHours;
    getMinutes < 10 ? minutes.innerHTML = `0${getMinutes}` : minutes.innerHTML = getMinutes;
    getSecond < 10 ? second.innerHTML = `0${getSecond}` :
    second.innerHTML = getSecond;
    
}

setTimer();

setInterval( () => {
    getSecond++;
    if(getSecond > 59) {
        getSecond = 0;
        getMinutes++;
    }
    if(getMinutes > 59) {
        getHours++;
        getMinutes = 0;
    }
    if(getHours > 23) {
        getHours = 0;
    }
    setTimer();
}, 1000 )

// Kamis, 06-01-2022

let hari = times.getDate(),
    bulan = times.getMonth() + 1;

hari < 10 ? hari = `0${times.getDate()}` : hari = times.getDate();
bulan < 10 ? bulan = `0${times.getMonth()+1}` : bulan = times.getMonth()+1;

day.innerHTML = `${days[times.getDay()]}, ${hari}-${bulan}-${times.getFullYear()}`;