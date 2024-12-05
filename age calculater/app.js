const date = document.querySelector('.dateinput')
const btn = document.querySelector('.btn')
const total = document.querySelector('.totalcounter')

btn.addEventListener("click", function () {
    let birthDate = new Date(date.value) // ye tabhi value dega jab ap enter karoge kuch bhi  date under nahi to Nan ayega

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1
    let y1 = birthDate.getFullYear()
    // console.log(m1)

    let today = new Date()

    let todaydate = today.getDate()
    let todaymonth = today.getMonth() + 1
    let todayyear = today.getFullYear()

    let totalmonth,totalday

    let totalyear = todayyear - y1
    // console.log(todayyear)
    if (todaymonth >=x m1) {
        totalmonth = todaymonth - m1
    } else {
        totalmonth--
        totalmonth = 12 + todaymonth - m1
    }

    if (todaydate >= d1) {
         totalday = todaydate - d1
    } else {
        totalmonth--
        totalday = getDaysMonth(y1,m1) + todaydate - d1
    }

    if(totalmonth < 0){
        totalmonth = 11;
        totalyear--
    }
    total.innerHTML = `you are <span>${totalyear}</span>  years, <span>${totalmonth}</span> monts <span>${todaydate}</span> days old`
})

function getDaysMonth(year,month){
    return new Date(year,month,0).getDate();
}