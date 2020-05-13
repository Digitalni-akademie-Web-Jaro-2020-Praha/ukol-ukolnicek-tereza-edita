'use strict'

console.log('funguju!')

let tasks = []
let toDo = document.querySelector('.todo__tasks')

const updateTasks = () => {
  toDo.innerHTML = ''
  for (let i = 0; i < tasks.length; i++) {
    toDo.innerHTML += `
    <div class="task">
      ${tasks[i]}
      </div>`
  }
}

const btnAdd = document.querySelector('.btn-add')
btnAdd.addEventListener('click', () => {
  let newTask = document.querySelector('.new-task')
  if (newTask.value === '') {
    return null
  } else tasks.push(newTask.value)
  updateTasks()
  newTask.value = ''
})
