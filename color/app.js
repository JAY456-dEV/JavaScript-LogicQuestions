const body = document.querySelector('body')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box = document.querySelector('.box')

let mouse;

box1.addEventListener('mouseover', function () {
    if (!mouse) {
        mouse = body.style.backgroundColor = 'red'
    }
})

box1.addEventListener('mouseleave', function () {
    if (mouse) {
        mouse = body.style.backgroundColor = 'white'
        mouse = null;
    }
})

box2.addEventListener('mouseover', function () {
    if (!mouse) {
        mouse = body.style.backgroundColor = 'blue'
    }
})

box2.addEventListener('mouseleave', function () {
    if (mouse) {
        mouse = body.style.backgroundColor = 'white'
        mouse = null;
    }
})

box3.addEventListener('mouseover', function () {
    if (!mouse) {
        mouse = body.style.backgroundColor = 'green'
    }
})

box3.addEventListener('mouseleave', function () {
    if (mouse) {
        mouse = body.style.backgroundColor = 'white'
        mouse = null;
    }
})

box4.addEventListener('mouseover', function () {
    if (!mouse) {
        mouse = body.style.backgroundColor = 'rgb(183, 0, 255)'
    }
})

box4.addEventListener('mouseleave', function () {
    if (mouse) {
        mouse = body.style.backgroundColor = 'white'
        mouse = null;
    }
})