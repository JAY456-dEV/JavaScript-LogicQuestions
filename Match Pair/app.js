const boxBtn = document.querySelectorAll('.fruits')
console.log(boxBtn)

boxBtn.forEach((btn, idx) => {
    btn.addEventListener('click', function (e) {
        console.log(e.target)
    })
})