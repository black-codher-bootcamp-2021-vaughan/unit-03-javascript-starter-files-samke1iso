// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

// **************************************TASK 1*********************************************************
let a = 5;
const b = 10;
let c = a + b;
console.log(c);

// **************************************TASK 2*********************************************************

function sayHey () {
    console.log('How are you?');
    console.log('Goodbye');
}
sayHey();

function conversation () {
    sayHey();
    console.log('How are you?');
    console.log('Goodbye');
}
conversation();

// **************************************TASK 3*********************************************************

function futureAge (name, age) {
    const answer = age + 5
    return "Hi " + name + "! " + "In 5 years you will be: " + answer 
}
console.log(futureAge(" Samkeliso", 24));
