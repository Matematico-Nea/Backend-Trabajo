const Bibloteca = require("./Bibloteca");

class LibroDigital extends Bibloteca{
    constructor(titulo, autor,precio,tamañoEnGB,){
        super(titulo, autor);
        this.precio = precio;
        this.tamañoEnGB = tamañoEnGB;
        this.formato = formato;
    }
    libnrosDigitales = []
    agregarLibros(){
    this.libnrosDigitales.push( libro = new LibroDigital());
}

}


