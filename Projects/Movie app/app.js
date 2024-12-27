let api = 'https://www.omdbapi.com/?apikey=61e576a4&t='

let title = document.getElementById('title');
let date = document.getElementById('date');
let director = document.getElementById('director');
let actors = document.getElementById('actors');
let genre = document.getElementById('genre');
let desc = document.getElementById('desc');
let collection = document.getElementById('collection');
let awards = document.getElementById('awards');
let writer = document.getElementById('writer');
let ratings = document.getElementById('ratings');
let img = document.getElementById('img');


function searchMovie() {
    let moviename = document.getElementById('movieName')
    let query = api + moviename.value;
    fetch(query).then((data) => {
        return data.json()
    }).then((data) => {
        title.innerText = data.Title
        // title.innerText = data.Title;
        date.innerText = data.Released;
        director.innerText = data.Director;
        actors.innerText = data.Actors;
        genre.innerText = data.Genre;
        desc.innerText = data.Plot;
        awards.innerText = data.Awards;
        writer.innerText = data.Writer;
        ratings.innerText = data.imdbRating;
        img.src = data.Poster
        
    })

}

