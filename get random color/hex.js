const hexColor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F",];
const button2 = document.querySelector('.btn');
const color = document.querySelector('.color');

button2.addEventListener('click', changeHexColor);

function changeHexColor(){
    var randomColor2 = '#';
    for (let i=0; i<6; i++){
        randomColor2 += hexColor[getRandomNum()];
    }
    console.log(randomColor2);
    color.textContent = randomColor2;
    document.body.style.backgroundColor =randomColor2;
}

function getRandomNum(){
    return Math.floor(Math.random() * hexColor.length);
}
console.log(getRandomNum());