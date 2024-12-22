class Animal {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
        
        
    }
}

const HacerSonido = () => {
    console.log("El animal hace un sonido");
}

//Export la clase  Animal
module.exports = Animal;
