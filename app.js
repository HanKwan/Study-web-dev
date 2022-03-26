let addH = document.querySelector('.addH');
let addForm = document.querySelector('#addForm');
let lists = document.querySelector('.lists');

addForm.addEventListener('submit', submiting);

function submiting(e) {
    e.preventDefault();
    let theItem = addH.value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(theItem));
    lists.appendChild(li);

    addH.value = '';

    
}