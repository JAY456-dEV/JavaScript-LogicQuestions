const elem = document.querySelectorAll('.elem')
const img = document.querySelectorAll('.elem img')

elem.forEach((val) => {
    
    val.addEventListener('mouseenter', function () {
        val.childNodes[3].style.opacity = '1'
    })

    val.addEventListener('mouseleave', function () {
        val.childNodes[3].style.opacity = '0'
    })

    val.addEventListener('mousemove', function (dets) {
        val.childNodes[3].style.left = dets.x + 'px'
    })
})