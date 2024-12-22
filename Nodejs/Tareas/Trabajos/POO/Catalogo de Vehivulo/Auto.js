const Vehiculo = require("./Vehiculo");

class Auto extends Vehiculo {
    conducir (){
        console.log(`Este carro conduce con esta marca ${this.marca} y con este modelo ${this.modelo}`); 
    }
}

const Vehiculo = [
    new Auto("Toyota","Reloj",2013),
    new Auto("Ford","Mustang",2015),
]