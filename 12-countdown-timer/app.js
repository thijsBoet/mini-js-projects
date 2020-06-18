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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2021, 11, 25, 17, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month}, ${year} ${hours}:${minutes}`;

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  // 1s = 1000ms
  // im = 60s
  // 1hr = 60mins
  // 1d = 24hr
  // 
  const oneDay = 86400000 // = 24 * 60 * 60 * 1000
  const oneHour = 3600000 // = 60 * 60 * 1000
  const oneMinute = 60000 // = 60 * 1000

  // calc all time values
  let days = Math.floor(t/oneDay);
  let hours = Math.floor((t % oneDay ) / oneHour);
  let minutes = Math.floor((t % oneHour ) / oneMinute);
  let seconds = Math.floor((t % oneMinute ) / 1000);
  
  // set values items array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if(item < 10) {
      return item = `0${item}`;
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this giveaway has expired</h4>`
  }
}

// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();