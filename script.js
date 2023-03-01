const hourDisplay = document.querySelector(".hour-display");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
const buttonIniciar = document.querySelector(".button-iniciar");
const buttonPausar = document.querySelector(".button-pausar");
const buttonZerar = document.querySelector(".button-zerar");

let textSecond = Number(second.textContent);
let textMinute = Number(hour.textContent);
let textHour = Number(minute.textContent);

let timerSecond;
let timerMinute;
let timerHour;

function addZero(value) {
  return value >= 10 ? value : `0${value}`;
}

function incrementSecond() {
  textSecond += 1;
  let counterSecond = textSecond < 60 ? textSecond : (textSecond = 0);
  second.innerHTML = addZero(counterSecond);
  return console.log(addZero(counterSecond));
}

function incrementMinute() {
  textMinute += 1;
  let counterMinute = textMinute < 60 ? textMinute : (textMinute = 0);
  minute.innerHTML = addZero(counterMinute);
  return console.log(addZero(counterMinute));
}

function incrementHour() {
  textHour += 1;
  let counterHour = textHour <= 23 ? textHour : (textHour = 0);
  hour.innerHTML = addZero(counterHour);
  return addZero(counterHour);
}

function initTimer() {
  hourDisplay.setAttribute("class", "hour-display");

  clearInterval(timerSecond);
  clearInterval(timerMinute);
  clearInterval(timerHour);

  timerSecond = setInterval(incrementSecond, 1000);
  timerMinute = setInterval(incrementMinute, 60000);
  timerHour = setInterval(incrementHour, 1440000);
}

function stopTimer() {
  hourDisplay.setAttribute("class", "hour-display-pausado");
  clearInterval(timerSecond);
  clearInterval(timerMinute);
  clearInterval(timerHour);
}

function eraseTimer() {
  hourDisplay.setAttribute("class", "hour-display");
  clearInterval(timerSecond);
  clearInterval(timerMinute);
  clearInterval(timerHour);

  textSecond = 0;
  textMinute = 0;
  textHour = 0;

  hour.innerHTML = "00";
  minute.innerHTML = "00";
  second.innerHTML = "00";
}

buttonIniciar.addEventListener("click", (e) => {
  initTimer();
});
buttonPausar.addEventListener("click", (e) => {
  stopTimer();
});

buttonZerar.addEventListener("click", (e) => {
  eraseTimer();
});
