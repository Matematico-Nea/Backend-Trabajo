const Empleado = require("./Empleado");

class Gerente extends Empleado {
    constructor(nombre, salario,departamento){
        super(nombre,salario);
        this.departamento  = departamento;
    }

    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Departamento: ${this.departamento}`;
    }
}
// Ejemplo de uso Ejercicio 4
const empleado = new Empleado("Juan Pérez", 50000);
console.log(empleado.obtenerDetalles());
// Imprimirá: Nombre: Juan Pérez, Salario: 50000

const gerente = new Gerente("María García", 80000, "Ventas");
console.log(gerente.obtenerDetalles());
// Imprimirá: Nombre: María García, Salario: 80000, Departamento: Ventas

module.exports = Gerente