const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    console.log(input);
});

let newCharacter = "naruto";
let age = 13;
let isBlackBelt = false;

newCharacter = 13; // not allowed
newCharacter = "kakashi"; // allowed
age = "old"; // not allowed
age = 25; // allowed