// let greet: Function;

let greet: (a: string, b: string) => void

greet = (x: string, y: string) => {
  console.log(x, y)
}

let calc: (a: number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if(action === 'add') {
      return num1 + num2;
    }
    return num1 - num2;
}