const box = document.querySelectorAll('.box')

let show = []

function randomColorGen() {
    let save = '#'
    let color = 'ABCDEF0123456789'

    for (let i = 0; i < 6; i++) {
        save += color[Math.floor(Math.random() * 16)]
    }

    show = [...show, { color: save }]
}


for (let i = 0; i < 15; i++) {
    randomColorGen()
}

const container = document.querySelector('.container')

show.forEach((item) => {
    let save = ''
    save += `<div class="box" style="background-color:${item.color};">${item.color}</div>`;

    container.innerHTML += save
})
