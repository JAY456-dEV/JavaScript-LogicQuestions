let colorArray = ["#e58e26", "#f9b4ab", "#B1FB17", "#78e08f", "#fd79a8"]

function changeColor(idx) {
    document.body.style.backgroundColor = colorArray[idx]
}

let colorbox = document.getElementById("colorbox");

colorArray.forEach((color, index) => {
    const span = document.createElement('span')
    span.style.backgroundColor = color
    // console.log(span)

    colorbox.appendChild(span)
    
    span.addEventListener('click', function (e) {
        changeColor(index)
    })
})