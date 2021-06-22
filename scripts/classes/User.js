export default class User {
    constructor(name, lastName, email, status) {
        this.name = name,
        this.lastName = lastName,
        this.email = email,
        this.status = status
    }

    setName(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
    setLastName(lastName) {
        this.lastName = lastName
    }
    getLastName() {
        return this.lastName
    }
    setEmail(email) {
        this.email = email
    }
    getEmail() {
        return this.email
    }
    setStatus(status) {
        this.status = status
    }
    getStatus() {
        return this.status
    }
};