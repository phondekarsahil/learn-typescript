var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    console.log(input);
});
var newCharacter = "naruto";
var age = 13;
var isBlackBelt = false;
newCharacter = 13; // not allowed
newCharacter = "kakashi"; // allowed
age = "old"; // not allowed
age = 25; // allowed
