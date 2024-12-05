const products = [
    {
        id: '0',
        title: 'high-back bench',
        company: 'ikea',
        image: 'https://course-api.com/images/store/product-1.jpeg',
        price: 9.99,
    },
    {
        id: '1',
        title: 'albany table',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-2.jpeg',
        price: 79.99,
    },
    {
        id: '2',
        title: 'accent chair',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-3.jpeg',
        price: 25.99,
    },
    {
        id: '3',
        title: 'wooden table',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-4.jpeg',

        price: 45.99,
    },
    {
        id: '4',
        title: 'dining table',
        company: 'caressa',
        image: 'https://course-api.com/images/store/product-5.jpeg',

        price: 6.99,
    },
    {
        id: '5',
        title: 'sofa set',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-6.jpeg',
        price: 69.99,
    },
    {
        id: '6',
        title: 'modern bookshelf',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-7.jpeg',
        price: 8.99,
    },
    {
        id: '7',
        title: 'emperor bed',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-8.jpeg',
        price: 21.99,
    },
    {
        id: '8',
        title: 'utopia sofa',
        company: 'marcos',
        image: 'https://course-api.com/images/store/product-9.jpeg',
        price: 39.95,
    },
    {
        id: '9',
        title: 'entertainment center',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-10.jpeg',
        price: 29.98,
    },
    {
        id: '10',
        title: 'albany sectional',
        company: 'ikea',
        image: 'https://course-api.com/images/store/product-11.jpeg',
        price: 10.99,
    },
    {
        id: '11',
        title: 'leather sofa',
        company: 'liddy',
        image: 'https://course-api.com/images/store/product-12.jpeg',
        price: 9.99,
    },
];


let storeItem = JSON.parse(localStorage.getItem('store')) || []


const cateImg = document.querySelector('.cate-img')

//show all product in home page 

function showItem() {
    products.forEach((item, idx) => {
        cateImg.innerHTML += `
        <div class="img-1">
                    <img src="${item.image}" alt="">
                    <p>${item.title}</p>
                    <h3>Price : ${item.price}</h3>
                    <a href=""><i class="fa-solid fa-magnifying-glass prod-search"></i></a>
                    <button href="" onclick="cartOpen(${item.id})"><i class="fa-brands fa-opencart prod-cart"></i></button>
                </div>`
    })
}

showItem()

const cartALL = document.querySelectorAll('.fea-cart')
const cartBag = document.querySelector('.cartBag')

const cartIcon = document.querySelector(".cart")

// isee cart pe click karuga nav vala to right se cart khulega vu hai niche vala

cartIcon.addEventListener('click', function () {
    cartBag.classList.remove('show')
})

// img ke upper jab hover karu or cart pe click karke item add karu to cartOpen hoga niche vala 

function cartOpen(id) {
    // console.log(id)
    cartBag.classList.remove('show')
    document.querySelector('body').style.backgroundColor = ''

    let search = storeItem.find((prod) => prod.id == id)
    // console.log(search)

    if (search === undefined) {
        storeItem.push({
            id: id,
            item: 1,
        })
    } else {
        search.item++
    }
    localStorage.setItem("store", JSON.stringify(storeItem))
    showItemInCart()
}


const cancel = document.querySelector('.fa-xmark')

cancel.addEventListener('click', function () {
    cartBag.classList.add('show')
    document.querySelector('body').style.backgroundColor = ''
})

const cartbagitem = document.querySelector('.cartbagitem')


function showItemInCart() {
    let cartItemSave = ''
    let show = storeItem.map((item) => {
        // console.log(item)
        let search = products.find((prod) => prod.id == item.id)
        // console.log(search.id)
        cartItemSave += `<div class="cartFlex">
                <div class="imgcart">
                    <img src="${search.image}" alt="">
                </div>
    
                <div class="cartDetail">
                    <p>${search.title}</p>
                    <p class="price">$${search.price}</p>
                    <button class="remove" onclick="remove(${search.id})">Remove</button>
                </div>

                <div class="cartPlusMinus">
                    <i class="fa-solid fa-angle-left" onclick="removeCartItem(${search.id})"></i>
                    <p>${item.item}</p>
                    <i class="fa-solid fa-angle-right" onclick="addCartItem(${search.id})"></i>
                </div>
            </div>`
    })
    cartbagitem.innerHTML = cartItemSave
    // console.log(cartbagitem)
}
showItemInCart()


