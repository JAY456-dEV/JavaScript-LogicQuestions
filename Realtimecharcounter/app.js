const stars = document.querySelectorAll('.fa-star')
const emoji = document.querySelectorAll('.far')
const coloremo = ["red", "orange", "lightblue", "lightgreen", "green"]

stars.forEach((star, idx) => {
    star.addEventListener('click', function () {
        ratingUpdate(star, idx)
    })
})

function ratingUpdate(star, idx) {
    stars.forEach((light, index) => {
        if (index < idx + 1) {
            light.classList.add('active')
        } else {
            light.classList.remove('active')
        }
    })
    emoji.forEach((item) => {
        item.style.tranform = `translateX(-${idx * 50}px)`
        item.style.color = coloremo[idx]
    })
}