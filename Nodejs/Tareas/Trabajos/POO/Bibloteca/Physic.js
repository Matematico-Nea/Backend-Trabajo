const Bibloteca = require("./Bibloteca");

class Physic extends Bibloteca{
    constructor(titulo, autor,precio,Hojas,){
        super(titulo, autor,precio);
        this.Hojas = Hojas;
    }
    libnrosFisicos = []
    agregarLibros(){
        this.libnrosFisicos.push( libro = new Physic());
    }
}