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

const inv1 = new Invoice("Sahil", "Work", 90);
console.log(inv1.format());

let invoices: Invoice[] =  []