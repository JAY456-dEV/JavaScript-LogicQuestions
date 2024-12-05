const genBtn = document.querySelector('.genBtn')

const selectRange = document.querySelector('.selectRange')
const common = document.querySelector('.selectRange')

const smallChar = document.querySelector('.charab')
const capitalChar = document.querySelector('.charAB')
const number = document.querySelector('.number')
const symbol = document.querySelector('.symbol')

const numberLength = document.querySelector('.numberLength')
const PasswordGen = document.querySelector('.PasswordGen')

genBtn.addEventListener('click', function () {
    check()
})

let number1 = 0

selectRange.addEventListener('input', function (e) {
    numberLength.innerText = e.target.value
    number1 = e.target.value
})

function check() {
    let password = ""

    let tempPassword = ''


    if (smallChar.checked === true) {
        tempPassword += 'qwertyuiopaasdfghjklzxcvbnm'
    }

    if (capitalChar.checked === true) {
        tempPassword += 'QWERTYUIOPASDFGHJKLZXCVBNM'
    }

    if (number.checked === true) {
        tempPassword += 123456789
    }

    if (symbol.checked === true) {
        tempPassword += '!@#$%^'
    }

    if (smallChar.checked || capitalChar.checked || number.checked || symbol.checked) {
        for (let i = 0; i < number1; i++) {
            password += tempPassword[Math.floor(Math.random() * tempPassword.length)]
        }
    } else {
        alert('please check any')
    }

    // console.log(password)
    PasswordGen.value = password

    navigator.clipboard.writeText(PasswordGen.value)
}
