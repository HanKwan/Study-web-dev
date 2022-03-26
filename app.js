let addH = document.querySelector('.addH');
let addForm = document.querySelector('#addForm');
let lists = document.querySelector('.lists');

addForm.addEventListener('submit', submiting);
lists.addEventListener('click', deleting);

function submiting(e) {
    e.preventDefault();
    let theItem = addH.value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(theItem));
    lists.appendChild(li);

    addH.value = '';

    let xBtn = document.createElement('button');
    xBtn.classList = 'xBtn';
    xBtn.textContent = 'X';
    li.appendChild(xBtn);
    li.classList = "aList";
}
function deleting(e) {
    if (e.terget.classList.contains('xBtn')) {
        let li = e.target.parentElement;
        lists.removechile(li);
    }
}