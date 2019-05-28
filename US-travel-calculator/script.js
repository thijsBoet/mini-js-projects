'use strict';

let centimeter = document.getElementById('centimeter');
let inches = document.getElementById('inches');

centimeter.addEventListener('onchange', function convert(centimeter, inches){
    inches.value = (parseInt(centimeter.value) * 0.3937).toFixed(2);
});
