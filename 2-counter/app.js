// set initial count
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', function(e) {
    const styles = e.currentTarget.classList
    if(styles.contains('decrease')) count--;
    if(styles.contains('reset')) count = 0;
    if(styles.contains('increase')) count++;

    if(count > 0) value.style.color = 'green';
    if(count < 0) value.style.color = 'red';
    if(count === 0) value.style.color = '#222';
    value.textContent = count;
  })
});
