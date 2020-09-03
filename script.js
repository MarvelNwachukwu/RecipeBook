const searchIcon = document.querySelector('button')
const input = document.querySelector('input')
const searchForm = document.querySelector('form')
const openInput = document.querySelector('#buttonPlaceHolder')
const resultPage = document.querySelector('#resultPage')
const closePage = document.querySelector('#closePage')
const showAll = document.querySelector('#showAll')
let RecipeList = 
{
  recipeName: ['Rice','egg','beans','eggstew','Milk','fishrolette','eggovine'],
  // ingredients: {
    
  // }
}

console.log(RecipeList)

searchIcon.addEventListener('click', () => {
  input.style.width = '0vw'
  input.style.cursor = 'not-allowed'
  openInput.style.display = 'inline-block'
  searchIcon.style.display = 'none'
})

searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // console.log(input.value)
  // searchArray()
})

openInput.addEventListener('click', () => {
  input.style.width = '15vw'
  input.style.cursor = 'text'
  openInput.style.display = 'none'
  searchIcon.style.display = 'inline-block'
})

closePage.addEventListener('mouseup', () => {
  resultPage.style.width = '0vw'
  resultPage.style.height = '0vh'
  closePage.style.display = 'none'
  document.querySelector('ul').style.display = 'none'
})

showAll.addEventListener('mouseup', () => {
  resultPage.style.width = '80vw'
  resultPage.style.height = '80vh'
  closePage.style.display = 'inline-block'
  document.querySelector('ul').style.display = 'flex'
  
})

// let searchArray = () => {
//   console.log(RecipeList[recipeName[indexOf(input.value)]])
// } 