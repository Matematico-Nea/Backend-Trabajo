 const animal = require('./Animal');
 class Perro1 extends  Animal {
    constructor (nombre, edad, raza, color) {
        super(nombre,edad);
        this.raza = raza;
        this.color = color;
 }
 hacerSonido(){
    console.log("El  perro hace un ladrido");

 }
}

module.exports = Perro1;
