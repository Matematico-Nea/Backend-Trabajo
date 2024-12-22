const Empleados = require("./Empleado")

class EmpleadoTiempoCompleto extends Empleados{
    constructor(nombre, edad, salario, sueldoPorHora) {
        super(nombre, edad, salario,sueldoPorHora);
        }
        falto = false
        horasfaltadas = ''

        diasFaltados(){
            if (falto == true) {
                horasfaltadas = parseInt()
        }
        else {
            console.log("La persona tiene todas las horas completas")
        }
    }
        calcularSueldo(){
            const horasCompletas = 56 ;
            if (falto === true ) {
                horasCompletas = 56 - horasfaltadas
            }
            this.salario=this.sueldoPorHora * horasCompletas;
        }
}
class EmpleadoTiempoParcial extends Empleados{
    constructor(nombre, edad, salario, sueldoPorHora, horasTrabajadas) {
        super(nombre, edad, salario, sueldoPorHora);
        return this.sueldoPorHora * horasTrabajadas;
}
}
const empleados = [
    new EmpleadoTiempoCompleto("Juan", 30, 1000, 20),
    new EmpleadoTiempoCompleto("Maria", 25, 1200, 25),
    new EmpleadoTiempoParcial("Pedro", 35, 1500, 30, 15)
    ];
function mostrarSueldos(empleados){
    empleados.forEach(empleado => {
        if (empleado instanceof EmpleadoTiempoCompleto ){
            console.log(`El sueldo de ${empleado.calcularSueldo} es $${empleado.calcular}`)
        }
        else {
        console.log(`${empleado.nombre}: ${empleado.calcularSueldo(20)} (Medio Tiempo)`);
        }
    });
}