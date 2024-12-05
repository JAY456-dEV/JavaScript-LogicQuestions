const people = [
    {
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        name: 'peter doe',
        job: 'product manager',
        text: `Lorem ipsum dolor sit amet consectetur adipsoluptas sint deserunt dicta nihil nam omnis? `,
    },
    {
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        name: 'susan doe',
        job: 'developer',
        text: `Lorem ipsum dosus recusandae officia voluptas sint deserunt dicta nihil nam omnis?`,
    },
    {
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        name: 'emma doe',
        job: 'designer',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quoeiusrnt deserunt dicta nihil nam omnis?`,
    },
];

const profilePush = document.querySelector('.profile')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

let currentUser = 0

function showProfile() {
    let show = people.map(user => user)[currentUser]

    profilePush.innerHTML = `<h1>Reviews</h1>
    <img src="${show.img}" alt="">
    <h3 class="name">${show.name}</h3>
    <P class="role">${show.job}</P>
    <p class="para">${show.text}</p>`
}

right.addEventListener('click', function () {
    if (currentUser >= people.length - 1) {
        currentUser = -1
        console.log(currentUser)
    }
    currentUser++
    showProfile()
})

left.addEventListener('click', function () {
    if (0 >= currentUser) {
        currentUser = people.length
    }
    currentUser--
    showProfile()
})
