const  Transporte = require ("./Transporte.js")

class Carro extends Transporte {
    constructor(capacidad,tipoCombustible,pago,){
        super(capacidad,tipoCombustible)
        this.pago = pago = true


    }
    Arrancar(){
        console.log(`el ${this} Es autobus arranca  el motor: RRRRRrrr`)
    }
    

}
class Bici extends Transporte {
    constructor(capacidad,tipoCombustible,pago,){
        super(capacidad,tipoCombustible)
        this.pago = pago = false


    }
    Arrancar(){
        console.log(`el ${this} Es autobus arranca  el motor: RRRRRrrr`)
    }
}