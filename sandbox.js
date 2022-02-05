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
var mixed = ['ken', 4, 'chun-li', 8, 9];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
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
