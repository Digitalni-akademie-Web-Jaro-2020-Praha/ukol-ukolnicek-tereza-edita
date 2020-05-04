'use strict'

console.log('funguju!')

let tasks = []
const toDo = document.querySelector('.todo__tasks')

const updateTasks = () => {
  toDo.innerHTML += `
  <div class="task">
    ${tasks[tasks.length - 1]}
    </div>`
}

const btnAdd = document.querySelector('.btn-add')
btnAdd.addEventListener('click', () => {
  const newTask = document.querySelector('.new-task').value
  tasks.push(newTask)
  updateTasks(tasks)
})
