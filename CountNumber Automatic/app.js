const counter = document.querySelectorAll('.counter')


counter.forEach((count, idx) => {
    function show() {
        // console.log(count.dataset.number)
        let number = parseInt(count.dataset.number)
        let inrText = parseInt(count.innerText)
        // console.log(inrText)z
        let everyTime = parseInt(number / 200)
        // console.log(everyTime)



        if (inrText < number) {
            count.innerText = inrText + everyTime
        }
    }
    setInterval(show, 10)
    // show()
})
