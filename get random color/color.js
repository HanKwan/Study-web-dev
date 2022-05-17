const fixedColor = ['red', 'blue', 'yellow', 'green'];
const button = document.querySelector('.btn');
const color = document.querySelector('.color');

button.addEventListener('click', changeFixedColor);

function changeFixedColor(){
    var randomColor = getRandomNum();
    color.textContent = fixedColor[randomColor];
    document.body.style.backgroundColor = fixedColor[randomColor];
}

function getRandomNum(){
    return Math.floor(Math.random() * fixedColor.length);
}