function addCartItem(id) {
    let search = storeItem.find((prod) => prod.id === id)
    search.item++
    localStorage.setItem("store", JSON.stringify(storeItem))
    showItemInCart()
    totalCartItem()
    totalItem()
}

function removeCartItem(id) {
    let search = storeItem.find((prod) => prod.id === id)
    search.item--
    storeItem = storeItem.filter((prod) => prod.item !== 0)
    localStorage.setItem("store", JSON.stringify(storeItem))
    showItemInCart()
    totalItem()
    totalCartItem()
}

function remove(id) {
    storeItem = storeItem.filter((prod) => prod.id !== id)
    localStorage.setItem("store", JSON.stringify(storeItem))
    showItemInCart()
    totalCartItem()
    totalItem()
}

const cartTotalAmount = document.querySelector('.cartTotalMain')

function totalItem() {
    let show = storeItem.map((item, idx) => {
        let search = products.find((prod) => prod.id == item.id)

        return item.item * search.price
    }).reduce((acc, curr) => {
        return acc + curr
    }, 0)
    cartTotalAmount.innerText = `TOTAL : $${show.toFixed(2)}`
}

totalItem()



// panel control down side click company name filter

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
                // hamne niche += kiya hai to jo value hoga company ke hissab se vo hi dikhayega or koi dusra nahi dikhayega or dusre bar jab ham kisse pe click karege to ye function fir se run hoga or main upper cateImg.innerHTML = '' khalin karva ke rakha hai to pehle ka khali hoke new ka aajayega
                cateImg.innerHTML += `
                  <div class="img-1">
                        <img src="${prod.image}" alt="">
                        <p>${prod.title}</p>
                        <h3>Price : $${prod.price}</h3>
                    </div>`
            })
        }
    })
})

const searchInput = document.querySelector('.searchInput')

function search() {
    searchInput.addEventListener('input', function (e) {
        // console.log(e.target.value)
        let searchValue = e.target.value
        let search = products.filter((prod) => prod.title.toLowerCase().includes(searchValue.toLowerCase()))
        cateImg.innerHTML = ''
        search.forEach((prod, idx) => {
            // console.log(prod)
            cateImg.innerHTML += `
              <div class="img-1">
                    <img src="${prod.image}" alt="">
                    <p>${prod.title}</p>
                    <h3>Price : $${prod.price}</h3>
                </div>`
        })
    })
}

search()

const rangevalue = document.querySelector('.rangeInput')
const rangeValueText = document.querySelector('.range-value')

rangevalue.addEventListener('input', function (e) {
    console.log(e.target.value)
    let show = products.filter((prod) => prod.price < e.target.value)
    rangeValueText.innerText = `Value : $${e.target.value}`

    cateImg.innerHTML = ''

    if (show.length == 0) {
        cateImg.innerHTML = "Sorry, No Products Matched Your Search"
        cateImg.style.fontSize = '30px'
    } else {
        show.forEach((prod, idx) => {
            // console.log(prod)
            cateImg.innerHTML += `
                  <div class="img-1">
                        <img src="${prod.image}" alt="">
                        <p>${prod.title}</p>
                        <h3>Price : $${prod.price}</h3>
                    </div>`
        })
    }
})


const cartItemTotal = document.querySelector('.cartItemTotal')

function totalCartItem() {
    let totalItem = storeItem.map((item, idx) => {
        return item.item
    }).reduce((acc, curr) => {
        return acc + curr
    }, 0)

    cartItemTotal.innerText = totalItem
}

totalCartItem()