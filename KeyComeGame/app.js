let key = document.querySelectorAll('h1')

let sizeValue = 0

function downWord() {
    let random = Math.floor(Math.random() * key.length)
    // key[random].classList.add('down')    
    if (sizeValue < 600) {
        let show = sizeValue += 100
        key[random].style.top = show + 'px'
    } else if (sizeValue === 600) {
        // key[random].classList.remove('down')
        sizeValue = 0
    }

    setInterval(() => {
        removeAfter4Sec(random)
    }, 1200)
}

setInterval(() => {
    downWord()
}, 200)

function removeAfter4Sec(randomNum) {
    key[randomNum].style.top = -100 + 'px'
}

addEventListener('keydown', function (e) {
    // console.log(e.key.toUpperCase())
    key.forEach((key) => {
        if (key.innerText == e.key.toUpperCase()) {
            key.style.top = -100 + 'px'
        }
    })
})