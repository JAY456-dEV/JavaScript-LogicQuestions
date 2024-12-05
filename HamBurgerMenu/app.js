const clickInput = document.querySelectorAll('.goal-container')
const inputField = document.querySelectorAll('.goal-input')

let storeInput = JSON.parse(localStorage.getItem('allGoals')) || {}

const allquotes = [
    'raise the bar by compliting task ',
    'well begun is half done',
    "just a step away,keep going",
    'whoa you just completed',
]

function store() {
    inputField.forEach((field, idx) => {
        field.addEventListener('input', function (e) {
            storeInput[field.id] = { //multiplte value ke liye object ko use karo mtlb ke alag alag save karvane keliye localstorage mai save karva ne keliye or upper bhi get object mai karvana 
                name: field.value,
                completed: false,
            }
            localStorage.setItem('allGoals', JSON.stringify(storeInput))
        })
        if (storeInput[field.id]) {
            field.value = storeInput[field.id].name //ye stay rakhenga name ko or niche vala check kiya hoga usko jo completeed true hoga usko
        }

    })
}

store()

const errorLabel = document.querySelector('.error-label')
const check = document.querySelectorAll('.custom-checkbox')
const goal = document.querySelector('.goal-container')
const progLabel = document.querySelector('.prog-label')
const progressbar = document.querySelector('.progress-value')

let completedGoals = Object.values(storeInput).filter((goal)=>goal.completed).length
progressbar.style.width =`${completedGoals} / ${inputField.length} * 100%`
progressbar.firstElementChild.innerHTML = `${completedGoals} / 3 completed`
progLabel.innerText = allquotes[completedGoals] 

function checkGoal() {
    check.forEach((btn) => {
        btn.addEventListener('click', (e) => {

            const allGoalAdded = [...inputField].every((k) => {
                return k.value // har input ko check kar raha hai ke koi khali to nahi hai na koi ek bhi khali hoga to return kar dega sab bhare hui hoge tab he agae jayega
            })

            if (allGoalAdded) {
                let goalContainer = btn.parentElement
                goalContainer.classList.toggle('completed')
                let selectedid = btn.nextElementSibling.id
                // console.log(selectedid)
                storeInput[selectedid].completed = !storeInput[selectedid].completed
                localStorage.setItem('allGoals', JSON.stringify(storeInput))
                errorLabel.style.display = 'none'
            } else {
                errorLabel.style.display = 'block'
            }
        })

        inputField.forEach((input) => {
            input.addEventListener('focus', function () {
                errorLabel.style.display = 'none'
            })

            if (storeInput[input.id].completed) {
                input.parentElement.classList.add('completed')
            }

            if (storeInput[input.id] && storeInput[input.id].completed) {
                input.value = storeInput[input.id].name
                return
            }
        })
    })
}

checkGoal()

