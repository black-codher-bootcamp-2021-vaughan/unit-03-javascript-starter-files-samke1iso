// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14

// **************************************TASK 1*********************************************************
console.log("hello everyone")

// INTERACTING WITH THE DOM

console.log(document.querySelector('.about').innerHTML);
console.log(document.querySelectorAll('.about'))

// Learning functions

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


