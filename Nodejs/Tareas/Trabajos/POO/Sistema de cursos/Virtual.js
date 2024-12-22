const Cursos = require("./Cursos");

class CursosVirtuales extends Cursos {
    constructor(nombreCurso,Plataforma){
        super(nombreCurso);
        this.Plataforma = Plataforma;
    }
    
}