const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')

const timer = document.querySelector('.timer')
const tune = document.querySelector('.tune')

let sec = 60;
let min = 24;

let interValid;

function countSec() {
    if (sec == 0) {
        sec = 60
        min--
        // return
    } else if (sec !== 0) {
        sec--
        timer.innerText = `${min}:${sec}`
        tune.pause()
        // console.log(sec)
    } else if (min == 0) {
        tune.play()
        min = 24
        return
    }
}

function show() {
    interValid = setInterval(countSec, 1000)
}

reset.addEventListener('click', function () {
    sec = 60
    min = 24
    btn = true
    countSec()
    
    (interValid)
    start.disabled = false
    start.style.backgroundColor = 'green'
})

let btn = true

start.addEventListener('click', function () {
    if(btn == true){
        show()
        start.style.backgroundColor = 'darkgreen'
        start.disabled = true
        btn = false
    }
})


stop.addEventListener('click', function () {
    clearInterval(interValid)
    btn = true
    start.disabled = false
    start.style.backgroundColor = 'green'
})