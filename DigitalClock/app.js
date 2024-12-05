const hours = document.getElementById('hour')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const ampm = document.getElementById('ampm')


// function currentTime() {

//     let hh = new Date().getHours();
//     let mm = new Date().getMinutes();
//     let ss = new Date().getSeconds();
//     let ampm = "AM";

//     if (hh >= 12) { // mtlb jab hamra time 12pm ke upper jayega tab 12 tab 13 14 15 ese lekin hamko esa nahi cahiye hamko 12pm ke bad 1 2 3 cahiye to uke liye hame check karva rahe hai ke hh hous 12 ke upper jayege tab conditionn true hoge or 13 to 13-12= 1 to 1 baja hai vese hi 14 - 12 = 2 to 2 baje hai ese he hoga isme  
//         hh = hh - 12
//         ampm = "PM";
//     }

//     hh = (hh < 10) ? "0" + hh : hh; // agar time hours,minute,second 3 mai se koi bhe 10 se niche hua to usme age 0 lagega 01 08 05 07 ese 
//     mm = (mm < 10) ? "0" + mm : mm;
//     ss = (ss < 10) ? "0" + ss : ss;

//     hours.innerText = hh;
//     min.innerText = mm;
//     sec.innerText = ss;
//     ampm.innerText = ampm;

//     setTimeout(() => {
//         currentTime()
//     }, 1000)
// }

// currentTime()

function clock() {
    let hh = new Date().getHours()
    let mm = new Date().getMinutes()
    let ss = new Date().getSeconds()

    if (hh >= 12) {
        hh = hh - 12;
    }

    hours.innerText = hh < 10 ? '0' + hh : hh
    min.innerText = mm < 10 ? '0' + mm : mm;
    sec.innerText = ss < 10 ? '0' + ss : ss;

    setTimeout(() => {
        clock()
    }, 1000)
}

clock()
