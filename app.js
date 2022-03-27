let addForm = document.querySelector('#addForm');
let lists = document.querySelector('.lists');
let search = document.querySelector('#search');

addForm.addEventListener('submit', onAdd);
lists.addEventListener('click', onDelete);
search.addEventListener('keyup', onSearch);

function onAdd(e) {
    e.preventDefault();
    let txtItm = document.querySelector('.addH').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(txtItm));
    li.classList = 'aList';
    lists.appendChild(li);

    document.querySelector('.addH').value = '';

    let xBtn = document.createElement('button');
    xBtn.classList = 'xBtn';
    xBtn.textContent = 'X';
    li.appendChild(xBtn);
}

function onDelete(e) {
    e.preventDefault();
    if (e.target.classList.contains('xBtn')) {
        let li = e.target.parentElement;
        lists.removeChild(li);
    }
}

function onSearch(e) {
    let newItm = document.getElementsByTagName('li');
    let text = e.target.value.toLowerCase()
    Array.from(newItm).forEach(function(z) {
        let names = z.firstChild.textContent;
        if (names.toLowerCase().indexOf(text) != -1) {
            z.style.display = 'block';
        } else {
            z.style.display = 'none';
        }
    })
}