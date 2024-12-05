let arrNum = []

function numberCreate() {
    for (let i = 1; i <= 10; i++) {
        arrNum.push(i)
        arrNum.push(i)
    }

    arrNum.sort(() => Math.random() - 0.5)
}
numberCreate()

let boxmain = document.querySelector('.box-parent')

let CheckNumber = []

arrNum.map((item, idx) => {
    return boxmain.innerHTML += `<div className='main-box-parent'>
   <div class='box' id='box${idx}' onclick=checkBox(${idx})><span class='number${idx}'>${item}<span></div>
   </div>`
})

let interValid;

function checkBox(idx) {
    if (CheckNumber.length < 2) {
        const number = document.querySelector(`.number${idx}`)
        number.style.visibility = 'visible'
        CheckNumber.push(idx)
    }

    if (CheckNumber.length == 2) {
        if (arrNum[CheckNumber[0]] === arrNum[CheckNumber[1]]) {
            console.log('win')
            clearInterval(interValid)
            for (let i = 0; i < CheckNumber.length; i++) {
                const number = document.querySelector(`.number${CheckNumber[i]}`)
                number.style.visibility = 'hidden'
                const box = document.querySelector(`#box${CheckNumber[i]}`)
                box.style.visibility = 'hidden'
            }
            CheckNumber = []
        } else {
            interValid = setTimeout(() => {
                for (let i = 0; i < CheckNumber.length; i++) {
                    const number = document.querySelector(`.number${CheckNumber[i]}`)
                    number.style.visibility = 'hidden'
                }
                CheckNumber = []
            }, 1200)
        }
    }
}

