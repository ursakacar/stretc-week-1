const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

loadEventListeners()

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks)
  form.addEventListener('submit', addTask)
  taskList.addEventListener('click', removeTask)
  clearBtn.addEventListener('click', clearTasks)
  filter.addEventListener('keyup', filterTasks)
}

function getTasks() {
  tasks = getTasksArray()

  tasks.forEach(function (task) {
    renderTask(task)
  })
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('add a task!')
    return
  }

  renderTask(taskInput.value)

  storeTaskInLocalStorage(taskInput.value)
  taskInput.value = '' // clear input

  e.preventDefault()
}

function storeTaskInLocalStorage(task) {
  tasks = getTasksArray()

  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('you sure you want to delete')) {
      e.target.parentElement.parentElement.remove()
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

function removeTaskFromLocalStorage(taskItem) {
  tasks = getTasksArray()

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getTasksArray() {
  let tasks
  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  return tasks
}

function clearTasks(e) {
  // we could also just simply call taskList.innerHTML = '', but it's better to removeChild

  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  clearTasksFromLocalStorage()
}

function clearTasksFromLocalStorage() {
  localStorage.clear()
}

function renderTask(task) {
  const li = document.createElement('li') //create li element
  li.className = 'collection-item' // add class
  li.appendChild(document.createTextNode(task)) // add text node and append to li
  const link = document.createElement('a') // create new link element
  link.className = 'delete-item secondary-content' // add class
  link.innerHTML = '<i class="fa fa-remove"></i>' // add icon html
  li.appendChild(link) // apend the link to li
  taskList.appendChild(li) // append li to ul
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase()

  document.querySelectorAll('.collection-item').forEach(function (task) {
    // query selector returns a node list and we can do forEach on node lists
    const item = task.firstChild.textContent
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
}
