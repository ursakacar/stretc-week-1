/****************
DOCUMENT OBJECT
****************/

let val

val = document // gives the entire document
val = document.all // all tags
val = document.all[2]
val = document.all.length
val = document.head // or .body .doctype .domain .URL .characterSet .contentTyype

val = document.forms // selecting without using selectors... not recommended
val = document.forms[0]
val = document.forms[0].id // or .method .action

val = document.links
val = document.links[0]
val = document.links[0].id // or .className or .classList[0]

val = document.images

val = document.scripts
val = document.scripts[2].getAttribute('src')

let scripts = document.scripts
let scriptsArr = Array.from(scripts) // scripts.forEach is not a function, as forEach is for arrays only, so we have to convert it to an array first

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute('src'))
})

console.log(val)

/****************
DOM SELECTORS
****************/

document.getElementById() // SINGLE element selector

console.log(document.getElementById('task-title'))

// Get things from the element
console.log(document.getElementById('task-title').id)
console.log(document.getElementById('task-title').className)

const taskTitle = document.getElementById('task-title')

// Change styling
taskTitle.style.background = '#333'
taskTitle.style.color = '#fff'
taskTitle.style.padding = '5px'
taskTitle.style.display = 'none'

// Change content
taskTitle.textContent = 'Task List'
taskTitle.innerText = 'My Tasks'
taskTitle.innerHTML = '<span style="color:red">Task List</span>'

document.querySelector() // newer and more powerful, SINGLE element celector

console.log(document.querySelector('#task-title'))
console.log(document.querySelector('.card-title'))
console.log(document.querySelector('h5'))

document.querySelector('li').style.color = 'red'
document.querySelector('ul li').style.color = 'blue'

document.querySelector('li:last-child').style.color = 'red'
document.querySelector('li:nth-child(4)').textContent = 'Hello World'
document.querySelector('li:nth-child(odd)').style.background = '#ccc' // only the FIRST odd, single elt selector
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4' // only the FIRST even, single elt selector

document.getElementsByClassName // MULTI elt selector

const items = document.getElementsByClassName('collection-item') // HTML collection, can be accessed like an array
console.log(items)
console.log(items[0])
items[0].style.color = 'red'

const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems)

document.getElementsByTagName // MULTI elt selector
let lis = document.getElementsByTagName('li')
console.log(lis)
console.log(lis[0])
lis[3].textContent = 'Hello'

// HTML collection IS NOT an array, we have to convert it into array
lis = Array.from(lis)

lis.reverse()

lis.forEach(function (li, index) {
  console.log(li.className)
  li.textContent = `${index}: Hello`
})

console.log(lis)

document.querySelectorAll // MULTI elt selector, not an HTML collection, but a node list, foreach works here

const items = document.querySelectorAll('ul.collection li.collection-item')

items.forEach(function (item, index) {
  item.textContent = `${index}: Hello`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function (li, index) {
  li.style.background = '#ccc'
})

for (let i = 0; i < liEven.length; i++) {
  // this will also work with HTML collection, you can use length on it
  liEven[i].style.background = '#f4f4f4'
}

console.log(items)

/****************
TRAVERSING THE DOM
****************/

let val

const list = document.querySelector('ul.collection')
const listItem = document.querySelector('li.collection-item:first-child')

val = listItem
val = list

// Get child nodes, node list
val = list.childNodes
val = list.childNodes[0]
val = list.childNodes[0].nodeType

// NODE TYPES
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes, HTML collection
val = list.children
val = list.children[1]
list.children[1].textContent = 'Hello'
// Children of children
list.children[3].children[0].id = 'test-link'
val = list.children[3].children[0]

// First child
val = list.firstChild
val = list.firstElementChild

// Last child
val = list.lastChild
val = list.lastElementChild

// Count child elements
val = list.childElementCount

// Get parent node
val = listItem.parentNode
val = listItem.parentElement
val = listItem.parentElement.parentElement

// Get next sibling
val = listItem.nextSibling
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling

// Get prev sibling
val = listItem.previousSibling
val = listItem.previousElementSibling
console.log(val)

/*************************************
CREATING, REPLACING, REMOVING ELEMENTS
**************************************/

const li = document.createElement('li')

// Add class
li.className = 'collection-item'

// Add id
li.id = 'new-item'

// Add attribute
li.setAttribute('title', 'New Item')

// Create text node and append
li.appendChild(document.createTextNode('Hello World'))

// Create new link element
const link = document.createElement('a')
// Add classes
link.className = 'delete-item secondary-content'
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

// Append link into li
li.appendChild(link)

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li)

