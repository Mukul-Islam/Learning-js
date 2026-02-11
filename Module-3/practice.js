let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let pushResult = [];
for (let i = colors.length - 1; i > 0; i--) {
    console.log(colors[i])
}


// task
const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output:-> [12, 98, 76, 46]

for (let number of numbers) {
    if (number % 2 == 0)
        pushResult.push(number)
}
console.log(...pushResult)

// task 3
var task3numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// Output:->'TomTimTinTik'

let res = "";

for (task3 of task3numbers) {

    res = res + task3;

}


console.log("'" + res + "'")

// task 4 
const statement = 'I am a hard working person'
// Output:->'person working hard a am I'
// for(let stat of statement)
// {

// }

console.log(statement.split(" ").reverse().join(" "));

// task-5
let arr = [1, 2, 3];
let copyArr = [...arr]
copyArr[0] = 99;
console.log(arr);
console.log(copyArr);

// task-6

const object = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 }
]

for (let obj of object) {
    console.log(obj.name + " : " + obj.marks);
    // console.log();
}

// task - 8
let task8Arr = [
  [1, 2],
  [3, 4],
  [5, 6]
]
task8Arr[1][0] = 99

console.log(task8Arr)