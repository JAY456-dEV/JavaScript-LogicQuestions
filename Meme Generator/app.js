let allMeme = [
    {
        text: 'A lot of people just need a little help',
        img: 'https://i.redd.it/8t3w7tk8sjmc1.png',
        memeBy: 'Meme By : Lrvargas'
    },

    {
        text: 'Ensuring that everyone is included :)',
        img: "https://i.redd.it/o0v640wmdnmc1.gif",
        memeBy: 'Meme by: j5029'
    },

    {
        text: 'this is exactly what i want',
        img: 'https://i.redd.it/hk2tezbkp5nc1.png',
        memeBy: 'Meme by: thaboy36'
    },

    {
        text: 'Look at her expression! She is truly treasuring this moment',
        img: 'https://i.redd.it/mbepaqvdrgnc1.png',
        memeBy: 'Meme by: Covertfridge'
    },

    {
        text: 'wholesome moment',
        img: 'https://i.redd.it/9e9lgbxn8unc1.png',
        memeBy: 'Meme by: Ok_Piece_7936'
    },

    {
        text: 'Accidental Parent of the Year',
        img: 'https://i.redd.it/otpbpb0tncnc1.png',
        memeBy: 'Meme by: finnishflash128'
    },
]


const GenBtn = document.querySelector('.genbtn')
const memeTake = document.querySelector('.meme-main')

function genMeme() {
    let store = "";
    let meme = allMeme.map(meme => meme)[randomMeme ()]
    store = `
    <div class="meme">
                <h2>${meme.text}</h2>
                <img width="500px" src="${meme.img}" alt="">
                <p>${meme.memeBy}</p>
            </div>
    `
    memeTake.innerHTML = store
}

GenBtn.addEventListener('click', function (e) {
    e.preventDefault()
    randomMeme()
    genMeme()
})

function randomMeme() {
    let random = Math.floor(Math.random () * allMeme.length)
    return random
}