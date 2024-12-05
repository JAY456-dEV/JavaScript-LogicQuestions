function search_animal() {
    const input = document.querySelector('#searchbar').value
    const inputText = input.toLowerCase()
    let x = document.getElementsByClassName('animals');

    for (let i = 0; i < x.length; i++) {
        console.log(x[i])
        // console.log(x[i].innerText.toLowerCase().includes(inputText))
        if (x[i].innerText.toLowerCase().includes(inputText)) {
            x[i].style.display = "block";
        } else{
            x[i].style.display = 'none';
        }
    }
}