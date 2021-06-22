import User from "./User.js";

export default class Proffesor extends User {
    constructor(name, lastName, email, status, qualification) {
        super(name, lastName, email, status)
        this.qualification = qualification
    }

    setQualitification(qualification) {
        this.qualification = qualification
    }
    getQualification() {
        return this.qualification
    }
};