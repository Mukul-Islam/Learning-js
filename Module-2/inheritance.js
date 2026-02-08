// now the work of inherit...

class Inheritt
{
    constructor(name,age) {
        this.name = name;
        this.age = age; 
    }
}

class Dog extends Inheritt
{
    constructor(name,age,bark)
    {
        super(name,age);
        // this.name = name;
        // this.age = age;
        this.bark = bark;
    }

    
    details()
    {
        console.log(`the dog name is ${this.name}
and the dog age is ${this.age}`);
    }
}

class Cat
{
    constructor(name,age,color)
    {
        this.name = name;
        this.age = age;
        this.color = color;
    }

    details()
    {
        console.log(`the dog name is ${this.name}
and the dog age is ${this.age}`);
    }
}

// create a object
const sm = new Dog('ball kama',24);
sm.details();

// cat
const catt = new Cat('pussy',47);
catt.details();