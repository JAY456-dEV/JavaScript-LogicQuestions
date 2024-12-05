const addBtn = document.querySelector('#addBtn')
const main = document.querySelector('#main')

addBtn.addEventListener('click', function () {
    addNote()
})

const addNote = (text = '') => {
    const note = document.createElement('div')
    note.classList.add('note')

    note.innerHTML = `<div class="tool">
        <i class="fa-solid fa-floppy-disk save"></i>
        <i class="fa-solid fa-trash delete"></i>
    </div>
<textarea>${text}</textarea>`;

    note.querySelector('.delete').addEventListener('click', function () {
        note.remove()
    })

    note.querySelector('.save').addEventListener('click', function () {
        saveNote()
    })

    note.addEventListener('focusout', function () {
        saveNote()
    })

    main.appendChild(note)
    saveNote()
}


const saveNote = () => {
    const notes = document.querySelectorAll('.note textarea')
    const data = []

    notes.forEach((note) => {
        data.push(note.value)
    })

    if (data.length === 0) {
        localStorage.removeItem('notes')
    } else {
        localStorage.setItem('notes', JSON.stringify(data))
    }
}


(
    function () {
        const Lsnotes = JSON.parse(localStorage.getItem('notes'))
        if (Lsnotes === null) {
            addNote()
        } else {
            Lsnotes.forEach((lsnote) => {
                addNote(lsnote)
            })
        }
    }
)()
