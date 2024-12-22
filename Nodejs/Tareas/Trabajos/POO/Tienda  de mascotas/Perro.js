const Mascotas = require("./Mascota");

class perro extends Mascotas {
    constructor(nombre, edad, raza ){
        super(nombre, edad);
        this.raza = raza;
    }
    ladrar(){
        console.log("El perro hace woah")
    }
}