console.log(li)

// Create Element h2
const newHeading = document.createElement('h2')
// Add id
newHeading.id = 'task-title'
// New text node
newHeading.appendChild(document.createTextNode('Task List'))

// Get the old heading
const oldHeading = document.getElementById('task-title')
//Parent
const cardAction = document.querySelector('.card-action')

// Replace
cardAction.replaceChild(newHeading, oldHeading)

// REMOVE ELEMENT
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')

// Remove list item
lis[0].remove()

// Remove child element
list.removeChild(lis[3])

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]

// Classes
let val
val = link.className
val = link.classList
val = link.classList[0]
link.classList.add('test')
link.classList.remove('test')

// Attributes
val = link
val = link.getAttribute('href')
val = link.setAttribute('href', 'http://google.com')
link.setAttribute('title', 'Google')
val = link.hasAttribute('title')
link.removeAttribute('title')

console.log(val)

/*************
EVENT LISTENER
***************/

document.querySelector('.clear-tasks').addEventListener('click', function (e) {
  console.log('Hello World')

  e.preventDefault()
})

document.querySelector('.clear-tasks').addEventListener('click', onClick)

function onClick(e) {
  console.log('Clicked')

  let val

  val = e

  // Event target element
  val = e.target
  val = e.target.id
  val = e.target.className
  val = e.target.classList

  // Event type
  val = e.type

  // Timestamp
  val = e.timeStamp

  // Coords event relative to the window
  val = e.clientY
  val = e.clientX

  // Coords event relative to the element
  val = e.offsetY
  val = e.offsetX

  console.log(val)
}

// mouse events
const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

clearBtn.addEventListener('click', runEvent) // dblclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mouseout, mouseremove

// event handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`)

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`
}

const form = document.querySelector('form')
const taskInput = document.getElementById('task')
const heading = document.querySelector('h5')
const select = document.querySelector('select')

taskInput.value = '' // Clear input

// keyboard events
taskInput.addEventListener('keydown', runEvent) // keyup, keypress, focus, blur, cut, paste, input

// Change
select.addEventListener('change', runEvent)

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`)
  console.log(e.target.value)
}

/*************
EVENT BUBBLING
***************/

// they all bubble up to a parent
document.querySelector('.card-title').addEventListener('click', function () {
  console.log('card title')
})

document.querySelector('.card-content').addEventListener('click', function () {
  console.log('card content')
})

document.querySelector('.card').addEventListener('click', function () {
  console.log('card')
})

document.querySelector('.col').addEventListener('click', function () {
  console.log('col')
})

// EVENT DELEGATION
document.body.addEventListener('click', deleteItem)

function deleteItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item')
    e.target.parentElement.parentElement.remove()
  }
}

/*************
LOCAL STORAGE
***************/

// local storage is part of the browser API

// set local storage item
localStorage.setItem('name', 'John')

// set session storasge item
sessionStorage.setItem('name', 'Beth')

// remove from storage
localStorage.removeItem('name')

// get from storage
const name = localStorage.getItem('name')

// clear local storage
localStorage.clear()

console.log(name, age)

document.querySelector('form').addEventListener('submit', function (e) {
  const task = document.getElementById('task').value

  let tasks

  if (localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))

  alert('Task saved')

  e.preventDefault()
})

const tasks = JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(function (task) {
  console.log(task)
})
