const firstName = 'Han';
const middleName = 'Kwan';
const lastName = 'Saing';
let hello = (`Hello, my name is ${firstName} ${middleName} ${lastName}`);
hello += ` and nice to meet u`;
console.log(hello);

function trueOrFalse(val){
    val === 10.4 ? 'True' : 'False';
}
console.log(trueOrFalse(10.34));

function bigOrSmall (val){
    if (val <= 10){
        return 'Small';
    } else if (val <= 10 && val >= 30){
        return 'Medium';
    } else {
        return 'Large';
    }
}
console.log(bigOrSmall(34));

let coworkers = {
    'john': {
        'nickname': ['jojo'],
        'income': '30k',
    },
    'mary': {
        'nickname': ['may'],
        'income': '26k',
        'likes': []
    }
};
function updating(rName, prop, val){
    if (val === ''){
        delete coworkers[rName][prop];
    } else if (prop === 'nickname'){
        coworkers[rName][prop] = coworkers[rName][prop] || [];
        coworkers[rName][prop].push(val);
    } else {
        coworkers[rName][prop] = val;
    }
    return coworkers;
};
updating('mary', 'likes', 'candy');
updating('john', 'nickname', 'fish');
console.log(coworkers);

let friendList = [
    {
        username: 'john',
        followers: 14,
        likes: 'coffee'
    },
    {
        username: 'may',
        followers: 1344,
        likes: ''
    }
]
function checking(name, val){
    for (let i=0; i<friendList.length; i++){
        if (friendList[i].username === name){
            return friendList[i][val] || 'no value';
        }
    }
    return 'no contant';
}
console.log(checking('john', 'followers'));