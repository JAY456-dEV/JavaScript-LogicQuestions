const nameInput = document.querySelector('.nameInput')
const category = document.querySelector('.categoryInput')
const year = document.querySelector('.yearInput')

const addList = document.querySelector('.addList')

const tbody = document.querySelector('tbody')

let savedValue = JSON.parse(localStorage.getItem('list')) || []

addList.addEventListener('click', function (e) {
    e.preventDefault()
    if (nameInput.value !== '' && category.value !== '' && year.value !== '') {
        savedValue.push({
            uname: nameInput.value,
            category: category.value,
            year: year.value
        })

        localStorage.setItem('list', JSON.stringify(savedValue))

        nameInput.value = ''
        category.value = ''
        year.value = ''
    } else {
        alert('please Fill All Input')
    }

    showItem()
})


function showItem() {
    let saveInfo = ''
    savedValue.forEach((list, idx) => {
        saveInfo += `<tr>
            <td>${idx + 1}</td>
            <td id="item${idx}">${list.uname}</td>
            <td id="item${idx}">${list.category}</td>
            <td id="item${idx}">${list.year}</td>
            <td><i class="fa-regular fa-pen-to-square" onclick="edit(${idx})"></i></td>
            <td><i class="fa-regular fa-trash-can" onclick="deleteItem(${idx})"></i></td>
            </tr>`
    })
    tbody.innerHTML = saveInfo
}

showItem()

const updateBtn = document.querySelector('.updateBtn')

function edit(id) {
    nameInput.value = savedValue[id].uname
    category.value = savedValue[id].category
    year.value = savedValue[id].year

    const updateBtn = document.querySelector('.updateBtn')

    updateBtn.addEventListener('click', function (e) {
        e.preventDefault()

        savedValue[id].uname = nameInput.value
        savedValue[id].category = category.value
        savedValue[id].year = year.value

        localStorage.setItem('list', JSON.stringify(savedValue))
        showItem()
        nameInput.value = ''
        category.value = ''
        year.value = ''
    })
}

const SearchInput = document.querySelector('.searchInput')

function Search() {
    SearchInput.addEventListener('input', function (e) {
        let show = savedValue.filter((info) => info.uname.toLowerCase().includes(e.target.value.toLowerCase()))

        let saveInfo1 = ''
        console.log(show)
        show.forEach((list, idx) => {
            saveInfo1 += `<tr>
            <td>${idx + 1}</td>
            <td id="item${idx}">${show[idx].uname}</td>
            <td id="item${idx}">${show[idx].category}</td>
            <td id="item${idx}">${show[idx].year}</td>
            <td><i class="fa-regular fa-pen-to-square" onclick="edit(${idx})"></i></td>
            <td><i class="fa-regular fa-trash-can"></i></td>
            </tr>`
        })
        tbody.innerHTML = saveInfo1
    })
}

Search()

function deleteItem(idx) {
    savedValue.splice(idx, 1)
    localStorage.setItem('list', JSON.stringify(savedValue))
    showItem()
}