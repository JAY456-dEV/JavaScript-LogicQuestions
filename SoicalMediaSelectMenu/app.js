const menu = document.querySelector('.menu')
const menupara = document.querySelector('.menu p')
const list = document.querySelector('.social-lists')
const angle = document.querySelector('.fa-angle-down')

menu.addEventListener('click', () => {
    list.classList.toggle('hide')
    angle.classList.toggle('rotate')
})

const li = document.querySelectorAll('li')

li.forEach((item) => {
    item.addEventListener('click', function (e) {
        menupara.innerHTML = item.innerHTML
        list.classList.add('hide')
    })
})