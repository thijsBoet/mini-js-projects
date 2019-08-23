'use strict';

window.onload = function () {
  const date = new Date();

  const monthName = ['January', 'February', 'March', 'April', 'June', 'Juli', 'August', 'September', 'October', 'November', 'December'];
  const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sun'];

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const firstDate = `${dayName[day]} ${monthName[month]} 1 ${year}`;
  // let tmp = new Date(firstDate).toDateString();
  let days = new Date(year, month + 1, 0).getDate();
}

function getCalender(day, days) {
  const table = document.createElement('table');
  const tr = document.createElement('tr');

  // days of the week
  for (let i = 0; i <= 6; i++){
    const td = document.createElement('td');
    td.innerHTML = "SMTWTFS"[c];
    tr.appendChild(td); 
  }
  table.appendChild(tr);
}