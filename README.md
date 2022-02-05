# TypeScript
## Introduction

* `TypeScript` is a programming language which can be used as an alternative to `JavaScript`.
* It is actually known as superset of `JavaScript` language, meaning that it basically extends the language with new features and syntax.
* So it can do all the things that `JavaScript` can do but it also comes with extra features and a new syntax to boot as well.
* Browsers, by default do not understand TypeScript like they do `JavaScript`. So when we write `TypeScript`, we then have to compile it down into `JavaScript` in order for the browsers to understand it.
* `TypeScript` allows us to use `strict` types. That means, if I declare a variable in `TypeScript` to be a certail type like a `number`, I then cannot change that type later, running that variable to a `string` or `boolean`.
* Due to this the error checking process and debugging of our code becomes a bit easier and it also forces us to write cleaner and better code that is less prone to errors.
* In contrast to that `JavaScript` uses dynamic types where variables can change tyoes at any point and that could potentially lead to errors.
* We can also use modern features that are seen in later versions of `JavaScript` that might not be fully supported directly in browsers. (Eg. Arrow Functions, `let`, `const`, destructuring etc)
* This is similar to `Babel` compiler which allows you to use modern `JavaScript` features.
* Finally `TypeScript` gives extra features that dont appear in `JavaScript`. Things like `generics`, `interfaces`, `tuples`, etc.

## Setup

* We need to install `TypeScript` compiler on our computer.
* This is something that compiles `TypeScript` code into regular `JavaScript`, because browsers do not understand `TypeScript`.
* `TypeScript` is just a language that makes things cleaner and easier for us during development, but when you go to deploy your code to the web it has to be compiled down into regular `JavaScript` first of all.

```
npm install -g typescript
```

## Compiling TypeScript

* Now as we have `typescript` installed on our computer we can create some typescript and compile it down into javascript.
* I have added the `index.html` which will use the `style.css` file for css styling and the `sandbox.js` file as a script file which is used in `index.html`. 
* Also I have created a `sandbox.ts` file where we can write the typescript code
* To convert ts file into js we can use the following command. This will update the `sandbox.js` file with compiled ts code from `sandbox.ts` file or create a new `sandbox.js` file if no file is present
```
tsc sandbox.ts --outFile sandbox.js
```
* If the name of the output file is same as the name of the typescript file you can use the shorthand command as follows.
```
tsc sandbox.ts
```
* We can also add a watch flag `-w` to continuously listen to the changes made to the sandbox.ts file and compile it down to javascript file.
```
tsc sandbox.js --outFile sandbox.js -w
```

## Types Basics

* The main fundamental difference between typescript and javascript is that typescript uses strict types and javascript does not.
* That means if we define a variable as a string, then in typescript it will always be string and it cannot be changed later. And same will be true for any other types like numbers, booleans, objects, arrays.
* The way we declare variables in typescript is same as in javascript, using either let, const or var
```
let character = "naruto";
let age = 13;
let isBlackBelt = false;

character = 13; // not allowed
character = "kakashi"; // allowed
age = "old"; // not allowed
age = 25; // allowed
``` 
* We don't have to specifically say the variable type. TypeScript uses what's known as `Inference`, which infers the type of a variable based on the value we assign it
* We can also explicitly define the data type that needs to be passed to the function by mentioning the data type in the function parameters as follows 
```
const circ = (diameter: number) => {
    return diameter * Math.PI;
} 
```

## Objects & Arrays
* Suppose we define an array as follows:
```
let array1 = ["naruto", "kakashi", "sakura"];
```
* Here TypeScripts infers the data type of `array1` as string[] and allows only string values in that array
* Also we cannot change the data type of `array1` to any other type such as `string`, `boolean`, `number`, etc
* Also suppose we define an array of mixed data types as follows:
```
let array2 = ["naruto", 2, "sakura", 4];
```
* Here TypeScripts infers the data type of `array2` as `(string|number)` and allows only string and number values in that array.
* For Objects
```
let ninja = {
    name: 'Mario',
    belt: 'black',
    age: 25
}
ninja.age = 40; //allowed
ninja.age = "old" // not allowed
```
* So here the properties of an object also infers the data type from the initial assignment and cannot be changes later on.
* Also we can't change the structure of the object once it is assigned.
```
ninja = {
    name: "Naruto",
    belt: "Red",
} // not allowed as property age is missing
ninja = {
    name: "kakashi",
    belt: "black",
    age: 40,
    skill: "sharingan"
} // not allowed as property skill is not in initial structure
```
