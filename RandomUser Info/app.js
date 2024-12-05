const data = [
    {
        img: 'https://randomuser.me/api/portraits/men/71.jpg',
        name: 'aadljfado',
        email: 'chandran.pujari@example.com',
        age: 58,
        street: 'asjkli',
        number: '(2134)13413',
        password: 'bookworm'
    },

    {
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Chandran Pujari',
        email: 'asdasdan.pujari@example.com',
        age: 38,
        street: '6357 Ranganathan St',
        number: '9906378489',
        password: 'bookworm'
    },
    {
        img: 'https://randomuser.me/api/portraits/men/33.jpg',
        name: 'Laurie Scott',
        email: 'laurie.scott@example.com',
        age: 24,
        street: '7152 Maple Ave',
        number: 'C31 F01-2006',
        password: 'batman'
    },
    {
        img: 'https://randomuser.me/api/portraits/men/99.jpg',
        name: 'Ernesto Nascimento',
        email: 'ernesto.nascimento@example.com',
        age: 51,
        street: '2387 Rua Santa Rita',
        number: '(80) 5342-8682',
        password: 'shirley'
    },
    {
        img: 'https://randomuser.me/api/portraits/women/27.jpg',
        name: 'Nima Budak',
        email: 'nima.budak@example.com',
        age: 60,
        street: '219 Hoevenaarsstraat',
        number: '(020) 6125766',
        password: 'grills'
    },
]

const detialabout = document.querySelector('.detial-about')
const icons = document.querySelectorAll('i')

function showInfo() {
    let random = Math.floor(Math.random() * data.length)

    let show = data.map(data => data)[random]
    const details = document.querySelector('.details')

    details.innerHTML = `
    <div class="img">
        <img src="${show.img}" alt="">
    </div>
    <div class="detial-about">
        <h3>My Name Is</h3>
        <h1>${show.name}</h1>
    </div>`


    const h3 = document.querySelector('h3')
    const h1 = document.querySelector('h1')


    icons.forEach((icon) => {
        icon.addEventListener('click', function (e) {
            icons.forEach((icon2) => {
                if (icon2.classList.contains('active')) {
                    icon2.classList.remove('active')
                }
            })
            e.target.classList.add('acitve')
            h1.innerText = show[e.target.id]
            h3.innerText = `My ${e.target.id} Is`
        })
    })
}

showInfo()

const randomBtn = document.querySelector('button')

randomBtn.addEventListener('click', function () {
    showInfo()
})


// another one method to do 

// const randomGenBtn = document.querySelector('button')
// const detialAboutUser = document.querySelector('.detial-about h1')
// const currentDetailShow = document.querySelector('.detial-about h3')
// const allInfo = document.querySelectorAll('i')

// let personInfo;

// function handleRandomUser() {
//     const randomNum = Math.floor(Math.random() * data.length)
//     const currentUser = data[randomNum]
//     personInfo = currentUser
//     currentDetailShow.innerText = `My Name Is`
//     allInfo.forEach((info) => {
//         info.classList.remove('active')
//     })
//     handleUserDetailChange(currentUser)
//     handlePersonUser(currentUser)
// }

// handleRandomUser()

// randomGenBtn.addEventListener('click', function () {
//     handleRandomUser()
// })

// function handleUserDetailChange(person) {
//     const selectedIcon = document.querySelector(`#name`)
//     selectedIcon.classList.add('active')
//     detialAboutUser.innerText = person.name
// }


// function handlePersonUser(personInfo) {
//     allInfo.forEach((ele, idx) => {
//         ele.addEventListener('click', (e) => {
//             allInfo.forEach((info) => {
//                 info.classList.remove('active')
//             })
//             e.target.classList.add('active')
//             currentDetailShow.innerText = `My ${e.target.id} Is`
//             detialAboutUser.innerText = personInfo[e.target.id]

//         })
//     })
// }

// handlePersonUser(personInfo)