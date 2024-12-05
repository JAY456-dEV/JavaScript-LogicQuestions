let option = [
    {
        first: 'X',
    },
    {
        sec: 'O'
    },
]

let winCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

// console.log(winCondition)
const boxbtn = document.querySelectorAll('.cell')

let first;

boxbtn.forEach((choice, idx) => {
    choice.disabled = false
    choice.addEventListener('click', function (e) {
        if (!first && e.target.innerText == '') {
            first = e.target.innerText = option[0].first // or X    
            e.target.style.color = 'black'
            e.target.disabled = true
        } else {
            first = e.target.innerText = option[1].sec // or O
            first = null
        }
        checkWinner()
    })
})

function checkWinner() {
    // let value = Object.values(winCondition)
    winCondition.forEach(i => {
        // console.log(boxbtn[i[0]])
        // console.log(boxbtn[i[0]].innerText)
        if (boxbtn[i[0]].innerText !== '' && boxbtn[i[1]].innerText !== '' && boxbtn[i[2]].innerText !== '') {
            if (boxbtn[i[0]].innerText === boxbtn[i[1]].innerText && boxbtn[i[2]].innerText === boxbtn[i[1]].innerText) { //boxbtn div hai
                console.log('winner')
                isgameover()
            }
        }
    })
}

function isgameover() {
    console.log('game is over')
}

//    if(e.target.id == winCondition.firstline[0]){}
// console.log(e.target.dataset.x, e.target.dataset.y == winCondition[1])