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

const featured = document.querySelector('.featured')

function ShowItems() {
    let show = products.map((prod, idx) => {
        return prod
    })

    for (let i = 0; i < 3; i++) {
        let prod = products[i]
        featured.innerHTML += `<div class="product-1">
        <img src="${prod.image}" alt="">
        <p>${prod.title}</p> 
        <h3>$9.99</h3>
        <a href=""><i class="fa-solid fa-magnifying-glass common-${i + 1} show "></i></a>
        <button onclick="cartOpen(${prod.id})"><i class="fa-brands fa-opencart fea-cart common-${i + 1} show clickJs" ></i></button>
        </div>`
    }
}

ShowItems()

const cartALL = document.querySelectorAll('.fea-cart')
const cartBag = document.querySelector('.cartBag')

let storeItem = JSON.parse(localStorage.getItem('store')) || []

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

const cartIcon = document.querySelector(".cart")
const cartItemTotal = document.querySelector('.cartItemTotal')
const cartTotalAmount = document.querySelector('.cartTotal')

cartIcon.addEventListener('click', function () {
    cartBag.classList.remove('show')
})

function totalItem() {
    let show = storeItem.map((item, idx) => {
        let search = products.find((prod) => prod.id == item.id)

        return item.item * search.price
    }).reduce((acc, curr) => {
        return acc + curr
    }, 0)
    cartTotalAmount.innerText = `$${show.toFixed(2)}`
}

totalItem()

function totalCartItem() {
    let totalItem = storeItem.map((item, idx) => {
        return item.item
    }).reduce((acc,curr)=>{
        return acc+ curr
    },0)

    cartItemTotal.innerText = totalItem
}

totalCartItem()