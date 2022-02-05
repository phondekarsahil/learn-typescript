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

## Explicit and Union Types

* Currently when we write our variables and assign them values, typescript automatically infers the variable type based on the value we give it.
* But sometimes we might just want to initialize a variable without giving it a value so then it can't really infer its type and we can give it any value in the future.
* But we can get around this by explicitly giving the variable a type.
```
let character: string;
let age: number;
let isLoggedIn: boolean;

age = "old"; // not allowed
age = 45; // allowed
```
* For arrays:
```
let ninjas: string[] = []; // can be array of only string
// Note: It is best to initialize an array with empty []. 
```
* If we want to initialize an array with mixed data types we can use the `Union Types`
* A Union Type is basically our way of saying it could be one of two or one of many types
```
let mixed: (string|number)[] = [];
mixed.push("Hello"); //Allowed
mixed.push(3); // Allowed
mixed.push(false); // Not allowed
```
* We can also use Union Types on normal variables
```
let uid: string|number;
uid = 323 // allowed
uid = "abc" // allowed
uid = false; // not allowed
```
* For Objects:
```
let ninja1: object;
ninja1 = {
    name: 'Mario',
    belt: 'black',
    age: 25
} // allowed

ninja1 = [] // allowed Because array also is type of object
```
* We can also define objects more specifically as follows:
```
let ninja2: {name: string, age: number, beltColor: string};

ninja2 = {} //not allowed
ninja2 = {
    name: 'Mario',
    age: 25,
    beltColor: 'black',
} // allowed
```

## Dynamic (any) Types

* We use the `any` type in typescript to say that this variable would be any type in the future and can also change type in the future
```
let age: any = 25;
age = true; // allowed
age = "old"; // allowed
age = {name: 'kakashi'};
```
* So we can change the variables in many different types. This though basically reverts the typescript to javascript and rips out most of the benefits of typescript. So it is better to use this only if required.

## Better Workflow and tsconfig

* When you are creating a project thats a bit complex, you might have several typescript files, several javascript files and other files as well, and typically you don't always want them mixed together. You might want to seperate them into different folders.
* So typically in any project structure you will find a `public` folder which contains all the public files that we deploy to some web server at the end. It may containg the `index.html` file, the javascript file and css styling file.
* Also there will be a `src` folder where our source code goes, like the typescript files and the stuffs we dont need to deploy to the web server.
* So this is a more typical workflow
* There is an easier way to manage all the typescript compilation in a project structure and that is using a `tsconfig` file. Use the following command to create a `tsconfig.json` file
```
tsc --init
```
* We can find various `compilerOptions` such as `target` which is the output version of the javascript file
* Other options that we need to configure are `rootDir` and `outDir`
```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",  
        "rootDir": "./src", 
        "outDir": "./public",
    }
}
```
* Now as we have said all our configuration in the `tsconfig.json` file we can just run the command `tsc` and it will compile all the files from folder specified in `rootDir` to javascript and place it in the folder specified in `outDir`
```
tsc
```
* To include the only the files from the `src` folders we add one more property called `include` in the `tsconfig.json` file. It will contain the array of string of folder names that we need to compile down to javascript
```  
{
    "compilerOptions": {
        ...
        "target": "es5",
        "module": "commonjs",  
        "rootDir": "./src", 
        "outDir": "./public",
    },
    "include": ["src"]
}
```

## Function Basics (and void)

* To explicitly define a variable as a function in typescript we can use `Function` type
```
let greet: Function;

greet = "some string"; // not allowed
greet = () => {console.log("Hello")} // allowed
```
* Defining function parameter types
```
const add = (a: number, b: number) => {
  return a+b;
}
```
* We can define optional parameters by using `?` after the variable declaration. If not passed any value in optional parameters it's value will be `undefined`
```
const add = (a: number, b: number, c?: number|string) => {
  return a+b;
}
```
* If we define initial value to the optional parameter, we dont need to use `?`.
```
const add = (a: number, b: number, c: number = 10) => {
  return a+b+c;
}
```
* Note: Always do your required parameter first and the the optional parameters
* We can also explicitly define the return type of the function or if we do not define the return type, it will automatically infer the return type based on the value returned.
```
const add = (a: number, b: number, c: number = 10): number => {
  return a+b+c;
}
```
* Return type of a function is `void` when the function don't actually return anything


## Type Aliases

* Typescript allows us to write our own type aliases, which we can define once and use at multiple places in our code.
```
type stringOrNumber = string | number
type objWithName = {name: string, uid: stringOrNumber}

let uid: string | number
// is same as
let uid: stringOrNumber

const greet = (user: {name: string, uid: string | number}) => {
    console.log(user);
}
// is same as
const greet = (user: objWithName) => {
    console.log(user);
}
```

## Function Signature

* When defining a function, or explicitly declaring a variable as a function we use `Function` type. But we can be more specific about the function type by using function signatures.
```
let greet1: Function;
let greet2: (a: string, b: string) => void;
let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if(action === 'add') {
      return num1 + num2;
    }
    return num1 - num2;
}
```

## The DOM and Type Casting

* For the most parts when we work with DOM in typescript it is the same as in javascript.
* Typecasting allow you to convert a variable from one type to another type or to specify the type of the variable explicitly.
```
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);
```

## Classes

