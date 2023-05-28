const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");

const titleColor = document.getElementById("title-color");

const newYears = "1 Jan 2024";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

   const days = Math.floor(totalSeconds / 3600 / 24);
   const hours =Math.floor(totalSeconds / 3600) % 24;
   const mins = Math.floor(totalSeconds / 60) % 60;
   const seconds = Math.floor(totalSeconds) % 60;

   daysE1.innerHTML = days;
   hoursE1.innerHTML = hours;
   minsE1.innerHTML = mins;
   secondsE1.innerHTML = seconds;

}

function titleChangeColor() {
    titleColor.style.color = getRandomColor();
}

setInterval(titleChangeColor, 5000);
countdown();

setInterval(countdown, 1000);


// new method
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  



