const imgcount = document.querySelector('.img-container')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const img = document.querySelectorAll('img')

let currImg = 1;

next.addEventListener('click', function () {
    currImg++
    nextImg()
})
function nextImg() {
    if (currImg > img.length) {
        currImg = 1
        // idhar esee work karta hai ke abhe pehle se hi 500px pe hai 1 position pe phir next click kiya to currImg++ huye currImg > 4 mtlb chote hone chaye tabhi else mai jake age jayege varna 4 se badhe huye mtlb last slide to to 1 position pe chale jayege or age ese badhta abhi tak click nahi kiya hai (1 - 1) * 500 = 0 mtlb normal position pe hai fir ek bar click kiya to currimg++ huya 2 (2-1) * 500 = 500px age badhega fir 3(3-1) * 500 = 1000px to start se hajar pixal age fir (4-1)* 500 = 1500px start se 1500px agee ese work karega or -- prev hoga tab (4-1) * = 1500px hai phir maine prev dabaya to currimg-- huya to 4 mai se 3 huya to ab (3-1) * 500 = 1000px hoge to start se 1000px hoge to ese work karta hai
    } else if (currImg < 1) {
        currImg = 4
    }
    imgcount.style.transform = `translateX(-${(currImg - 1) * 500}px)`
}

prev.addEventListener('click', function () {
    currImg--
    nextImg()
})



// ye niche vale ko work karane ke liye img container ko all se hata dena

// next.addEventListener('click',()=>{
//     currImg++
//     updateImg()
// })

// function updateImg() {
//     if(currImg > img.length){ // ye do pe tabhi jayega jab length se jyda jane ke koshis karoge ya niche vali condition 1 se kam jaonge tab last img pe le jayege
//         currImg = 1
//     } else if(currImg < 1){
//         currImg = img.length
//     }
//     imgCont.style.transform = `translateX(-${(currImg - 1) * 500}px)`
// }

// prev.addEventListener('click',function () {
//     currImg--
//     updateImg()
// })
