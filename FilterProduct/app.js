const products = [
    {
        id: 'rec43w3ipXvP28vog',
        title: 'high-back bench',
        company: 'ikea',
        image: 'https://course-api.com/images/store/product-1.jpeg',
        price: 9.99,
    },
    {
        id: 'rec4f2RIftFCb7aHh',
        title: 'albany table',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-2.jpeg',
        price: 79.99,
    },
    {
        id: 'rec8kkCmSiMkbkiko',
        title: 'accent chair',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-3.jpeg',
        price: 25.99,
    },
    {
        id: 'recBohCqQsot4Q4II',
        title: 'wooden table',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-4.jpeg',

        price: 45.99,
    },
    {
        id: 'recDG1JRZnbpRHpoy',
        title: 'dining table',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-5.jpeg',

        price: 6.99,
    },
    {
        id: 'recNWGyP7kjFhSqw3',
        title: 'sofa set',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-6.jpeg',
        price: 69.99,
    },
    {
        id: 'recZEougL5bbY4AEx',
        title: 'modern bookshelf',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-7.jpeg',
        price: 8.99,
    },
    {
        id: 'recjMK1jgTb2ld7sv',
        title: 'emperor bed',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-8.jpeg',
        price: 21.99,
    },
    {
        id: 'recmg2a1ctaEJNZhu',
        title: 'utopia sofa',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-9.jpeg',
        price: 39.95,
    },
    {
        id: 'recvKMNR3YFw0bEt3',
        title: 'entertainment center',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-10.jpeg',
        price: 29.98,
    },
    {
        id: 'recxaXFy5IW539sgM',
        title: 'albany sectional',
        company: 'ikea',
        image: 'https://course-api.com/images/store/product-11.jpeg',
        price: 10.99,
    },
    {
        id: 'recyqtRglGNGtO4Q5',
        title: 'leather sofa',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-12.jpeg',
        price: 9.99,
    },
];

const cateImg = document.querySelector('.cate-img')

function showItem() {
    products.forEach((item, idx) => {
        cateImg.innerHTML += `<div class="img-1" id="${item.title}">
                    <img src="${item.image}" alt="">
                    <p>High-Back Bench</p>
                    <h3>Price : ${item.price}</h3>
                </div>`
    })
}

showItem()

const li = document.querySelectorAll('li')

li.forEach((li, idx) => {
    li.addEventListener('click', function (e) {
        let show = products.filter((item) => e.target.classList[0] == item.company)
        cateImg.innerHTML = ''
        console.log(show)
        if (show.length == 0) { // ye tab hoga jab all pe click karuga
            showItem()
        } else {
            show.forEach((prod, idx) => {
                // console.log(prod)
                cateImg.innerHTML = ''
                // hamne niche += kiya hai to jo value hoga company ke hissab se vo hi dikhayega or koi dusra nahi dikhayega or dusre bar jab ham kisse pe click karege to ye function fir se run hoga or main upper cateImg.innerHTML = '' khalin karva ke rakha hai to pehle ka khali hoke new ka aajayega
                cateImg.innerHTML += `
                  <div class="img-1" id="${prod.title}">
                        <img src="${prod.image}" alt="">
                        <p>High-Back Bench</p>
                        <h3>Price : ${prod.price}</h3>
                    </div>`
            })
        }
    })
})

const searchInput = document.querySelector('input')

function search() {
    searchInput.addEventListener('input', function (e) {
        // console.log(e.target.value)
        let searchValue = e.target.value
        let search = products.filter((prod) => prod.title.toLowerCase().includes(searchValue.toLowerCase()))
        cateImg.innerHTML = ''
        search.forEach((prod, idx) => {
            // console.log(prod)
            cateImg.innerHTML += `
              <div class="img-1" id="${prod.title}">
                    <img src="${prod.image}" alt="">
                    <p>High-Back Bench</p>
                    <h3>Price : ${prod.price}</h3>
                </div>`
        })
    })
}

search()