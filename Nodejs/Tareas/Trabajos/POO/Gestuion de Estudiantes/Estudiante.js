const  Persona = require("./Persona")

class Estudiante extends Persona {
    constructor(nombre, edad ){
        super(nombre, edad);
        this.calificaciones = []
    }
    agregarCalificaciones(calificaciones){
        this.calificaciones.push(calificaciones)
    }
    calcularPromedio (){
        if (this.calificaciones.length === 0) return 0;
        const suma = this.calificaciones.reduce((a,b) => a + b, 0);
        return suama /this.calificaciones.length;
    }
}

const estudiante1 = new Estudiante("Juan", 20);
estudiante1.agregarCalificaciones(10);
estudiante1.agregarCalificaciones(20);
estudiante1.agregarCalificaciones(10);
console.log(esrudiante1.calcularPromedio()); //8.33
