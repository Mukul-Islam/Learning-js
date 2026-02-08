const arr = [1, 3, 424, 5, 1234, 6];
const double = [];

// for(const key of arr)
// {
//     const result = key * 2;
//     double.push(result);
// }

const doubleit = mul => mul * 3;
const mapp = arr.map(doubleit);
console.log(...mapp)