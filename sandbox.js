var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var newCharacter = "naruto";
var age = 13;
var isBlackBelt = false;
// newCharacter = 13; // not allowed
newCharacter = "kakashi"; // allowed
// age = "old"; // not allowed
age = 25; // allowed
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(5));
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3);
// names[1] = 3;
var numbers = [10, 20, 12, 15];
numbers.push(25);
// numbers.push('shaun');
// numbers[0] = 'shaun';
var mixed1 = ['ken', 4, 'chun-li', 8, 9];
mixed1.push('ryu');
mixed1.push(10);
mixed1[0] = 3;
// objects
var ninja = {
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
    age: 40
};
// lesson 5
var character1 = 'mario';
var age1;
var isLoggedIn;
// age = 'luigi';
age = 30;
// isLoggedIn = 25;
isLoggedIn = true;
// arrays
var ninjas = [];
ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);
// union types
var mixed = [];
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);
var uid;
// objects
var ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
var ninjaTwo;
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };
