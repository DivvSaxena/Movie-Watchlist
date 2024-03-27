const btnEl = document.getElementById('btn')
const sectionTwoEl = document.getElementById('section-two')


btnEl.addEventListener('click', ()=> {
    const inputFieldEl = document.getElementById('input-field')
    let movies = ''
    if(inputFieldEl.value){
        fetch(`https://www.omdbapi.com/?apikey=8e8d3e03&t=${inputFieldEl.value}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
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
                                    <button class="Watchlist">
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


function render(item){
    sectionTwoEl.innerHTML = item
}