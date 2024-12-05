const addText = document.querySelector('.addnote')
const note = document.querySelector('.note')
const entertext = document.querySelector('.enterytext')

addText.addEventListener('click', function (e) {
    e.preventDefault()
    displayTextBoard()
})

// let storeText = JSON.parse(localStorage.getItem("notes")) || []
function shownote() {
    note.innerHTML = localStorage.getItem("save") // ye stay rakhenga refresh par bhi notes ko 
}

shownote()

function saveItem() {
    localStorage.setItem("save", note.innerHTML)
}

let idx = 0
function displayTextBoard() {
    note.innerHTML += `
   <p class="entertext" contenteditable="true">
   <img src="./delete.png" width="20px" alt=""></p>
   `
    saveItem()
}


const deleteicon = document.querySelector('.delete')

note.addEventListener('click', function (e) { // ye pure note pe click hoga par jab uske target mai Img ayega recycle vala tabhi ye kam karega kyuki niche condition lagaee hai
    if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        saveItem()
    }
    else if (e.target.tagName === "p") {
        entertext = document.querySelectorAll('.entertext')
        entertext.forEach(nt => {
            nt.onkeyup = function () {
                saveItem()
            }
        })
    }
})
