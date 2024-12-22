const Animal = require("../Zoologico/Animal");

class Gato extends Animal {
    constructor(nombre,edad,raza){
        super(nombre,edad,raza);

    }
    maullar(){
        console.log("El gato dice miau");
    }

}