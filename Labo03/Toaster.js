import Toast from './Toast.js'

export default class Toaster {
  static init(max_toasts) {
    this.max_toasts = max_toasts
    this.toasts = []
    this.toasts_DOM = document.getElementById("toasts")
  }

  static toast(type) {
    let toasterInput = document.getElementById("toaster-input")
    let text = toasterInput.value

    let toast = new Toast(type, text).build()
    this.addToast(toast)
  }

  static addToast(toast) {
    this.toasts_DOM.appendChild(toast.element)
    this.toasts.push(toast)

    if (this.toasts.length > this.max_toasts) {
      let toastToDelete = this.toasts.shift()
      toastToDelete.disappear()
    }
  }
}
