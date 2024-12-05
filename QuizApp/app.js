const mainadd = document.querySelector('.main-add')

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answer: [
            { opt1: "js", currect: false },
            { opt2: "scripting", currect: false },
            { opt3: "javascript", currect: false },
            { opt4: "script", currect: true },
        ]
    },

    {
        question: "What is the correct way to declare a variable in JavaScript? ",
        answer: [
            { opt1: "variable x = 10", currect: false },
            { opt2: "var x = 10; ", currect: true },
            { opt3: " x = 10;", currect: false },
            { opt4: "int x = 10; ", currect: false },
        ]
    },

    {
        question: "What will be the output of the following code snippet? ",
        answer: [
            { opt1: "4", currect: false },
            { opt2: "22", currect: false },
            { opt3: "22", currect: true },
            { opt4: "4", currect: false },
        ]
    },

    {
        question: "How do you check if a variable is an array in JavaScript? ",
        answer: [
            { opt1: "isArray(x)", currect: true },
            { opt2: "x.isArray() ", currect: false },
            { opt3: " x instanceof Array ", currect: false },
            { opt4: "typeof Array ", currect: false },
        ]
    },

    {
        question: "How do you properly comment on a single line in JavaScript?",
        answer: [
            { opt1: "# This is a comment. ", currect: false },
            { opt2: " // This is a comment", currect: true },
            { opt3: "/* This is a comment. */ ", currect: false },
            { opt4: "<!-- This is a comment. --> ", currect: false },
        ]
    },
]

let questionDetails = document.querySelector('.ques')
let opt1 = document.querySelector('.opt1')
let opt2 = document.querySelector('.opt2')
let opt3 = document.querySelector('.opt3')
let opt4 = document.querySelector('.opt4')

let currentIdx = 0; //ye badhta jayega 
let currentopt = 0; // ye 0 he rahega

function displayInfo() { //ham isko add pehle localstoarge mai rakh ke particular question ko map se ya foreach se accses kar ke kar sakte the 
    //agar localstorage mai se bhi get karke value lane ho to la sakte hai
    if (currentIdx > questions.length - 1) {
        alert("question End")
        return
    } else {
        let quest = questions[currentIdx]
        // let show = questions.map(ques => ques)[currentIdx] you need to push in innerHtml
        questionDetails.innerText = quest.question
        opt1.innerText = quest.answer[currentopt].opt1 
        opt2.innerText = quest.answer[currentopt + 1].opt2
        opt3.innerText = quest.answer[currentopt + 2].opt3
        opt4.innerText = quest.answer[currentopt + 3].opt4
    }
}

const nextbtn = document.querySelector('.next-ques')

nextbtn.addEventListener('click', function (e) {
    e.preventDefault()
    currentIdx++
    displayInfo()
    storeQuestion()
    reset()
    // if(timer.innerText < 30 ){
    //     timer.innerText = 30;
    //     clearInterval(interValid)
    // } else {
    //     quesTimer()
    // }

    // storeQuestion()
})

// Local Storage mai Problem Hai Check

let LocalSavedQuestion = JSON.parse(localStorage.getItem("LocalSaved")) || []

function storeQuestion() {
    quest = questions[currentIdx] 
    console.log(quest)
    LocalSavedQuestion.push({
        "quest": questions,
    })

    localStorage.setItem("LocalSaved", JSON.stringify(LocalSavedQuestion))
}

storeQuestion()

const selectQues = document.querySelectorAll('.first-op')
const score = document.querySelector('.score-board')
let questionText = document.querySelector('.questionText')

let scoreUpdate = 0;

function checkTrueFalse() {
    selectQues.forEach((option, idx) => {
        option.addEventListener('click', function (opt) {
            let optid = option.id;
            if (LocalSavedQuestion[0].quest[currentIdx].answer[optid - 1].currect) {
                option.classList.add('right-ans')
                score.innerText = `${++scoreUpdate} / ${questions.length}`
                selectQues.forEach((opx) => {
                    opx.classList.add('disabled')
                })

            } else {
                option.classList.add('wrong-ans')
                selectQues.forEach((opx) => {
                    opx.classList.add('disabled')
                })
            }
        })
    })
}

checkTrueFalse()

function reset() {
    selectQues.forEach((option) => {
        option.classList.remove('right-ans')
        option.classList.remove('wrong-ans')
        option.classList.remove('disabled')
    })
}


const timer = document.querySelector('.time-counter')

let speed = 30
function quesTimer() {

    let totalTime = parseInt(timer.dataset.number)
    let intialTime = parseInt(timer.innerText)

    let decrementNumber = Math.trunc(totalTime / speed) 
    let interValid;

    if (intialTime === 0) {
        return
    } else if (!interValid) {
        timer.innerText = parseInt(intialTime - decrementNumber)
        interValid = setTimeout(quesTimer, 1000) 
    }
}

// quesTimer()

// function CheckTrueFalse() {


// function checkQuestion() {
// }

// let LocalSavedQuestion = JSON.parse(localStorage.getItem("LocalSavedQuestion")) || []
// // console.log(questions[0].answer[0])
// function storeQuestion() {
//     // console.log(quest)
//     LocalSavedQuestion.push({
//         "question": questions
//     })

//     localStorage.setItem("question", JSON.stringify(LocalSavedQuestion))
// }

// storeQuestion()

//const ques = qusetion.map(ques => ques)[currentIdx]

// function displayQuestions() {
//     // let quest = "";
//     mainadd.innerHTML += questions.forEach((ques, idx) => {
//         return `<div class="question-sec" id="1">
//             <div class="ques">
//                 <h2>${questions[idx]}</h2>
//             </div>
//         </div>

//         <div class="ques-timer">
//             <h2>00:30</h2>
//         </div>

//         <div class="ques-option">
//             <div class="first-op">
//                 <h3>${questions[0].answer[0]}</h3>
//                 <i class="fa-solid fa-check"></i>
//                 <i class="fa-solid fa-xmark"></i>
//             </div>

//             <div class="first-op">
//                 <h3>${questions[0].answer[0 + 1]}</h3>
//                 <i class="fa-solid fa-check"></i>
//                 <i class="fa-solid fa-xmark"></i>
//             </div>

//             <div class="first-op">
//                 <h3>${questions[0].answer[0 + 2]}</h3>
//                 <i class="fa-solid fa-check"></i>
//                 <i class="fa-solid fa-xmark"></i>
//             </div>

//             <div class="first-op">
//                 <h3>${questions[0].answer[0 + 3]}</h3>
//                 <i class="fa-solid fa-check"></i>
//                 <i class="fa-solid fa-xmark"></i>
//             </div>
//             div class="next-ques">
//                     <a href="">Next > </a>
//                 </div
//         </div>`
//         console.log(ques)
//     })
// }

// displayQuestions()const mainAdd = document.querySelector('.mainadd');

// const nextbtn = document.querySelector('.next-ques')

// nextbtn.addEventListener('click',function (e) {
//     e.preventDefault()
//     // currentIdx++

//     displayQuestions()
// })