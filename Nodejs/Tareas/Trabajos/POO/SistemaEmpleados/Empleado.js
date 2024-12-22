class Empleados {
    constructor(nombre,edad,salario,sueldoPorHora){
        this.nombre = nombre;
        this.sueldoPorHora = sueldoPorHora;
        this.edad = edad;
        this.salario = salario;                                             
    }

    calcularSueldo(horasTrabajadas){
        return this.sueldoPorHora * horasTrabajadas;
    }
}
module.exports = Empleados;
