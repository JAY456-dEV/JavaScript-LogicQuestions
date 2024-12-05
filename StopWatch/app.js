const start = document.querySelector('.start')
const reset = document.querySelector('.reset')
const stop = document.querySelector('.stop')

const hour = document.querySelector('.hour')
const min = document.querySelector('.min')
const sec = document.querySelector('.sec')
const msec = document.querySelector('.msec')


let ms = 0 //milisecond
let ss = 0  //second
let mm = 0  //minute
let hh = 0  //hour

function countTime() {
    if (ms === 100) {
        ms = 0
        if (ss === 60) {
            ss = 0
            if (mm == 60) {
                mm = 0
                if (hh == 24) {
                    hh = 0
                } else {
                    hh++
                    hour.innerText = `${hh}`
                }
            } else {
                mm++
                min.innerText = `${mm}:`
            }
        } else {
            ss++
            sec.innerText = `${ss}:`
        }
    } else {
        ms++
        msec.innerText = `${ms}`
        console.log(ms)
    }
}

let intervalid;

function show() {
    intervalid = setInterval(countTime, 10)
}

let btnPress = true

start.addEventListener('click', function () {
    if (btnPress) {
        show()
        btnPress = false
        start.style.backgroundColor = 'darkgreen'
    }
})

reset.addEventListener('click', function () {
    ms = 0
    ss = 0
    mm = 0
    hh = 0
    clearInterval(intervalid)
    countTime()
    btnPress = true
})

stop.addEventListener('click', function () {
    clearInterval(intervalid) // isko jaha pe bhi stop karoge vahi start hoga kyuki jiss time pe stop kiya vo data variable mai save hai
    btnPress = true
    start.style.backgroundColor = 'green'
})