const mainImg = document.querySelector('.img-main')

const leftClick = document.querySelector('.leftClick')
const RightClick = document.querySelector('.rightClick')

let count = 0

leftClick.addEventListener('click', function () {
    if (count == 0) {
        count = 3
    } else {
        count--
    }

    mainImg.style.transform = `translate(-${count * 400}px) `
})


RightClick.addEventListener('click', function () {
    if (count < 3) {
        count++
    } else {
        count = 0
    }
    mainImg.style.transform = `translate(-${count * 400}px) `
})


setInterval(() => {
    if (count < 4) {
        mainImg.style.transform = `translate(-${count * 400}px) `
        count++
    } else {
        count = 0
    }
}, 1000)