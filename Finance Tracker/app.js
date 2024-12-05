const desc = document.querySelector('.desc')
let amount = document.querySelector('.amount')
const transactionBtn = document.querySelector('.addtransaction')

const history = document.querySelector('.transaction-history')
const options = document.querySelector('.options')
let totalBalance = document.querySelector('.balance span')
// console.log(options.value)

let currentBalance = 0;

transactionBtn.addEventListener('click', function (e) {
    e.preventDefault()
    if (desc.value !== '') {
        if (amount.value !== '') {
            if (options.value == 'Income') {
                history.innerHTML += `
                <div class="history-1 income">
                    <p>${desc.value}</p >
                    <p>${amount.value}</p>
                </div>`
                currentBalance += parseInt(amount.value)
                totalBalance.innerText = currentBalance
            } else {
                history.innerHTML += `
                <div class="history-1 expense">
                    <p>${desc.value}</p >
                    <p>${amount.value}</p>
                </div>`
                currentBalance -= parseInt(amount.value)
                totalBalance.innerText = currentBalance
            }
        } else {
            alert('Please enter a valid description and amount.')
        }
    } else {
        alert('Please enter a valid description and amount.')
    }
})