* Class is basically an blueprint of an object.
```
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d:string, a: number){
        this.client = c;
        this.details = d;
        this.amount =  a;
    }

    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`;
    }
}
```
* Classes can be used to create objects as follows: 
```
const inv1 = new Invoice("Sahil", "Work", 90);
```
* Also classes can be used as Types for variables
```
// variable can contain only Invoice objects
let invoices: Invoice[] =  []
```
* By default all of the properties of a class are public, anyone can access and change these properties
* We can use access modifiers to limit the permission for properties of a object

## Public, Private and Readonly

* We can specify the access type of a property by using the access modifiers
* `public` - this is the default access modifier and we may or may not specify this
* `private` - we can access this property inside the class using `this`, but cant access it outside the class directly. We can read and change value of this property inside the class.
* `readonly` - we can read this property from outside and inside the class itself, but we can't change it 
```
class Invoice {
    readonly client: string;
    private details: string;
    public amount: number;

    constructor(c: string, d:string, a: number){
        this.client = c;
        this.details = d;
        this.amount =  a;
    }

    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`;
    }
}

const inv1 = new Invoice("Sahil", "Work", 90);
console.log(inv1.details); // not allowed
```
* When using access modifiers in constructors, it automatically creates these variables and assigns the parameters to the variables. 
```
 class Invoice {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`;
    }
}
```

## Modules

* In most of the larger applicataions typically it is easier to split our code in different modular files. This would make the project more structured and easier to read in the future.
* The best way we can do this in TypeScript by using `es6 module system`, where we can import and export things from different files when we need to.
* Modern browsers supports `es6` already in vanilla JavaScript. So we can use it in typescript as well.
* Only modern browsers supports this feature out of the box.
* Typescript does not compile the module system down into something older browsers understand as well.
* So it is recommended to use `es6 Module System` with modern browsers (such as chrome and firefox) only.
* If you are using `webpack` with your typescript project then you can side step that issue by bundling your code into one single file.
* The first thing we need to do before we start working with this module system is to update the `tsconfig.json` file. We need to change the `module` property to `es2015` ECMAScript 2015.
```
{
    "compilerOptions": {
        ...
        "module": "es2015
        "target": "es5",
        "module": "commonjs",  
        "rootDir": "./src", 
        "outDir": "./public",
    },
    "include": ["src"]
}
```
* Also we need to update the `index.html`. Firstly find the `script` tag referencing the javascript file we are generating and add property `type="module"`
```
<script type="module" src='app.js'></script>
```
* We can access different typescript files using the `export` and `import` keywords

**classes/Invoice.ts**
```
export class Invoice {

    constructor(    
        readonly client: string,
        private details: string,
        public amount: number
        ){}

    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`;
    }
}
```
* Note: While importing the ts file we use the extention as `.js` as in the end all the files are going to get compiled into js files.

**app.ts**
```
import {Invoice} from './classes/Invoice.js';
```
* Disadvantages of module system:
    
    1. Only modern browsers support this module system, so if a user is using an outdated browser or older browser, user can get error and it may not work.
    2. It doesn't bundle our code into single file.. The browser is still using the module system to load seperate files and make multiple requests

* To combat both of these downfalls you could throw webpack into the mix, that is going to buldle our code into a single file when its completed and that way we only have network request and all browsers are supported too.

## Interfaces

* Another tool that we can use in typescript that we can't in JavaScript is an interface.
* Interface allows us to enforce a certain structure of a class or an object.
* We can use it to describe what properties and what methods and what the types of those properties and return types of those methods are.
* It looks similar to a class but it is not a class. We cannot generate objects using interface.
```
interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(a: number): number;
}

const me: IsPerson = {
    name: "sahil", 
    age: 25, 
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        return amount;
    }, 
}
```
* We can also use interface as data type for object variables and it enforces that structure on that variable.

## Interfaces with Classes

* When using interfaces with classes we use `implements` keyword with the class declaration.

**HasFormatter.ts**
```
export interface HasFormatter {
    format(): string;
}
```
* Whichever class `implements` an `interface` must have the properties mentioned in that interface.

**Invoice.ts**
```
export class Invoice implements HasFormatter {
    constructor(    
        readonly client: string,
        private details: string,
        public amount: number
        ){}

    format() {
        return `${this.client} owes Rs ${this.amount} for ${this.details}`;
    }
}
```
* This ensures that every object we create using this class has the specified interface properties.
* Interface used as data type can also be used to indicate that the object of the class implements that interface. Only objects that implements that interface can be stored in that variable.
**app.ts**
```
let docOne: HasFormatter;

/* this verifies that the object of the class has implemented that interface */
docOne = new Invoice("Sahil", "Work", 250);
```

## Generics

* Generics allow us to create reusable blocks of code which can be used with different types.

```
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: "Sahil", age: 25})
console.log(docOne);
```

* In the above example we pass in an `object` as a parameter. And the problem here is that as we have not specified the properties of the object at function declaration, we can pass any different properties.
* Also when accessing these properties inside the function, we don't know what properties will be received in that function.
* We can combat this by using generics
```
const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
```
* In above example we define generic inside `<` `>` brackets. Mostly we use `T` as a generic name but it can be anything.
* So basically `<T>` this captures the `type` that is passed in the method call at run time, and we can use this `type` to define the data type of parameter in method.
* Also we can enforce that generic variable to extend certain type to ensure strict types
```
const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
```
* You can also be more specific about the extention
```
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}
```
* Using Generics with Interfaces
```
interface Resource {
    uid: number;
    resourceName: string;
    data: object
}
```
* If in above example if we are not sure of the type of `data` variable, we can use generics and pass in the type while creating the object
```
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T
}

const docOne: Resource<string> {
    uid: 1,
    resourceName: "person",
    data: "Sahil"
}

const docTwo: Resource<string[]> {
    uid: 1,
    resourceName: "shoppinglist",
    data: ["pen", "bread"]
}
```