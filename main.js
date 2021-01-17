//Alert makes a pop for the given content inefficient

//console log important

// variable can be declared by
// var - global scope
// let - block scope
// const - block scope, constant value, intialize with a specific value
// use const until you know value of variable changes

// data types - string, numbers, null, undefined, symbol(es6 not used commonly)

// string - '' or "", const='name'

//const x=undefined

const name='John';
const arr= 'technology, computers, it, code';
const age=30;

console.log('My name is ' + name + ' and I am ' + age);

console.log(`My name is ${name} and I am ${age}`);

console.log(name.length);
console.log(name.substring(0,2).toUpperCase());

console.log(name.split(''));
console.log(arr.split(', ')); // can be used in database

const numbers= new Array(1,2,3,4,5);
console.log(numbers);

const fruits=['apple', 'oranges', 10, true];
fruits.push('mango');
fruits.unshift('good'); //in begining
fruits.pop();

// Array.isArray('') gives elememnt is in array or not
// Array.indexOf('') gives index
console.log(fruits);

const person={
    firstname: 'Satyam',
    lastname: 'Pandey',
    age: 21,
    hobbies:['movies', 'sports', 'cricket'],
    address:{
        street: 'lol',
        city: 'Mirzapur',
        state: 'UP'
    }
}

console.log(person);
console.log(person.firstname, person.lastname);
console.log(person.address.city);

person.email='p@gmail.com';

console.log(person);

const todos=[
    {
        id: 1,
        text:'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Wash clothes',
        isCompleted: false
    }
]

console.log(todos);
console.log(todos[1].text); 

const todosJSON= JSON.stringify(todos);
console.log(todosJSON);  // send this to server

//forEach, map, filter -> Higher order array method
todos.forEach(function(todo){
    console.log(todo.text);
});

const todosarr=todos.map(function(todo){
    return todo.text;
});

console.log(todosarr);

const todocompleted=todos.filter(function(todo){
    return todo.isCompleted==true;
}).map(function(todo){
    return todo.text;
});

console.log(todocompleted);

// conditionals 
// == compares only value whereas === compares value & data type
// use ===

const x='10';

if(x===10){
    console.log('X is 10 and its data type is integer')
}else if(x==10){
    console.log('x is 10');
}else{
    console.log('X is what');
}

const y= (x==10)?11:10;
console.log(y);

switch(y){
    case '11':
        console.log('Won');
        break;
    case '10':
        console.log('Lost');
        break;
    default:
        console.log('No idea')
        break;
}

function addnums(num1=0, num2=0){
    return (num1+num2);
}

console.log(addnums());

const multiply=(num1=1, num2=1)=>(num1*num2);


console.log(multiply(5));

//class in JS

class Person{
    constructor(firstName, lastName, dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

//Initiating an object of person
const person1=new Person('John', 'Doe', '4-5-1994');
const person2=new Person('Greg', 'Johnson', '5-8-1993');

console.log(person1.getBirthYear());
console.log(person1);

