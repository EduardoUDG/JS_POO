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
 

const person = new User('Lalo', 20, 'lalo@gmail.com', true)
person.setName('Pepe')
console.log(person.getName())
