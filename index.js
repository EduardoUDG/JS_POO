class User {
    constructor(name, age, email, status) {
        this.name = name,
        this.age = age,
        this.email = email,
        this.status = status
    }
    presentarse() {
        return `Hi,  I'm ${this.name} y tengo ${this.age}`
    }
    setName(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
};

//* Herencia
class Profesor extends User{
    constructor(name, age, email, status, cursosDictados, calificacion) {
        super(name, age, email, status)
        this.cursosDictados = cursosDictados
        this.calificacion = calificacion
    }
};

class Alumno extends User{
    constructor(name, age, email, status, cursosTomados) {
        super(name, age, email, status, cursosTomados)
        this.cursosTomados = cursosTomados
    }
};
 

const lalo = new Alumno('lalo', 20, 'lalo@gmail.com', true, ['HTML', 'CSS'])
const samuel = new Profesor('Samuel', 48, 'samuel@gmail.com', true, ['Laravel', 'PHP'], 9)
console.log(lalo)
console.log(samuel.presentarse())