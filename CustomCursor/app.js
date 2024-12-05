const cursor = document.querySelector('.cursor')
const body = document.querySelector('body')

body.addEventListener('mousemove',(e)=>{
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
})
