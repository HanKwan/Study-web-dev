//greeting
var firstName = 'Han';
var age = 22;
let hello = (`My name is ${firstName} and I am ${age}`);
const lastName = 'Saing';
hello += ` and my last name is ${lastName}`
console.log(hello);

//true or false
function trueOrFalse(val) {
    return val === 10 ? 'Yes, it is true' : 'NO, it is false'
}        
console.log (trueOrFalse(14));

function newVal(value) {
    if (value <= 10 ){
        return "small";
    } else if (value >=20) {
        return "large";
    } else {return "medium";}
}
console.log(newVal(11));

//updating information
let coworkers = {
    "John": {
        "income": 20,
        "nickname": ["Johnny"],
        "pet": ["dog", "cat"]
    },
    "Mary": {
        "income": 30,
        "nickname": ["May"],
    },
    "Mark": {
        "income": 50
    }
}
let copyCoworkers = JSON.parse(JSON.stringify(coworkers));
function updateInfo (id, prop, value){
    if (value === ''){
        delete coworkers[id][prop];
    } else if (prop === 'nickname'){
        coworkers[id][prop] = coworkers[id][prop] || [];
        coworkers[id][prop].push(value);
    } else if (prop === 'pet'){
        coworkers[id][prop] = coworkers[id][prop] || [];
        coworkers[id][prop].push(value);
    } else coworkers[id][prop] = value;
    return coworkers;
}
updateInfo('Mark', 'pet', 'fish');
updateInfo('Mary', 'nickname', 'Mi')
console.log(coworkers);

// never use (i =+ 2)
let myArray = [];
for (let i = 0; i < 10; i += 2){
    myArray.push(i);
}
console.log(myArray);

//profile check
let friendList = [
  {
    userName: 'Katy',
    followers: 1500,
    following: ''
  },
  {
    userName: 'Mandy',
    followers: 400,
    following: ['coffee', 'mukbang']
  },  {
    userName: 'Joe',
    followers: 50,
    following: ['technology', 'game']
  } 
];
function checking(name, prop){
    for (let i=0; i<friendList.length; i++){
        if (friendList[i].userName === name){
            return friendList[i][prop] || 'cannot find';
        } 
    }
    return 'no contact';
}
console.log(checking('Joe', 'followers'));

//construtor
//function Book(title, author, year){
//    this.title = title;
//    this.author = author;
//   this.year = year;
//    Book.prototype.getSummary = function() {
//        return `${this.title} is written by ${this.author} in ${this.year}.` 
//    }
//}
//can add many book below
//console.log (book1 = new Book('mindset', 'steven', 1998));
//console.log (book1.getSummary()); 

//ES6 / made a constructor by making the first letter uppercase
class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    } 
    getSummary (){
        return `${this.title} is written by ${this.author} in ${this.year}.` 
    }
}
console.log(book1=new Book('mindset', 'steven', 2013));

//testing mouse
var mouseTest = document.querySelector('.mouse-testing');
mouseTest.addEventListener('mousemove', startEvent);
function startEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE'+e.type);
}

const animals = ['cat', 'dog', 'bird', 'lion'];
for (let i=0; i<animals.length; i++){
    console.log(animals[i]);
}

class Character {
    constructor(name, element, star) {
        this.name = name;
        this.element = element;
        this.star = star;
    }
    getSummary (){
        return `${name} has the element of ${element} and the rating of the char is ${star}.`
    }
}
character1=new Character('Althon', 'fire', 4.5);
console.log(character1);