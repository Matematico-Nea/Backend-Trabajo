class Empleado {
    constructor(nombre, edad, salario) {
        this.nombre = nombre;
        this.edad = edad;
        this.salario = salario;
    }
    obtenerDetalles(){
        return `Nombre: ${this.nombre}, Salario: ${this.salario}`;
    }
}
module.exports = Empleado;