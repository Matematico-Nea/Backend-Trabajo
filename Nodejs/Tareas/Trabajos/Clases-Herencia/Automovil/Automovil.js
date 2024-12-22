class Automovil {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;

    }
}

const Arrancar= () => {
    console.log("El auto arrancó");

}

function coche(marca,modelo){
    vehiculo.call(this,maarca);
    this.marca = marca;

}
Coche.Prototype = Object.create(Vehiculo.Prototype);
Coche.Prototype = Object.create(Vehiculo.Prototype);
Coche.Prototype.mostrarInfo = function(){
    console.log(`El coche es de la marca ${this.marca}, Modelo: ${this}`)
    }
//La clase Automovil tiene un método llamado Arrancar y la exportamos
const miCoche = new Coche("Toyota", "Corolla");
miCoche.Arrancar();
miCoche.mostrarInfo();
module.exports = {Automovil, Arrancar};