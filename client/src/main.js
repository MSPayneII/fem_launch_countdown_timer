const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// select elements
const countdown = document.querySelector(".countdown");
const numbers = document.querySelectorAll(".number");

// set launch date to be 9 days away from the day the website is opened
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const launch = new Date(tempYear, tempMonth, tempDay + 9, 8, 30, 00);
console.log(launch);

// extract values from launch date
const launchYear = launch.getFullYear();
const launchMonth = months[launch.getMonth()];
const launchDate = launch.getDate();
const launchDay = weekdays[launch.getDay()];
const launchHour = launch.getHours();
const launchMinutes = launch.getMinutes();
const launchSeconds = launch.getSeconds();

// calculate launch time in ms
const launchTime = launch.getTime();

// function to get the remaining time between launch and now
const getRemainingTime = () => {
  const today = new Date().getTime();
  let timeLeft = launchTime - today;

  // number of ms in one day
  const oneDay = 24 * 60 * 60 * 1000;
  // number of ms in one hour
  const oneHour = 60 * 60 * 1000;
  // number of ms in one minute
  const oneMinute = 60 * 1000;
  // number of ms in one second
  const oneSecond = 1000;

  // calculate values
  let daysLeft = Math.floor(timeLeft / oneDay);
  let hoursLeft = Math.floor((timeLeft % oneDay) / oneHour);
  let minutesLeft = Math.floor((timeLeft % oneHour) / oneMinute);
  let secondsLeft = Math.floor((timeLeft % oneMinute) / oneSecond);

  // put values in an array
  const values = [daysLeft, hoursLeft, minutesLeft, secondsLeft];

  // set number values
  numbers.forEach((number, index) => {
    number.innerHTML = numberFormat(values[index]);
  });
};

// function that adds a zero to values that are less than 10
const numberFormat = (timeUnit) => {
  if (timeUnit < 10) {
    timeUnit = `0${timeUnit}`;
    return timeUnit;
  } else {
    return timeUnit;
  }
};

// variable for set Interval
let setIntervalVariable = setInterval(getRemainingTime, 1000);

getRemainingTime();
