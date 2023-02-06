class Friends {
    constructor(name, surname, job) {
        this.name = name;
        this.surname = surname;
        this.job = job;
        
    }    
}

function sayHello(name, surname, job){
    console.log(this)
    return `Hi my name is ${this.name} ${this.surname} and I work as a ${this.job}`
}

let gurgen = new Friends ("Gurgen", "Harutyunyan", "programmer");


gurgen.greeting = sayHello;

console.log(gurgen.greeting());

let gevorg = new Friends ("Gevorg", "Gevorgyan", "senior developer");
gevorg.greeting = sayHello;
console.log(gevorg.greeting());



let artyom = new Friends ("Artyom", "Hakobyan", "musician");
artyom.greeting = sayHello;

console.log(artyom.greeting());






