let movieList = [
    {
        name: 'heropanti',
        genre: "Action, Romance",
        imdb: 5.2,
        releseddate: '23 May 2014',
        director: 'shabir khan',
        img: "https://m.media-amazon.com/images/M/MV5BY2M2ZmE4YTQtODhlYi00ZDc0LWJhYTAtNjkyN2E2MjI0ZTY1XkEyXkFqcGdeQXVyMTY4MjU0NDY3._V1_SX300.jpg"
    },
    {
        name: 'The Fast and Furious',
        genre: "Action, Crime, Thriller",
        imdb: 6.8,
        cast: 'Vin Diesel, Paul Walker, Michelle Rodriguez',
        releseddate: '22 Jun 2001',
        director: 'Rob Cohen',
        img: "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
        name: 'John Wick',
        genre: "Action, Crime, Thriller",
        imdb: 7.4,
        cast: 'Keanu Reeves, Michael Nyqvist, Alfie Allen',
        releseddate: '24 Oct 2014',
        director: 'Chad Stahelski, David Leitch',
        img: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
    },
    {
        name: 'Radhe',
        genre: "Action, Crime, Thriller",
        imdb: 5.2,
        cast: "Salman Khan, Disha Patani, Randeep Hooda",
        releseddate: '13 May 2021',
        director: 'Prabhu Deva',
        img: "https://m.media-amazon.com/images/M/MV5BYTQxMmMwZTAtZjIzOC00NjlhLTkzOGYtNzc1OGZhNzczYWM1XkEyXkFqcGdeQXVyMTIzMzg0MTM2._V1_SX300.jpg"
    },
    {
        name: 'Thor',
        genre: " Action, Fantasy",
        imdb: 7.0,
        cast: "Chris Hemsworth, Anthony Hopkins, Natalie Portman",
        releseddate: '06 May 2011',
        director: 'Kenneth Branagh',
        img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
    },
]

const searchBtn = document.querySelector('.searchBtn')
const input = document.querySelector('.inputText')
const moviedetail = document.querySelector('.movie-detail')
console.log(movieList[1].name)

searchBtn.addEventListener('click', function () {
    let show = movieList.find((item, idx) => item.name === input.value)
    moviedetail.innerHTML = `
    <h1 class="moviename">${show.name}</h1>
    <p>Genre :<span> ${show.genre}</span></p>
    <p>Cast :<span> ${show.cast}</span></p>
    <p>IMDb Rating :<span>${show.imdb}</span></p>
    <p>Relesed Date :<span>${show.releseddate}</span></p>
    <p>Sabbir Khan :<span>${show.director}</span></p>
    <img src="${show.img}">`
})