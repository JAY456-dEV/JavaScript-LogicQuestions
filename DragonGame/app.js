let score = 0
let cross = true

document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        let dino = document.querySelector('.dino')
        dino.classList.add('animateDino')

        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 1000)
    }

    if (e.keyCode == 39) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX + 112 + 'px'
    }

    if (e.keyCode == 37) {
        dino = document.querySelector('.dino')
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX - 112 + 'px'
    }


}

setInterval(() => {
    let dino = document.querySelector('.dino')
    let gameOver = document.querySelector('.gameOver')
    let obstacle = document.querySelector('.obstacle')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'))

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetX = Math.abs(dx - ox)
    offsetY = Math.abs(dy - oy)

    if (offsetX < 80 && offsetY < 52) {
        gameOver.style.visibility = 'visible'
        obstacle.classList.remove('obstacleAni')
    } else if (offsetX < 145 && cross) {
        score += 1
        updateScore(score)
        cross = false
        setTimeout(() => {
            cross = true
        }, 1000)

        setTimeout(() => {
            let aniDur = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            let newDur = aniDur - 0.1
            obstacle.style.animationDuration = newDur + 's'
        })
    }
}, 10)

function updateScore(score) {
    let scoreCount = document.querySelector('#scoreCount')
    scoreCount.innerText = 'Your Score' + score
}