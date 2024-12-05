const floorup = document.getElementById('floor-1-up')
const lift = document.querySelector('.lift')
const btn = document.querySelectorAll('.btn')


btn.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        e.preventDefault()
        lift.style.top = '138px'
    })
})