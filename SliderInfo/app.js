const reviws = [
    {
        id: 1,
        name: "susan smith",
        job: "web Devloper",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },

    {
        id: 2,
        name: "jay smith",
        job: "web Devloper",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },

    {
        id: 3,
        name: "vishal",
        job: "ux ui designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },

    {
        id: 4,
        name: "zeel anderson",
        job: "this boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
]


// const img = document.getElementById('person-img')
// const author = document.getElementById('author')
// const job = document.getElementById('job')
// const text = document.getElementById('info')

// let currentitem = 0;

// function showperson(currentitem) {
//     const item = reviws[currentitem]
//     img.src = item.img
//     author.textContent = item.name
//     job.textContent = item.job
//     info.textContent = item.text
// }

// nextBtn.addEventListener('click', () => {
//     currentitem++
//     if(currentitem > reviws.length - 1){
//         currentitem = 0
//     }
//     showperson(currentitem)
// })

// prevBtn.addEventListener('click', () => {
//     currentitem--
//     if(currentitem <= 0){
//         currentitem = 3
//     }
//     showperson(currentitem)
// })

// console.log(currentitem)

// const randomBtn = document.querySelector('.random-btn')

// randomBtn.addEventListener('click',function () {
//     let random = Math.floor(Math.random () * 4)
//     currentitem = random
//     showperson(currentitem)
// })

const article = document.querySelector('.review')

let currentitem = 0;
// console.log(currentitem)

function showperson() { // isko hamne liya to abb currentitem aa rahe hai pehle nahi aa rahi thi kyuki ye function nahi tha ab hamne ye function banaya jab mai next pe click karuga tab usme se mai currentitem pass karuga
    const person = reviws.map(review => review)[currentitem]; // ye ek review ko leke dusre mai dalta hai one by one 
    // console.log(person.name)
    article.innerHTML = `<div class="img-container" id="${person.id}">
        <img src="${person.img}" id="person-img" alt="" />
      </div>
      <h4 id="author">${person.name}</h4>
      <p id="job">${person.job}</p>
      <p id="info">
        ${person.text}
      </p>
      <div class="button-container">
      <button class="prev-btn" onclick = "prev()">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button class="next-btn" onclick = "next()">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <!-- random button -->
    <button class="random-btn" onclick='handleRandom()'>surprise me</button>`
}

showperson()

// const save = reviws.map((item, idx) => {


// const nextBtn = document.querySelector('.next-btn')
// const prevBtn = document.querySelector('.prev-btn')

function next() {
    currentitem++
    if (currentitem > reviws.length - 1) { //ye check kar raha hai ke currentitem jo hai vo agar reviws ke length se bada hua to curritem ko 0 pe le jayega mtlb jo bhi img name sab likn pehle to 0 se start hoga to 0 > 3 hai to nahi to ye condition me jayege nahi or esa hi hona chahiye or fir agar ye 3 se badha tab ye condition me jayege ye contion 4 < 3 hoge tab curritem = 0 ho jayege
        currentitem = 0;
    }
    showperson()
}

function prev() {
    currentitem--
    if (currentitem < 0) { //ye check kar rah ahai ke agar ye 0 se niche gaya to curritem ko 3 de dega jese page last mai chala jayega baki 0 1 2 3 aya to vo jayega hi mtlb change hoga name img vagera 0 < 0 false to vahi  rahega page pe 1 < 0 false hai to change hoge -1 < 0 to ye true hoga or curritem = 3 hoga
        currentitem = reviws.length - 1
    }
    showperson()
}

function handleRandom() {
    let random = Math.floor(Math.random() * reviws.length)
    currentitem = random
    showperson()
}




