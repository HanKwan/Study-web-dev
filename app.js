let form = document.querySelector('#form');
let addH = document.querySelector('#addH');
let submit = document.querySelector('#submit');
let lists = document.querySelector('#lists');

form.addEventListener('submit', added);
lists.addEventListener('click', deleted);

function added(e) {
    e.preventDefault();
    let newItem = addH.value;
    let li = document.createElement('li');
    li.className = 'aList';
    li.appendChild(document.createTextNode(newItem));
    lists.appendChild(li);

    addH.value = '';

    let nBtn = document.createElement('button');
    nBtn.className = 'xBtn';
    nBtn.textContent = 'X';
    li.appendChild(nBtn);
}

function deleted(e) {
    if (e.target.classList.contains('xBtn')) {
        let li = e.target.parentElement;
        lists.removeChild(li);
    }
}