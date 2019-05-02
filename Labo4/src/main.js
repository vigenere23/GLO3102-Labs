import Todo from './Todo.js'
import todosExamples from './todos-examples.js'
import Fetcher from './Fetcher.js'
import consts from './constants.js'

document.addEventListener('DOMContentLoaded', async () => {
  setupEventListeners()
  setRandomPlaceholder()
  await createUser()
  loadTodos()
})

function setupEventListeners() {
  document.getElementById("todo-adder").addEventListener("submit", addTodo)
}

async function createUser() {
  let data = await Fetcher.createUser()
  consts.USER_ID = data.id
}

async function loadTodos() {
  let data = await Fetcher.getAllTasks()
  for (let task of data.tasks) {
    new Todo({
      text: task.name,
      id: task.id,
      parent: getTodos()
    })
  }
}

function getTodos() {
  return document.getElementById("todos");
}

function addTodo(e) {
  e.preventDefault()
  let input = document.querySelector("#todo-adder input")
  let text = input.value

  if (text) {
    input.value = ""
    setRandomPlaceholder(input)

    new Todo({
      text: text,
      parent: getTodos()
    })
  }
}

function setRandomPlaceholder(input) {
  if (!input) input = document.querySelector("#todo-adder input")
  let index = Number.parseInt(Math.random() * (todosExamples.length - 1.0))
  input.placeholder = todosExamples[index]
}