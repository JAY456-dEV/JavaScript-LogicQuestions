const textInput = document.querySelector('.input')
const genbtn = document.querySelector('.btn')

genbtn.addEventListener('click', function () {
    generator()
})

function generator() {
    let keys = "qwertyuiopp@#$%123456789ppasdfghjklzxcvbnm"
    let password = ''
        - "";
    for (let i = 0; i < 14; i++) {
        password += keys[Math.floor(Math.random() * keys.length)]
    }
    textInput.value = password
}

const copybtn = document.querySelector('.fa-copy')
const alertshow = document.querySelector('.alert-container')

copybtn.addEventListener('click', function () {
    if (textInput.value) {
        navigator.clipboard.writeText(textInput.value)
        alertshow.classList.remove('active')

        setTimeout(() => {
            alertshow.classList.add('active')
        }, 2000)
    }
})