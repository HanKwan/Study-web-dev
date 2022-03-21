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
    'coworker01': {
        'name': 'john',
        'nickname': ['jo'],
        'income': 1000
    },
    'coworker02': {
        'name': 'zero2',
        'nickname': ['02'],
        'income': 3000
    }
}
function updating(id, prop, val){
    if (val === ''){
        delete coworkers[id][prop];
    } else if (prop === 'nickname'){
        coworkers[id][prop] = coworkers[id][prop] || [];
        coworkers[id][prop].push(val);
    } else {
        coworkers[id][prop] = val;
    }
    return coworkers;
}
updating('coworker02', 'nickname', 'waifu');
updating('coworker01', 'name', 'jomanji');
console.log(coworkers);