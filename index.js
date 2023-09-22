let movienameEl = document.getElementById('movie-name')
let searchTerm = movienameEl.value



document.getElementById('search-btn').addEventListener('click',() => {
  document.getElementById('content').style.display = 'none'
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8e8d3e03&s=${searchTerm}`)
  .then(res => res.json())
  .then(data => console.log(data))
  movienameEl.value = ' '
})



