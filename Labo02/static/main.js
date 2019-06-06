import animals from './animals.js'

document.addEventListener("DOMContentLoaded", () => {
  fillSelect()
  fillResults()
  addSearchEventListeners()
});


function addSearchEventListeners() {
  let search = document.getElementById("search")
  let resetSearch = document.getElementById("reset-search")

  search.addEventListener("focus", showResults)
  search.addEventListener("input", showResults)
  search.addEventListener("blur", hideResults)
  resetSearch.addEventListener("mousedown", clearSearch)
}


function fillSelect() {
  let select = document.querySelector('select')

  let firstOption = document.createElement('option')
  firstOption.text = "-- Please choose --"
  select.appendChild(firstOption)

  for (let animal of animals) {
    let option = document.createElement('option')
    option.value = animal
    option.text = animal
    select.appendChild(option)
  }
}


function fillResults() {
  let results = document.getElementById("results")
  results.style.display = 'none'

  for (let animal of animals) {
    let result = document.createElement("li")
    result.innerText = animal
    result.className = "result"
    result.addEventListener("mousedown", selectResult)
    results.appendChild(result)
  }

  let lastOption = document.createElement('li')
  lastOption.id = "no-results"
  lastOption.className = "result"
  lastOption.innerText = "Sorry, no results..."
  lastOption.style.display = 'none'
  lastOption.addEventListener("mousedown", selectResult)
  results.appendChild(lastOption)
}


function showResults(e) {
  let search = e.target
  let searchValue = search.value.toLowerCase()
  let results = document.getElementById("results")
  results.style.display = 'block'

  let hasResults = false
  
  for (let i = 0; i < animals.length; i++) {
    if (!searchValue || animals[i].indexOf(searchValue) >= 0) {
      results.children[i].style.display = 'block'
      hasResults = true
    }
    else {
      results.children[i].style.display = 'none'
    }
  }

  let lastOption = document.getElementById('no-results')

  if (!hasResults) {
    lastOption.style.display = 'block'
  }
  else {
    lastOption.style.display = 'none'
  }
}


function hideResults() {
  let results = document.getElementById("results")
  results.style.display = 'none'
}


function selectResult(e) {
  let select = document.querySelector("select")
  let search = document.getElementById("search")
  let result = e.target

  let value = result.id === "no-results"
    ? ""
    : result.innerText

  select.value = value
  search.value = value

  hideResults()
}


function clearSearch() {
  let search = document.getElementById("search")
  search.value = ""
}