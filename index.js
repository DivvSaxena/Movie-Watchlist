const btnEl = document.getElementById('btn')
const sectionTwoEl = document.getElementById('section-two')
const sectionTwoBg = document.getElementById('section-two-bg')
const savedWatchlistEl = document.getElementById('savedWatchList')
let arr = []
showMoviesOutView()
savedWatchlistEl.innerHTML = `<h1>BABBYY</h1>`


document.addEventListener('click', (e) => {
    if(e.target.id == 'Watchlist'){
        // console.log('HOLA')
        // console.log(e.target.parentNode.parentNode.parentNode) // targeted the movie
        const divElement = e.target.parentNode.parentNode.parentNode
        
        const divAsString = divElement.outerHTML
        
        localStorage.setItem('myDiv', divAsString)

        // Retrieve the s
// function showMoviesInView(){
//     showView(sectionTwoEl)
//     hideView(sectionTwoBg)
// }

// function showMoviesOutView(){
//     showView(sectionTwoBg)
//     hideView(sectionTwoEl)
// }

// function showView(view){
//     view.style.display = 'flex'
// }

// function hideView(view){
//     view.style.display = 'none'
// }tring representation from local storage
        const storedDivAsString = localStorage.getItem('myDiv')
        arr.push(storedDivAsString)

        console.log(arr)

       

        
        
    }
})


btnEl.addEventListener('click', ()=> {
    const inputFieldEl = document.getElementById('input-field')
    let movies = ''
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
    
})


function render(item){
    sectionTwoEl.innerHTML = item
}

// function showMoviesInView(){
//     showView(sectionTwoEl)
//     hideView(sectionTwoBg)
// }

// function showMoviesOutView(){
//     showView(sectionTwoBg)
//     hideView(sectionTwoEl)
// }

// function showView(view){
//     view.style.display = 'flex'
// }

// function hideView(view){
//     view.style.display = 'none'
// }