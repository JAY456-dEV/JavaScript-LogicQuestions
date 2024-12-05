let progress = document.querySelector('#progress')
let song = document.querySelector('#song')
let controlIcon = document.querySelector('#ctrIcon')

console.log(song.duration) // duration total second mai dega minute nahi dega minute ko convert karke pehle se hi second dega //kabhi kbaar nan batayega refresh 281 second length song
song.onloadedmetadata = function () {
    progress.max = song.duration  
    progress.value = song.currentTime
}

function playPause() {
    if (controlIcon.classList.contains('fa-pause')) {
        song.pause();
        controlIcon.classList.remove('fa-pause')
        controlIcon.classList.add('fa-play')
    } else {
        song.play()
        controlIcon.classList.add('fa-pause')
        controlIcon.classList.remove('fa-play')
    }
}

if (song.play()) {
    setInterval(() => {
        progress.value = song.currentTime
    }, 500)
}

progress.onchange = function () {//progress line mai kuch bhi change hoga to yee function run hoga
    song.play()
    song.currentTime = progress.value
    console.log(progress.value)
    controlIcon.classList.add('fa-pause')
    controlIcon.classList.remove('fa-play')
}