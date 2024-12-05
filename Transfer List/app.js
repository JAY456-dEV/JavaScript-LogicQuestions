const leftBtn = document.querySelector('leftBtn')
const rightBtn = document.querySelector('.rightBtn')


const leftInfo = [
    { name: 'JS', checked: false, id: 'js' },
    { name: 'HTML', checked: false, id: 'html' },
    { name: 'CSS', checked: false, id: 'css' },
    { name: 'TS', checked: false, id: 'ts' },
]

const rightInfo = [
    { name: 'React', checked: false, id: 'react' },
    { name: 'Angular', checked: false, id: 'angular' },
    { name: 'Vue', checked: false, id: 'vue ' },
    { name: 'Svelte', checked: false, id: 'svelte' },
]

// console.log(leftInfo[0])

function leftSideInfo() {
    leftInfo.forEach((item, idx) => {
        const transferlist = document.querySelector('.transfer-1-list')

        transferlist.innerHTML += `
        <div>
        <input type="checkbox" id="${item.id}">
        <label for="${item.id}">${item.name}</label>
    </div>
        `
    })

    rightInfo.forEach((item2, idx) => {
        const transferlist2 = document.querySelector('.transfer-2-list')
        console.log(item2.id)
        transferlist2.innerHTML += `
        <div>
        <input type="checkbox" id="${item2.id}">
        <label for="${item2.id}">${item2.name}</label>
    </div>
        `
    })
}
leftSideInfo()

leftBtn.addEventListener('click', function () {

})

// rightBtn.addEventListener('click', function () {

// })

