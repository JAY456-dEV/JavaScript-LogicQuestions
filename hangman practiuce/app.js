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

const keyBtn = document.querySelectorAll('button')

const quesmain = document.querySelector('.ques-main')

let number = 0

function questionShow() {
    let random = Math.floor(Math.random() * ques.length)

    quesmain.innerHTML = `<p class="question-text">question : <span>${ques[random].ques}</span></p>`

    const ulParent = document.querySelector('.input-line')
    const ul = document.createElement('ul')
    ul.classList.add('currectWord-list')
    ulParent.appendChild(ul)
    // console.log(ulParent)

    ques[random].ans.split('').forEach(() => {
        const li = document.createElement('li')

        li.classList.add('character')
        ul.appendChild(li)
    })

    const allLi = document.querySelectorAll('.character')

    keyBtn.forEach((key) => {
        key.addEventListener('click', function (e) {

            e.target.disabled = true
            e.target.style.backgroundColor = 'rgb(21, 69, 69)'

            ques[random].ans.split('').forEach((word, index) => {
                if (word === e.target.innerText) {
                    allLi[index].innerText = word
                }
            })

            ques[random].ans.split('').every((word) => {
                const wrong = document.querySelector('.wrong span')
                if (word !== e.target.innerText){
                    number++

                }
            })
        })
    })

}

questionShow()