"use strict";
const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    console.log(input);
});
let newCharacter = "naruto";
let age = 13;
let isBlackBelt = false;
// newCharacter = 13; // not allowed
newCharacter = "kakashi"; // allowed
// age = "old"; // not allowed
age = 25; // allowed
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(5));
// arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[1] = 3;
let numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
let mixed1 = ['ken', 4, 'chun-li', 8, 9];
mixed1.push('ryu');
mixed1.push(10);
mixed1[0] = 3;
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
};
// lesson 5
let character1 = 'mario';
let age1;
let isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
let ninjas = [];
ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);
// union types
let mixed = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);
let uid;
// objects
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
// lesson 6
let age6 = 25;
age6 = true;
console.log(age6);
age6 = 'hello';
console.log(age6);
age6 = { name: 'luigi' };
console.log(age6);
let mixed6 = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed6);
let ninja6;
ninja6 = { name: 'yoshi', age: 25 };
console.log(ninja6);
ninja6 = { name: 25, age: 'yoshi' };
console.log(ninja6);
