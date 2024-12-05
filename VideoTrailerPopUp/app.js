const btn = document.querySelector('.btn')
const closeicon = document.querySelector('.close-btn')

const trailer = document.querySelector('.trailer-container')

btn.addEventListener('click',function () {
    trailer.classList.remove('active')
});

const close = document.querySelector('.close')
const video = document.querySelector('video')
close.addEventListener('click',function (){
    trailer.classList.add('active')
    video.pause()
    video.currentTime = 0;
});