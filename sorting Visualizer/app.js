const allDiv = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const allDivInner = [
    { div1: '<div class="colm colm-1">10</div>' },
    { div2: '<div class="colm colm-2">20</div>' },
    { div3: '<div class="colm colm-3">30</div>' },
    { div4: '<div class="colm colm-4">40</div>' },
    { div5: '<div class="colm colm-5">50</div>' },
    { div6: '<div class="colm colm-6">60</div>' },
    { div7: '<div class="colm colm-7">70</div>' },
    { div8: '<div class="colm colm-8">80</div>' },
    { div9: '<div class="colm colm-9">90</div>' },
    { div10: '<div class="colm colm-10">100</div>' }
];


const sortcontainer = document.querySelector('.sort-container')


function hello() {
    for (let i = 0; i < allDiv.length; i++) {
        let random = Math.floor(Math.random() * 10)
        return allDiv[random]
    }
}

// console.log(hello())

function display() {
    allDivInner.forEach((item, idx) => {

        sortcontainer.innerHTML = `
        <div class="colm colm-1" style="height: ${hello()}%;">10</div>
        <div class="colm colm-2" style="height: ${hello()}%;">20</div>
        <div class="colm colm-3" style="height: ${hello()}%;">30</div>
        <div class="colm colm-4" style="height: ${hello()}%;">40</div>
        <div class="colm colm-5" style="height: ${hello()}%;">50</div>
        <div class="colm colm-6" style="height: ${hello()}%;">60</div>
        <div class="colm colm-7" style="height: ${hello()}%;">70</div>
        <div class="colm colm-8" style="height: ${hello()}%;">80</div>
        <div class="colm colm-9" style="height: ${hello()}%;">90</div>
        <div class="colm colm-10" style="height: ${hello()}%;">100</div>
        `
    })
}


const randomGraph = document.querySelector('.randomGraph')

randomGraph.addEventListener('click', function () {
    hello()
    display()
})


// function hello() {
//     for (let i = 0; i < allDiv.length; i++) {
//         let random = Math.floor(Math.random() * 10)
//         console.log(allDiv[random])

//         allDivInner.forEach((item, idx) => {
//             sortcontainer.innerHTML = `
//             <div class="colm colm-1" style="height: ${allDiv[random]}%;">10</div>
//             <div class="colm colm-2" style="height: 20%;">20</div>
//             <div class="colm colm-3" style="height: 30%;">30</div>
//             <div class="colm colm-4" style="height: 40%;">40</div>
//             <div class="colm colm-5" style="height: 50%;">50</div>
//             <div class="colm colm-6" style="height: 60%;">60</div>
//             <div class="colm colm-7" style="height: 70%;">70</div>
//             <div class="colm colm-8" style="height: 80%;">80</div>
//             <div class="colm colm-9" style="height: 90%;">90</div>
//             <div class="colm colm-10" style="height: 100%;">100</div>
//             `
//         })
//     }
// }

// hello()



// // const divObjects = allDiv.map((div, index) => {
// //     return { [index]: div }; // isme index ko key bana diya hai or value ko div mai ese karke return kar rahe hai
// // });
// // console.log(divObjects)
// // Accessing individual div elements by index
// // console.log(divObjects[0]); // <div class="colm colm-1">10</div>
// // console.log(divObjects[1]); // <div class="colm colm-2">20</div>



// // const show = allDiv.map((div, index) => {
// //     return div
// // })

// // for (let i = 0; i < allDiv.length; i++) {
// //     let random = Math.floor(Math.random() * 10)
// //     let save = show[random]
// //     let newObj = JSON.stringify(show[random])


// //     let newArr = newObj.split(',')
// //     // newArr.map((item, idx) => {
// //     //     let saveDiv = { [i]: item }
// //     //     // console.log(saveDiv)
// //     // })
// // }


// // for (let i = 0; i < allDiv.length; i++) {
// //     let random = Math.floor(Math.random() * 10)
// //     let save = allDiv[random]
// //     let newObj = JSON.stringify(allDiv[random])

// //     let newArr = newObj.split(',')
// //     newArr.map((item, idx) => {
// //         let saveDiv = { [i]: item }
// //         let newArrNum = saveDiv[i].slice(9, 11)
// //         console.log(newArrNum)
// //     })
// //     // let newSliceArr = newObj.slice(9,11)
// //     // console.log(newSliceArr)
// // }

// // function randomGen() {
// //     let random = Math.floor(Math.random() * 10)
// //     console.log(show[random])
// // }

// // for (let i = 0; i < allDiv.length; i++) {
// //     randomGen()
// // }

// // function randomGen() {
// //     let random = Math.floor(Math.random() * 10)
// //     let save = {}
// //     for (let i = 0; i < allDiv.length; i++) {
// //         save += show[random]
// //     }
// //     console.log(JSON.stringify(save))
// // }

// // // randomGen()



