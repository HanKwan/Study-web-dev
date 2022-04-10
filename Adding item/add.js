var addForm = document.getElementById('addForm');
var theList = document.getElementById('pList');
var search = document.getElementById('search');

addForm.addEventListener('submit', addingItem);
theList.addEventListener('click', deleting);
search.addEventListener('keyup', searchOn);

function addingItem(e){
    e.preventDefault();
    var newItem = document.getElementById('texting').value;
    var li = document.createElement('li');
    li.className = 'in-list';
    li.appendChild(document.createTextNode(newItem));
    theList.appendChild(li);
    
    document.getElementById('texting').value='';
    
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn-x';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    li.appendChild(deleteBtn);
}

function deleting(e){
    if (e.target.classList.contains('btn-x')){
        var li = e.target.parentElement;
        theList.removeChild(li);
    }
}

function searchOn(e){
    var text = e.target.value.toLowerCase();
    var theItems = document.getElementsByTagName('li');
    Array.from(theItems).forEach(function(z){
        var theNames = z.firstChild.textContent;
        if (theNames.toLowerCase().indexOf(text) != -1){
            z.style.display = 'block';
        } else {
            z.style.display = 'none';
        }
    });
}