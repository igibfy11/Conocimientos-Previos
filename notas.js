
class Persona {
    constructor (nombre) {
        this.nombre = nombre //,
        // this.genero = genero
    }
}

class Estudiante extends Persona {
    constructor (nombre, identificador) {
        super (nombre),
        this.identificador = identificador
    }

    contarRegulares() {
    }
}

class Materia {
    constructor (identificador, nombre) {
        this.identificador = identificador,
        this.nombre = nombre
    }
}

class Genero {
    constructor (identificador, nombre) {
        this.identificador = identificador,
        this.nombre = nombre
    }
}

class Notas {
    constructor (identificadorEst, identificadorMateria, nota) {
        this.identificadorEst = identificadorEst,
        this.identificadorMateria = identificadorMateria,
        this.nota = nota
    }

    rangoDeNotas(){
        if (this.nota <= 4.5){
            console.log("Su calificación es Excelente")
        } else if (this.nota <= 3.5) {
            console.log("Su calificación es Sobresaliente")
        } else if (this.nota <= 2.5) {
            console.log("Su nota es Regular")
        } else if (this.nota <= 1) {
            console.log("Su nota es Insuficiente")
        } else {
            console.log("Su nota es Deficiente")
        }
    }
}


// Crear estudiantes
const est1 = new Estudiante ("Armando", 1)
const est2 = new Estudiante ("Nicolas", 2)
const est3 = new Estudiante ("Daniel", 3)
const est4 = new Estudiante ("Maria", 4)
const est5 = new Estudiante ("Marcela", 5)
const est6 = new Estudiante ("Alexandra", 6)

// Crear materias
const mat1 = new Materia (1, "Quimica")
const mat2 = new Materia (2, "Idiomas")
const mat3 = new Materia (3, "Historia")

// Crear generos
const gen1 = new Genero (0, "m")
const gen2 = new Genero (1, "f")