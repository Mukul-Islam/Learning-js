let colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let pushResult = [];
for (let i = colors.length - 1; i > 0; i--) {
    console.log(colors[i])
}


// task
const numbers = [12, 98, 5, 41, 23, 78, 46];
// Output:-> [12, 98, 76, 46]

for(let number of numbers)
{
    if(number%2==0)
        pushResult.push(number)
}
console.log(...pushResult)

// task 3
var task3numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// Output:->'TomTimTinTik'

let res = ' ';

for(task3 of task3numbers)
{
    
    res = res + task3;
    
}

let ress = `${res}`
console.log(ress)