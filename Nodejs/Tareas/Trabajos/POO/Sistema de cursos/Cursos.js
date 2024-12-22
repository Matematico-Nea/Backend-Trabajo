class Cursos {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];    
    }

agregarEstudiantes(estudiante){
    this.estudiantes.push(estudiante);
}
calcularPromedioCursos(){
    if (this.estudiantes.length === 0) return 0 ;
    const promedios = this.estudiantes.map(est => est.calcularPromedioCursos());
    return promedios.reduce((a, b) => a + b, 0) / promedios.length ;

}

}
module.exports = Cursos;