let count = 0;
const numbers = document.querySelector('#numbers');
const decreaseBtn = document.querySelector('#decreaseBtn');
const resetBtn = document.querySelector('#resetBtn');
const increaseBtn = document.querySelector('#increaseBtn');

decreaseBtn.addEventListener('click', decreaseNum);
resetBtn.addEventListener('click', resetNum);
increaseBtn.addEventListener('click', increaseNum);

function decreaseNum(e){
    e.preventDefault();
    count--;
    numbers.textContent = count;
    if (count < 0){
        numbers.style.color = 'red';
    } else if (count > 0){
        numbers.style.color = 'green';
    } else {
        numbers.style.color = 'black';
    }
};
console.log(count);
function resetNum(e){
    e.preventDefault();
    count = 0;
    numbers.textContent = count;
    if (count < 0){
        numbers.style.color = 'red';
    } else if (count > 0){
        numbers.style.color = 'green';
    } else {
        numbers.style.color = 'black';
    }
};
function increaseNum(e){
    e.preventDefault();
    count++;
    numbers.textContent = count;
    if (count < 0){
        numbers.style.color = 'red';
    } else if (count > 0){
        numbers.style.color = 'green';
    } else {
        numbers.style.color = 'black';
    }
};