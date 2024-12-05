const lists = document.querySelectorAll('.list')
const left = document.querySelector('#left')
const right = document.querySelector('#right')

lists.forEach((list) => {
    list.addEventListener('dragstart', function (e) {
        let selected = e.target

        right.addEventListener('dragover', function (e) {
            e.preventDefault()
        })

        right.addEventListener('drop', function () {
            right.appendChild(selected)
            selected = null
        })

        left.addEventListener('dragover', function (e) {
            e.preventDefault()
        })

        left.addEventListener('drop', function () {
            left.appendChild(selected)
            selected = null
        })
    })
})
