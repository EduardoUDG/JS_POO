import Course from "./classes/Course.js";
import Student from "./classes/Student.js";
import Proffesor from "./classes/Proffesor.js";

const elem = document.getElementById('cursos')
const listUsers = document.getElementById('users')
const form = document.getElementById('formCursos')
const formStudents = document.getElementById('formStudents')

form.addEventListener('submit', event => {
    event.preventDefault()
    const target = event.target;
    let name = target.nombreCurso.value
    let picture = target.nombrePicture.value
    let lessons = target.nombreLessons.value

    const course = new Course(name, picture, lessons)
    render(course)
    form.reset()
});

formStudents.addEventListener('submit', event => {
    event.preventDefault()
    const target = event.target;
    let name = target.nombreEstudiante.value
    let lastName = target.apellidoEstudiante.value
    let email = target.correoEstudiante.value

    const student = new Student(name, lastName, email)
    renderStu(student)
    formStudents.reset()
});




function render(course) {
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${course.getPosts()}" />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${course.getName()}</h3>
        <div class="t5 s-mb-0 s-center">
            <span class="small"># de clases: ${course.getLessons()}</span>
        </div>
    </div>     
    `;
    elem.appendChild(div)
}

function renderStu(student) {
    const div = document.createElement('li')
    div.innerHTML = `${student.getName()}`;
    listUsers.appendChild(div)
}












const professor = new Proffesor('Alfredo', 'Gutierres', 'Alfredo@gmail.com', true, 10)

const student1 = new Student('Jordi', 'BB', 'Jordi@gmail.com', true, ['HTML', 'CSS'])
const student2 = new Student('Angel', 'LL', 'Angel@gmail.com', true, ['JS', 'PY'])

const html = new Course('HTML desde cero', 'https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png', 10)

html.setInscribed([...html.getInscribed(), student1])
html.setInscribed([...html.getInscribed(), student2])
console.log(html)


//* Crear un formulario para crear Usuarios
//* Un listado para cear un profesor o usuario
