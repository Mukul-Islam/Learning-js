const arr = [1, 2, 4, 24, 5, 24, 23];

const result = arr.reduce((acc, value) => acc * value);
const max = arr.reduce((acc, value) => acc > value ? acc : value)
console.log(result)
console.log(max);

function sum(sum1, sum2) {
    const result = sum1 + sum2;
    return result;
}
console.log(sum(12, 41));

// using map function

const numbers = [12, 13, 4, 242, 412, 421];
const mapping = numbers.filter(x => x > 40);
console.log(...mapping);
