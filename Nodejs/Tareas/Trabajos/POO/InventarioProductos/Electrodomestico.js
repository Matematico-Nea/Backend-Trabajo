const Productos = require('./Producto')

class Electrodomestico extends Productos {
    constructor(nombre,precio,cantidad,marca){
        super(nombre,precio,cantidad);
        this.marca = marca;
    }
    
}
const producto =  [
    new Electrodomestico("Arroz",2.5,5),
    new Electrodomestico("Lavadora", 500, 1, "Samsung"),
];

function listarProductosBajoStock(producto, umbral = 10){
    return producto.filter((producto) => producto.cantidad <= umbral);
}

