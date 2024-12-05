const passInput = document.querySelector('.passInput')
const submitbtn = document.querySelector('.submitbtn')
const showEntry = document.querySelector('.show')

let password = 1234

submitbtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (passInput.value == password) {
        showEntry.innerText = "Login Successfull"
    } else {
        showEntry.innerText = "Invalid PIN. Please try again."
    }
})

const checkBalance = document.querySelector('.checkbalance')
const checkdeposit = document.querySelector('.checkdeposit')
const checkwithdraw = document.querySelector('.checkwithdraw')
const checklogout = document.querySelector('.checklogout')

let totalBalance = 1000;
let deposit = 0;

checkBalance.addEventListener('click', function () {
    if (passInput.value == password) {
        showEntry.innerText = `Your Balance Is $ ${totalBalance}`
    } else {
        showEntry.innerText = "Please login first"
    }
})


checkdeposit.addEventListener('click', function () {
    if (passInput.value == password) {
        deposit = parseInt(prompt())
        if (deposit > 0) {
            totalBalance = totalBalance + deposit
            showEntry.innerText = `Deposited $ ${deposit} Your New Balance $ ${totalBalance}`
        } else {
            showEntry.innerText = "Invalid amount. Please try again."
        }
    } else {
        showEntry.innerText = "Please login first"
    }
})

checkwithdraw.addEventListener('click', function () {
    if (passInput.value == password) {
        let withdraw = parseInt(prompt())
        if (withdraw < totalBalance) {
            totalBalance = totalBalance - withdraw
            showEntry.innerText = `withdrawed $ ${withdraw} Your New Balance $ ${totalBalance}`
        } else {
            showEntry.innerText = `Invalid amount or insufficient balance. Please try again.`
        }
    } else {
        showEntry.innerText = "Please login first"
    }
})

checklogout.addEventListener('click', function () {
    if (passInput.value == password) {
        passInput.value = ''
        showEntry.innerText = "Logged out successfully."
    } else {
        showEntry.innerText = "Please login first"
    }
})