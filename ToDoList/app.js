const form = document.querySelector('form')
const inputText = document.querySelector('.textbar')
const grocerylist = document.querySelector('.grocery-list')


form.addEventListener('submit', function (e) {
    e.preventDefault()

    listShow()
})

function listShow() {
    let element = document.createElement('article')
    element.classList.add('item')
    // console.log(element)
    element.innerHTML = `<p class="title">${inputText.value}</p>
    <div class = "btn-container">
    <button class = "edit">
    <i class="fa-solid fa-pen-to-square"></i>
    </button>
    
    <button class = "delete">
    <i class="fa-solid fa-trash"></i>
    </button>
    </div>`
    grocerylist.appendChild(element)
    // console.log(title.innerText)

    inputText.value = ""
    const deleteItem = document.querySelector('.delete')
    const mainitem = document.querySelector('.item')

    function deleteList() {
        element.querySelector('.delete').addEventListener('click', () => {
            grocerylist.removeChild(element)
        })
    }
    deleteList()

    const editbtn = document.querySelector('.edit')


    element.querySelector('.edit').addEventListener('click', function () {
        const title = element.querySelector('.title');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = title.textContent;
        input.classList.add('edit-input');
        element.replaceChild(input, title); // Replace title with input for editing
        input.focus()

        input.addEventListener('blur', () => {
            title.textContent = input.value.trim()
            element.replaceChild(title, input)
        })
    })
}

