const mole = document.querySelectorAll('.mole')

function start() {
    let random = Math.floor(Math.random() * mole.length)
    mole.forEach((div) => { // every time this function call ye check karega ke mole ke sare div mai koi up namke classList add hai or hai to usko remove kar do // or ye 
        div.classList.remove('up')
    })
    mole[random].classList.add('up') //or ye add karta jayega mole mai classList up // upper forach lagay hai kyuki every time ye functionn call hota tha or shirf classList add hota hai to mole ka cartoon hota hai vo add ka add hi reh jata tha to hamna add ke pehle mole.forEach pe check karva deya ke forEach div mai up namke classList add add hai or hai to remove kardo forEach mai se
}

const startBtn = document.querySelector('.startBtn')

startBtn.addEventListener('click', function () {
    setInterval(() => {
        start()
    }, 800)
})

const counts = document.querySelector('.counts')

let count = 0

mole.forEach((div) => {
    div.addEventListener('click', function (e) {
        count++
        counts.innerText = count
        // idhar ham jispe cartoon pe click karege uska ++ hoga
    })
})

