const searchIcon = document.querySelector('button')
const input = document.querySelector('input')
const cancel = document.querySelector('#Cancel')
const searchForm = document.querySelector('form')

searchIcon.addEventListener('click', () => {
  input.style.width = '15vw'
  input.style.cursor = 'text'
  cancel.style.display = 'inline-block'
  searchIcon.style.display = 'none'
})

cancel.addEventListener('click', () => {
  input.style.width = '0vw'
  input.style.cursor = 'not-allowed'
  cancel.style.display = 'none'
  searchIcon.style.display = 'inline-block'
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(input.value)
})