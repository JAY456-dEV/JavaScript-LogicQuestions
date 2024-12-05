const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const imgurl = document.querySelector('.imgurl')
const contactInfo = document.querySelector('.contactInfo')
const salary = document.querySelector('.salary')
const address = document.querySelector('.address')
const dateInput = document.querySelector('.dateInput')
const email = document.querySelector('.email')

const submitBtnPopup = document.querySelector('.submitBtn')

const btnForEntryEmploye = document.querySelector('.btnForEntryEmploye')

const addEmployeeBtn = document.querySelector('.addEmployeeBtn')

const Employeenterpopup = document.querySelector('.Employe-enter-popup')
const removePopup = document.querySelector('.removePopup')

let saveEmployeeInfo = JSON.parse(localStorage.getItem('info')) || []

let id = 1

addEmployeeBtn.addEventListener('click', function (e) {
    Employeenterpopup.classList.remove('active')
})

submitBtnPopup.addEventListener('click', function (e) {
    e.preventDefault()
    if (firstName.value !== '' && lastName.value !== '' && contactInfo.value !== '' && salary.value !== '' && address.value !== '' && dateInput.value !== '' && address.value !== '') {

        saveEmployeeInfo.push({
            id: id++,
            uname: firstName.value,
            lastName: lastName.value,
            img: imgurl.value,
            contactInfo: contactInfo.value,
            salary: salary.value,
            dateInput: dateInput.value,
            email: email.value,
            address: address.value
        })

        localStorage.setItem('info', JSON.stringify(saveEmployeeInfo))
        showInfo()
        Employeenterpopup.classList.add('active')
        document.getElementById("myForm").reset();
    } else {
        alert('please fill all input')
    }
})

removePopup.addEventListener('click', function () {
    Employeenterpopup.classList.add('active')
})

const employeList = document.querySelector('.Employee-list')

function showInfo() {
    let saveInfo = ''
    saveEmployeeInfo.forEach((employe) => {
        saveInfo += `<div class="EmployeName">
                <p onclick="ClickAndGetInfo(this)">${employe.uname}</p>
                <div class="cancel-btn">
                    <i class="fa-solid fa-xmark" onclick="removeEmployee(${employe.id})"></i>
                </div>
            </div>`
    })
    employeList.innerHTML = saveInfo
}

showInfo()

const EmployeeinformationShow = document.querySelector('.Employee-information')

function ClickAndGetInfo(e) {
    let search = saveEmployeeInfo.filter((employe) => employe.uname.toLowerCase() === e.innerText.toLowerCase())
    // console.log(search)

    search.forEach((employeInfo) => {
        // console.log(employeInfo)
        EmployeeinformationShow.innerHTML = `<h2>Employee Information</h2>
            <img src="./user-picture.png" alt="">
            <h2>${employeInfo.uname + employeInfo.lastName}</h2>
            <p>${employeInfo.address}</p>
            <p>${employeInfo.email}</p>
            <p>Mobile:${employeInfo.contactInfo}</p>
            <p>DOB:${employeInfo.dateInput}</p>`
    })
}


function removeEmployee(id) {
    saveEmployeeInfo = saveEmployeeInfo.filter((employe) => employe.id !== id)

    localStorage.setItem('info', JSON.stringify(saveEmployeeInfo))
    showInfo()
}