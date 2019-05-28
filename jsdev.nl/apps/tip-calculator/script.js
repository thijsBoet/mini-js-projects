'use strict';

const calculateBtn = document.getElementById('calculateBtn');

calculateBtn.addEventListener('click', function calcTip(){
  let bill = parseFloat(document.getElementById("form").elements[0].value);
  let percentage = parseInt(document.getElementById("form").elements[1].value);
  
  return document.getElementById('tip').innerText = (bill * (percentage/100)).toFixed(2);  
});