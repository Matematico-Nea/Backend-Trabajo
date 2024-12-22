const Animal = require('/Animal');
class Perro extends Animal{
    constructor(nombre,edad){
        super(nombre,edad);
    }
    hacerSonido(){
        console.log(' El sonido del perro es Woof');
    }
}
const perroEjemplo = new Perro('Bobby', 3);
console.log(`El sondio de ${perroEjemplo} es ${this.hacerSonido}`)
// Exportar la clase Animal 
module.exports = Perro;