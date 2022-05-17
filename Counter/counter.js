let count = 0;
const numbers = document.querySelector('#numbers');
const increaseBtn = document.querySelector('#increaseBtn');
const resetBtn = document.querySelector('#resetBtn');
const decreaseBtn = document.querySelector('#decreaseBtn');

increaseBtn.addEventListener('click', function(e){
    e.preventDefault();
    count++;
    numbers.textContent = count;
    if (count > 0){
        numbers.style.color = 'green';
    } else if (count < 0) {
        numbers.style.color = 'red';
    } else {
        numbers.style.color = 'black';
    }
    // console.log(numbers);
});

resetBtn.addEventListener('click', function(e){
    e.preventDefault();
    count = 0;
    numbers.textContent = count;
    if (count > 0){
        numbers.style.color = 'green';
    } else if (count < 0) {
        numbers.style.color = 'red';
    } else {
        numbers.style.color = 'black';
    }
    // console.log(numbers);
});

decreaseBtn.addEventListener('click', function(e){
    e.preventDefault();
    count--;
    numbers.textContent = count;
    if (count > 0){
        numbers.style.color = 'green';
    } else if (count < 0) {
        numbers.style.color = 'red';
    } else {
        numbers.style.color = 'black';
    }
    // console.log(numbers); 
});
