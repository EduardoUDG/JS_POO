const User = {
    constructor(name, age, email, status){
        this.name = name,
        this.age = age,
        this.email = email,
        this.status = status
    }
};
 

const person = new User('Lalo', 'lalo@gmail.com', 20, true)
console.log(person) 