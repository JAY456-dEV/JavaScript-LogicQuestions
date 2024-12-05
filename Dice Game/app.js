// const dots = document.querySelectorAll('.dot')
const player1 = document.querySelector('.player-1')
const player2 = document.querySelector('.player-2')
const startbtn = document.querySelector('.start-game')
const result = document.querySelector('.check')

let diceImg = [
    "./dice 1.png",
    "./dice 2.png",
    "./dice 3.png",
    "./dice 4.png",
    "./dice 5.png",
    "./Dice 6.png",
];

// console.log(diceImg)

let saveNumber = 0;
let saveNumber2 = 0;
startbtn.addEventListener('click', function () {
    saveNumber = random()
    saveNumber2 = random2()
    display()
    check()
})


function display() {
    diceImg.forEach((dot, idx) => { // idhar jo savenumber hai usme mai pehle socha ke mai sidha random function pass kar deta hu dono random random2 pass kiya thode der bad pata chala ke ye random ko 6 bar call karke last vala number ka koi img de raha hai to condition ddhang se check nahi ho rahe thi kyuki forEach tha aur under maine function padd kie the to forEach img ke liye 6 bar ye call hhota tha fir iske liye function pass na karke un function ke under se jo return me number meliga usko hamne variable mai save karva liye jab start btn dabunga to 1 1 bar dono random function chalege or or alag alag variable mai save hoge or un variable ko mai dice ke idx mai dal duga to merko img mil jayege  fir maine niche condition check karva le 
        player1.innerHTML = `
        <img src="${diceImg[saveNumber]}" alt="" id="${idx}">
        `
        player2.innerHTML = `
        <img src="${diceImg[saveNumber2]}" alt="" id="${idx}">
        `
    })
}

display()

function random() {
    let number = Math.floor(Math.random() * 6)
    // console.log(number)
    return number
}

function random2() {
    let number2 = Math.floor(Math.random() * 6)
    // console.log(number2)
    return number2
}

function check() {
    console.log(saveNumber, saveNumber2)

    if (saveNumber === saveNumber2) {
        result.innerHTML = "Match Draw"
        console.log("Match Draw")

    } else if (saveNumber > saveNumber2) {
        result.innerHTML = "player 1 wins"
        console.log("player 1 wins")
    } else {
        result.innerHTML = "player 2 wins"
        console.log("player 2 wins")
    }
}
