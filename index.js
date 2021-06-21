
function User(name, age, email, status) {
    this.name = name,
    this.age = age,
    this.email = email,
    this.status = status
}

const person = new User('Lalo', 20, 'lalo@gmail.com', true)
console.log(person) 