let greet = () => {
  console.log("Hello World");
}

const add = (a: number, b: number, c?: number|string) => {
  return a+b;
}

add(5, 7);