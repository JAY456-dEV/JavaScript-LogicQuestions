const addBtn = document.querySelector('.btn-success')

let edit_id = null;

let userDetails = JSON.parse(localStorage.getItem('userdetail')) || []

const uname = document.getElementById('name')
const age = document.getElementById('age')
const address = document.getElementById('Address')
const email = document.getElementById('email')

addBtn.addEventListener('click', function (e) {
    e.preventDefault()

    if (edit_id !== null) {
        userDetails[edit_id].name = uname.value
        userDetails[edit_id].age = age.value
        userDetails[edit_id].address = address.value
        userDetails[edit_id].email = email.value

        localStorage.setItem('userdetail', JSON.stringify(userDetails))
        edit_id = null
        addBtn.innerText = 'Add Data'
        addBtn.classList.remove('update-Btn')
        displayInfo()
        e.target.reset()
    } else {
        checkValidation()
    }

})

function checkValidation() {
    if (uname.value === '') {
        alert('empty name')
    } else if (age.value === '') {
        alert('empty age')
    } else if (address.value === '') {
        alert('empty address')
    } else if (email.value === '') {
        alert('empty email')
    } else {
        IdentityStore()
        displayInfo()
    }
}

function IdentityStore() {
    userDetails.push({
        'name': uname.value,
        'age': age.value,
        'address': address.value,
        'email': email.value,
    })

    localStorage.setItem('userdetail', JSON.stringify(userDetails))
    uname.value = ''
    age.value = ''
    address.value = ''
    email.value = ''
}

const tdata = document.querySelector('.tdata')

function displayInfo() {
    let userInfo = '';

    userDetails.forEach((user, idx) => {
        userInfo += `<tr>
        <th>${user.name}</th>
        <th>${user.age}</th>
        <th>${user.address}</th>
        <th>${user.email}</th>
        <th>
            <button onclick='edititem(${idx})'>Edit</button> 
            <button onclick='removelist(${idx})' >Delete</button>
        </th>
    </tr>`
    })
    tdata.innerHTML = userInfo
}

displayInfo()

function removelist(idx) {
    userDetails.splice(idx, 1)
    localStorage.setItem('userdetail', JSON.stringify(userDetails))
    displayInfo()
}

function edititem(idx) {
    edit_id = idx

    addBtn.innerText = 'Update'
    addBtn.classList.add('update-Btn')

    uname.value = userDetails[idx].name
    age.value = userDetails[idx].age
    address.value = userDetails[idx].address
    email.value = userDetails[idx].email
}

// function checkReapet() {
//     for (let user of userDetails) {
//         if (user.name === uname.value || user.email === email.value) {
//             alert('username or email already existing')
//             return 1
//         } else {
//             checkValidation()
//         }
//     }
// }
