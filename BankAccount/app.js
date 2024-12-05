function bankAccount(customerName, balance = 0) {
    this.customerName = customerName
    this.accountNumber = Date.now()
    this.Balance = parseInt(balance)

    this.Deposite = function (amount) {
        this.Balance += amount
    }

    this.Withdraw = function (amount) {
        this.Balance -= amount
    }
}

let customerName = document.querySelector('.customerName')
let initialBalnce = document.querySelector('.initialBalnce')

let addBtn = document.querySelector('.addBtn')

let accounts = []

addBtn.addEventListener('click', function () {
    const account = new bankAccount(customerName.value, initialBalnce.value)
    accounts.push(account)
    console.log(accounts)
})

const depositBtn = document.querySelector('.depositBtn')

let AccountNumberInput = document.querySelector('.AccountNumber')
let depositInput = document.querySelector('.deposite')

depositBtn.addEventListener('click', function () {
    let show = accounts.find((acc) => acc.accountNumber === parseInt(AccountNumberInput.value))
    show.Deposite(depositInput.value)
    console.log(+show)
})


const withdrawBtn = document.querySelector('.withdrawBtn')

let AccountNumberWithdraw = document.querySelector('.AccountNumberWithdraw')
let withdrawInput = document.querySelector('.withdraw')

withdrawBtn.addEventListener('click', function () {
    let show = accounts.find((acc) => acc.accountNumber === parseInt(AccountNumberWithdraw.value))
    show.Withdraw(withdrawInput.value)
    console.log(show)
})
