import Toaster from "./Toaster.js";
Toaster.init(4)

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners()
})

function setupEventListeners () {
  document.getElementById("error-toaster").addEventListener("click", () => Toaster.toast("error"))
  document.getElementById("success-toaster").addEventListener("click", () => Toaster.toast("success"))
  document.getElementById("info-toaster").addEventListener("click", () => Toaster.toast("info"))
}
