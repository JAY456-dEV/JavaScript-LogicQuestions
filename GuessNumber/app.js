const inputNum = document.querySelector('.enternumber')
const submitbtn = document.querySelector('.submit-btn')
let prevnum = document.querySelector('.prevNum')
let statment = document.querySelector('.statment')
let guessremind = document.querySelector('.guessRemind')

let winnumber = genWinNumber()
let numberGuess = 10;
submitbtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (inputNum.value > 100) {
        alert("Number is Big")
        inputNum.value = ""
        return
    } else if (inputNum.value === "") {
        alert("please Enter Value")
        return
    } else {
        guessremind.innerHTML = `Number Guess Reminding : ${--numberGuess}`
        prevSaveNum()
        checkWinNumber()
        inputNum.value = ""
        if (numberGuess == 0) {
            alert(`Game Is Over : Wining Number Is : ${winnumber}`)
            startNewGame()
            return
        }
    }
})
// console.log(inputNum.value)
function prevSaveNum() {
    prevnum.innerHTML += `${inputNum.value},`
}

function checkWinNumber() {
    if (inputNum.value == winnumber) {
        statment.innerHTML = 'You win'
        alert("You Win")
        return
    } else if (inputNum.value < winnumber) {
        statment.innerHTML = "Too Low"
    } else if (inputNum.value > winnumber) {
        statment.innerHTML = "Too High"
    }
}

console.log(winnumber)

function genWinNumber() {
    let number = Math.floor(Math.random() * 100)
    return number
}

function startNewGame() {
    statment.innerHTML = ''
    prevnum.innerHTML = "Your Guess"
}