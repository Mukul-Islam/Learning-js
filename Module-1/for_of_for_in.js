const arr = [1,2,4124,124,12,12312312,1,4];

for (const key in arr) {
    console.log(key);
    
    
}

const arr2 = ['ba','ca','ga','ga'];
for(const key in arr2)
{
    console.log(key);
}

const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    id: 221311107,
    age: 22
}

for(const key in employee){
    const value = employee[key];
    // console.log(value);
    console.log(key,value)
}

// bactic function

const stu = `
hey babes i am mukul
no i have an issue of ${employee.id}`;
console.log(stu);