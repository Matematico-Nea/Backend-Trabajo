// Importar la clase Perro
const Perro = require("./ProjectosAlexandra/Trabajos/Clases-Herencia/Animal/Perro.js");
const Perro1 = require("./ProjectosAlexandra/Trabajos/Clases-Herencia/Animal/Perro1.js")

// Crear una instancia de  Perro
let miPerro = new Perro ("Fido",  3, "Rotwiler");
let miPerro1 = new Perro1 ("Sultan",45 , "chiguaga"); 
 // Llamar el metodo hacer Sonido 
 miPerro.hacerSonido();
 miPerro1.hacerSonido();

 