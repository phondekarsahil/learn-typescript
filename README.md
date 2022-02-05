# TypeScript
## Introduction
___
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
___
* We need to install `TypeScript` compiler on our computer.
* This is something that compiles `TypsScript` code into regular `JavaScript`, because browsers do not understand `TypeScript`.
* `TypeScript` is just a language that makes things cleaner and easier for us during development, but when you go to deploy your code to the web it has to be compiled down into regular `JavaScript` first of all.

```
npm install -g typescript
```