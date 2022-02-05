type stringOrNumber = string | number
type objWithName = {name: string, uid: stringOrNumber}

let uid: stringOrNumber

const greet = (user: objWithName) => {
    console.log(user);
}