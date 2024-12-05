const star = document.querySelectorAll('.star')


star.forEach((stars, idx) => {
    stars.addEventListener('mousemove', function (e) {
        checkStar(idx)
    })
})

let ClikedStar;

star.forEach((stars, idx) => {
    stars.addEventListener('click', function (e) {
        checkStar(idx)
        ClikedStar = idx
    })
})

star.forEach((stars, idx) => {
    stars.addEventListener('mouseleave', function (e) {
        checkStar(ClikedStar)
    })
})


function checkStar(idx) {
    star.forEach((starLoop, indexVal) => {
        if (indexVal < idx + 1) {
            starLoop.classList.add('active')
        } else {
            starLoop.classList.remove('active')
        }
    })
}

