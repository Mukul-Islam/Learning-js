// this is normal define of array
const arr = ['am','jam','kathal'];
console.log(arr);

// this is destructing method
//array defined
const [one,two,three] =['am','jam','kathal']
console.log(one);

// object defined

const obj = {
    name:'mukul islam',
    id: 221311107,
    sec: 'C'
}
delete obj.sec;
Object.seal(obj);
obj.name = "bokul islam"


console.log(obj);