const timeEl = document.querySelector('#h-min');
const second = document.querySelector('#second');
const dateEl = document.querySelector('.date');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'];
// setInterval(() => {
    const time = new Date();
    console.log(time);
    timeEl.innerText = time.getHours() + ':' + time.getMinutes();
    second.innerText = time.getSeconds();
    dateEl.innerText = days[time.getDay()] + ', ' + time.getDate() + ' ' + months[time.getMonth()];
// }, 1000);