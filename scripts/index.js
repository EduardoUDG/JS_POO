import Course from "./classes/Course.js";
import Student from "./classes/Student.js";
import Proffesor from "./classes/Proffesor.js";


// const html = new Course('HTML desde cero', 'https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png', 10)
// const css = new Course('CSS desde cero', 'https://edteam-media.s3.amazonaws.com/courses/big/daa72e4e-c5d0-406e-9f6d-01e646bf719b.png', 8)

const elem = document.getElementById('cursos')

function render(ObjLesson) {
    const son  = document.createElement('div')
    son.classList.add('card')
    son.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${ObjLesson.getPosts()}" />
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${ObjLesson.getName()}</h3>
        <div class="t5 s-mb-0 s-center">
            <span class="small"># de clases: ${ObjLesson.getLessons()}</span>
        </div>
    </div>     
    `;
    elem.appendChild(son) 
}

const form = document.getElementById('formCursos')

form.addEventListener('submit', event => {
    event.preventDefault()
    const target = event.target;
    let name     = target.nombreCurso.value 
    let picture  = target.nombrePicture.value 
    let lessons  = target.nombreLessons.value

    const course = new Course(name, picture, lessons)
    render(course)
    form.reset()
}); 


const professor = new Proffesor('Alfredo', 'Gutierres', 'Alfredo@gmail.com', true, 10)

const student1 = new Student('Jordi', 'BB', 'Jordi@gmail.com', true, ['HTML', 'CSS'])
const student2 = new Student('Angel', 'LL', 'Angel@gmail.com', true, ['JS', 'PY'])

const html = new Course('HTML desde cero', 'https://edteam-media.s3.amazonaws.com/courses/big/26557907-0555-427e-a40c-6ff207f98d72.png', 10)

html.setInscribed([...html.getInscribed(), student1])
html.setInscribed([...html.getInscribed(), student2])
console.log(html)

//* Crear un formulario para crear Usuarios
//* Un listado para cear un profesor o usuario
