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
  let newTask = document.querySelector('.new-task')
  if (newTask.value === '') {
    return null
  } else tasks.push(newTask.value)
  updateTasks(tasks)
  newTask.value = ''
})
