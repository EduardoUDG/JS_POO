export default class Course {
    constructor(name, posts, lessons){
        this.name = name,
        this.posts = posts,
        this.lessons = lessons,
        this.inscribed = []
    }
    
    setName() {
        this.name = this.name
    }
    getName() {
        return this.name
    }
    setPosts(posts) {
        this.posts = posts
    }
    getPosts() {
        return this.posts
    }
    setLessons() {
        this.lessons = this.lessons
    }
    getLessons() {
        return this.lessons
    }
    setInscribed(inscribed) {
        this.inscribed = inscribed
    }
    getInscribed() {
        return this.inscribed
    }

};
