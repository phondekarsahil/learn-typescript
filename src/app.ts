interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void,
    spend(a: number): number;
}

const me: IsPerson = {
    name: "ds", 
    age: 25, 
    speak(text: string): void {
        console.log(text)
    },
    spend(amount: number): number {
        return amount;
    }, 
}


import {Invoice} from './classes/Invoice.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber)
})



const inv1 = new Invoice("Sahil", "Work", 90);
console.log(inv1.format());

let invoices: Invoice[] =  []