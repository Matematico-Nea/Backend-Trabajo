const Animal = require("./Animal")
class Lion extends Animal {
    constructor() {
        super();
        this.name = "Lion";
    }
    rugir(){
        console.log(`${this.name} ruge:¡ROARRRRR!`)
    }}


class Elefante extends Animal {
    constructor() {
        super();
        this.name = "Elefante";
    }
    trumpet(){
        console.log(`${this.name} toca la trompeta:¡TOOOOOOT!`)

}
}
class Tiger extends Animal {
    constructor() {
        super();
        this.name = "Tiger";
    }
    rugir(){
        console.log(`${this.name} ruge:¡ROARRRRR!`)
    }
}


const animales = 
[new Lion("Micho","Canino"),
    new Elefante("Beto","Elefante"),
    new Lion("Tito","Canino"),
    new Elefante("Luis","Elefante"),
    new Tiger("Tito","Felino"),
];

function hacerSonidosAnimales(animales){
    animales.forEach(animal => {
        if (
            animal instanceof Lion 
            || animal instanceof Tiger 
            ) {animal.rugir();}
        else if (animal instanceof Elefante) 
            {animal.trumpet()}
});
console.log(`estos son  ${hacerSonidosAnimales}`)
}