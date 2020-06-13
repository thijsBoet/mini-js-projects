'use strict';

window.onload = function () {
  const date = new Date();

  const monthName = ['January', 'February', 'March', 'April', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sun'];

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();

  const firstDate = `${dayName[day]} ${monthName[month]} 1 ${year}`;
  let tmp = new Date(firstDate).toDateString();
  let fistDay = tmp.substring(0, 3);
  let dayNo = dayName.indexOf(fistDay);
  let days = new Date(year, month + 1, 0).getDate();

  let calender = getCalender(day, days);
  document.getElementById('calender-month-year').innerHTML = monthName[month];
  document.getElementById('calender-dates').appendChild(calender);
}

function getCalender(dayNo, days) {
  const table = document.createElement('table');
  const tr = document.createElement('tr');

  // days of the week
  for (let i = 0; i <= 6; i++) {
    const td = document.createElement('td');
    td.innerHTML = "SMTWTFS"[i];
    tr.appendChild(td);
  }
  table.appendChild(tr);

  // create 2nd row
  for (let i = 0; i <= 6; i++) {
    if (i === dayNo) {
      break;
    }
    const td = document.createElement('td');
    td.innerHTML = "";
    tr.appendChild(td);
  }
  let count = 1;
  for (let i; i <= 6; i++) {
    const td = document.createElement('td');
    td.innerHTML = "";
    count++;
    tr.appendChild(td);
  }
  table.appendChild(tr);

  // rest of rows
  for (let j = 3; j <= 6; j++) {
    const tr = document.createElement('tr');
    for (let i = 0; i <= 6; i++) {
      if (count > days) {
        table.appendChild(tr);
        return table;
      }
      const td = document.createElement('td');
      count++;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}