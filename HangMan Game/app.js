const keyBtn = document.querySelectorAll('button')

let ques = [
    {
        ques: 'A tall plant with a large yellow flower head.',
        ans: 'CANNALILY'
    },
    {
        ques: ' A three-dimensional art form created by shaping or combining materials.',
        ans: 'SCULPTURE'
    },
    {
        ques: 'A genre of music characterized by improvisation and syncopation.',
        ans: ' JAZZ',
    },

    {
        ques: 'An expedition or journey, typically to observe wildlife in their natural habitat.',
        ans: 'SAFARI'
    },
    {
        ques: 'A musical instrument with strings.',
        ans: 'GUITAR'
    },
    {
        ques: 'A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.',
        ans: 'VOLCANO'
    },
]

// console.log(ques[0].ans.split(''))

const ques_text = document.querySelector('.ques-main')

let number = 0

function displayLi() {
    let random = Math.floor(Math.random() * ques.length)
    ques_text.innerHTML = `<p class="question-text">question : <span>${ques[random].ques}</span></p>`
    const ulparent = document.querySelector('.input-line')
    const Uline = document.createElement('ul')
    Uline.classList.add('currectWord-list')
    ulparent.appendChild(Uline)

    ques[random].ans.split('').forEach((item) => { // ye jitna bhi length hoga ans ka utne bar chalega forEach ot utne bar li create karega
        const createLi = document.createElement('li')
        createLi.classList.add('character')

        Uline.appendChild(createLi)
    })

    const li = document.querySelectorAll('.character')

    keyBtn.forEach((btn) => {
        btn.addEventListener('click', function (e) {

            e.target.disabled = true
            e.target.style.backgroundColor = 'rgb(21, 69, 69)'
            // console.log(e.target.innerText)

            ques[random].ans.split('').forEach((word, index) => {
                if (word === e.target.innerText) { // ye check karega ke jes par click kiya hai mene uska word equal hai kya jo mera ans hai uske underr ke value se or isme split kiya hai to sare alag alag ho gaye hoge word to foreach lagaya hai mene ans pe kyuki split kiya to mujhe array mela or uspe forEach lagaya hai to har ek text ke liye check hoga or jo text match hoga uska index bhi mujhe melega kyuki jese hi koi text match hoga vese vo ruk jayega or jo match huya uska index mujhe de dega // fir mai us index ko sare li ke node list le le hai mene ab mai jo bhi match hoga uske index ko li ke node list mai dal duga jese mere ko particular li ka location melega jissee jo bhi pura text hoga useke value ko mai usee line mai daluga like jay hai to usme mereko a ko dalna hoga bich mai to uske liye maine a dabaya or uska index milega or usko mai li mai daluga jisse mereko li ke location melege mtlb bich mai ayega mera word a or mai us match index ko mai split mai bhi daluga jisse merekko perticular word mele or vo inner text mai jaye
                    console.log(index) //jis word ke ssath match hoga uska hi index dega mujhe
                    // console.log(ques[random].ans.split('')[index])
                    li[index].innerText = word // ye word vahi hoga jo equal hoga e.atrget.innetText se  // ques[random].ans.split('')[index]  ye bhi same text hi dega jo split ke index pe hoga jo true ka index hoga jab true hoga tab ka index dega
                }

                // if (ques[random].ans.split('').every(words => true)) {
                //     console.log('win')
                // }
            })

            // hamne ye niche wala if else ko upper na rakh ke niche new if else maii rakha hai kyuki wo upper forEach loop cha raha tha or harr bar word check karta or wrong hota to har bar ek ek word ke liye else mai jata or number ko ++ karta jata or ek hi galat charchter add karne se pura putla aa jata is liye hamne niche vale condition check karvayee nayee see
            if (ques[random].ans.split('').every(words => words !== e.target.innerText)) { // ye hamare forEach ke tarah bar bar nahi chalge ye pura word mai check karega ke jo text pe dabaya wo match nahi kar raha hai kya gar match nahi kiya to  number++ hoga 1 number badhega wrong answer ka 
                const wrong = document.querySelector('.wrong span')
                number++

                wrong.innerHTML = `${number} / 6`
                // console.log(number)

                const hangman = document.querySelector('.hangman')

                if (number == 1) {
                    hangman.src = './download (1).svg'
                } else if (number == 2) {
                    hangman.src = './download (2).svg'
                } else if (number == 3) {
                    hangman.src = './download (3).svg'
                } else if (number == 4) {
                    hangman.src = './download (4).svg'
                } else if (number == 5) {
                    hangman.src = './download (5).svg'
                } else if (number == 6) {
                    hangman.src = './download (6).svg'
                }
                playAgain(random, number)
            }
        })
    })
}


displayLi()

const realword = document.querySelector('.realword span')
const mainsec = document.querySelector('.main-sec')
const playagainBtn = document.querySelector('.playagain')
const hangman = document.querySelector('.hangman')
const li = document.querySelectorAll('.character')
const wrong = document.querySelector('.wrong span')


function playAgain(random, number) {
    if (number === 6) {
        mainsec.style.display = 'block'
        realword.innerText = `${ques[random].ans}`

        playagainBtn.addEventListener('click', function () {
            hangman.src = './download.svg'
            mainsec.style.display = 'none'
            number = 0
            wrong.innerHTML = `${number} / 6`
            e.target.disabled = false
            e.target.style.backgroundColor = 'darkcyan'
            li.innerText = ''
        })
        return
    }
}

// function loseGame(number) {
//     if (number === 6) {
//         playAgain(random)
//     }
// }
