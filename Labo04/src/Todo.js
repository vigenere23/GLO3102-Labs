import Fetcher from './Fetcher.js'

export default class Todo {
  constructor({text="", id="", parent}) {
    this.id = id
    this.text = text
    this.parent = parent
    
    this.create()
  }

  async create() {
    let todo = document.createElement("li")
    todo.className = "todo"
    todo.appendChild(this.createTextElement())
    todo.appendChild(this.createCloseElement())
    todo.addEventListener("click", (e) => this.changeTextToInput(e))

    this.element = todo
    this.parent.appendChild(todo)

    if (!this.id) {
      let data = await Fetcher.addTask({
        name: this.text
      })
      this.id = data.id
    }

    return todo
  }

  createTextElement() {
    let todoText = document.createElement("span")
    todoText.className = "todo-text"
    todoText.innerText = this.text

    return todoText
  }

  createInputElement() {
    let input = document.createElement("input")
    input.type = "text"
    input.value = this.text
    input.className = "todo-input"
    input.addEventListener("blur", () => this.replace())
    input.addEventListener("keydown", (e) => {
      let keycode = e.keyCode ? e.keyCode : e.which
      if (keycode == 13) this.replace()
      else if (keycode == 27) this.changeInputToText(false)
    })

    return input
  }

  createCloseElement() {
    let todoClose = document.createElement("a")
    todoClose.classList.add("todo-close", "material-icons")
    todoClose.innerText = "close"
    todoClose.addEventListener("click", (e) => this.remove(e))

    return todoClose
  }

  remove(e) {
    e.stopPropagation()
    this.parent.removeChild(this.element)
    Fetcher.deleteTask(this.id)
  }

  changeTextToInput(e) {
    e.stopPropagation()
    let textElement = this.element.querySelector(".todo-text")
    if (textElement) {
      let input = this.createInputElement()
      textElement.parentNode.replaceChild(input, textElement)
      input.focus()
    }
  }

  changeInputToText(replaceText=true) {
    let input = this.element.querySelector("input")
    let text = input.value

    if (text && replaceText) this.text = text
    let textElement = this.createTextElement()
    input.parentNode.replaceChild(textElement, input)
  }

  replace() {
    this.changeInputToText()
    Fetcher.replaceTask(this.id, {
      name: this.text
    })
  }
}