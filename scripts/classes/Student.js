import User from "./User.js";

export default class Student extends User {
    constructor(name, lastName, email, status, coursesTaken) {
        super(name, lastName, email, status)
        this.coursesTaken = coursesTaken
    }

    setCoursesTaken(coursesTaken) {
        this.coursesTaken = coursesTaken
    }
    getCoursesTaken() {
        return this.coursesTaken
    }
};