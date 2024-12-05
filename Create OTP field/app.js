const inputs = document.querySelectorAll('.input')


inputs.forEach((input) => {
    input.addEventListener('input', function (e) {
        const target = e.target.value

        if (isNaN(target)) {
            target = ''
            return
        }

        if (target !== '') {
            const next = e.target.nextElementSibling
            if (next) {
                next.focus()
            }
        }
    })
})


inputs.forEach((input) => {
    input.addEventListener('keyup', function (e) {
        const target = e.target.value
        const key = e.key.toLowerCase()

        if (key == 'backspace' || key == 'delete') {
            e.target.value = ''
            const prev = e.target.previousElementSibling

            if (prev) {
                prev.focus()
            }
            return;
        }
    })
})


/// in only one foreach optimezed code  

// const inputsAll = document.querySelectorAll('.input')
// console.log(inputsAll.length)


// inputsAll.forEach((item, index) => {
//     item.addEventListener('keyup', function(e) {
//         if (e.target.value !== '' && e.keyCode !== 8) {
//             if (index < inputsAll.length - 1) {
//                 inputsAll[index + 1].focus()
//             }
//         } else {
//             if (index > 0) {
//                 inputsAll[index - 1].focus()
//             }
//         }
//     })
// })