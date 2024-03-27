const btnEl = document.getElementById('btn')
const sectionTwoEl = document.getElementById('section-two')
const sectionTwoBg = document.getElementById('section-two-bg')
const savedWatchlistEl = document.getElementById('savedWatchList')
const MoviesFromLocalStorage = JSON.parse( localStorage.getItem("movie") )
let arr = []


function render(item){
    sectionTwoEl.innerHTML = item
}

function showMoviesInView(){
    showView(sectionTwoEl)
    hideView(sectionTwoBg)
}

function showMoviesOutView(){
    showView(sectionTwoBg)
    hideView(sectionTwoEl)
}

function showView(view){
    view.style.display = 'flex'
}

function hideView(view){
    view.style.display = 'none'
}

document.addEventListener('click', (e) => {
    if(e.target.id == 'btn'){
        const inputFieldEl = document.getElementById('input-field')
        let movies = ''
        arr = MoviesFromLocalStorage
        showMoviesInView()
        if(inputFieldEl.value){
            fetch(`https://www.omdbapi.com/?apikey=8e8d3e03&s=${inputFieldEl.value}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                for(let item of data.Search){
                    fetch(`https://www.omdbapi.com/?apikey=8e8d3e03&i=${item.imdbID}`)
                        .then(res => res.json())
                        .then(data => {
                            movies += `
                                        <div class="movie">
                                            <img src="${data.Poster}" alt="poster">
                                            <div class="sub-section">
                                                <span>
                                                    <h1>${data.Title}</h1>
                                                    <p>⭐ ${data.imdbRating}</p>
                                                </span>
                                                <div class="sub-two">
                                                    <p>${data.Runtime}</p>
                                                    <p>${data.Genre}</p>
                                                    <button class="Watchlist" id="Watchlist">
                                                        <i class="fa fa-plus-circle fa-lg"></i>
                                                            Watchlist
                                                    </button>
                                                </div>
                                                <span>
                                                    <p class='summary'>${data.Plot}</p>
                                                </span>
                                            </div>
                                        </div>
                                 `
                                 render(movies)
                        })
                }
                
            })
        }
    } else if(e.target.id == 'Watchlist'){
        let parent = e.target.parentNode.parentNode.parentNode
        console.log(parent)

        const parentAsString = parent.outerHTML
        
        arr.push(parentAsString)

        localStorage.setItem('movie', JSON.stringify(arr))
    }
})

function renderLists(movies){
    let listItems = ''
    for(let item of movies){
        listItems += item 
    }
    savedWatchlistEl.innerHTML = listItems
}

function renderSavedMovies(){
    arr = MoviesFromLocalStorage
    renderLists(arr)
    console.log(MoviesFromLocalStorage)

}