let allDotsDice = [
    {
        1: `<div class="dot-1" style="left: 44%; top: 44.5%;"></div>`,
    },

    {
        1: `<div class="dot-2" style="left: 12%; top: 77%;"></div>`,
        2: `<div class="dot-2" style="left: 75%;"></div>`,
    },

    {
        1: `<div class="dot-2" style="left: 12%; top: 77%;" ></div >`,
        2: `<div class="dot-3" style="left: 44%; top: 40.5%;"></div>`,
        3: `<div class="dot-4" style="left: 75%;"></div>`,
    },

    {
        1: `<div class="dot-1" style="left: 12%;"></div>`,
        2: `<div class="dot-2" style="left: 12%; top: 77%;"></div>`,
        3: `<div class="dot-4" style="left: 75%;"></div>`,
        4: `<div class="dot-6" style="left: 75%;top: 77%;"></div>`,
    },

    {
        1: ` <div class="dot-1" style="left: 12%;"></div>`,
        2: `<div class="dot-2" style="left: 12%; top: 77%;"></div>`,
        3: `<div class="dot-4" style="left: 75%;"></div>`,
        4: `<div class="dot-5" style="left: 44%; top: 44.5%;"></div>`,
        5: `<div class="dot-3" style="left: 75%;"></div>`,
    },

    {
        1: `<div class="dot-1" style="left: 12%;"></div>`,
        2: `<div class="dot-2" style="left: 12%; top: 77%;"></div>`,
        3: `<div class="dot-3" style="left: 12%; top: 44.5%;"></div>`,
        4: `<div class="dot-4" style="left: 75%;"></div>`,
        5: `<div class="dot-5" style="left: 75%; top: 44.5%;"></div>`,
        6: `<div class="dot-6" style="left: 75%;top: 77%;"></div>`,
    },
]

// console.log(allDotsDice[0][1])
let randomLoopNumber = 0;
randomLoopNumber = randomNum()
console.log(randomLoopNumber)
const dot_box = document.querySelector('.dot-box')
const startBtn = document.querySelector('.roll')

// for (let i = 0; i <= randomLoopNumber; i++) {
//     dot_box.innerHTML += allDotsDice[randomLoopNumber][i + 1]
// }

for (let i = 0; i <= randomLoopNumber; i++) {
    dot_box.innerHTML += allDotsDice[randomLoopNumber][i + 1]
}
startBtn.addEventListener('click', function () {
    randomNum()
})

function randomNum() {
    let number = Math.floor(Math.random() * 6)
    return number
}

