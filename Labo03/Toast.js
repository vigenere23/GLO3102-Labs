export default class Toast {
  constructor(type, text) {
    this.type = type
    this.text = text
    this.element = null
  }

  build() {
    let text = document.createElement("span")
    text.classList.add("text")
    text.innerText = this.text

    let closeButton = document.createElement("span")
    closeButton.classList.add("material-icons", "close")
    closeButton.innerText = "close"
    closeButton.addEventListener("click", () => this.disappear())

    this.element = document.createElement("div")
    this.element.classList.add("toast", this.type)
    this.element.appendChild(text)
    this.element.appendChild(closeButton)

    setTimeout(() => this.disappear(), 5000)

    return this
  }

  disappear() {
    this.fadeOut(400).then(() => {
      this.element.parentNode.removeChild(this.element)
    })
  }

  fadeOut(length) {
    let fadeDecrement = 0.01;
    let fps = length * fadeDecrement
    
    return new Promise((resolve, reject) => {
      let fadeEffect = setInterval(() => {
        if (!this.element.style.opacity) {
          this.element.style.opacity = 1;
        }
        if (this.element.style.opacity > 0) {
          this.element.style.opacity -= fadeDecrement;
        } else {
          clearInterval(fadeEffect);
          resolve()
        }
      }, fps);
    })
  }
}
