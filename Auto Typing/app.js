const span = document.querySelector('span')
const wordlist = ['Devloper', 'Coder', 'Techer', 'Youtuber']
const wordlist2 = ['Student', 'Football', 'Nitro 5', 'Nothing']

const word = 'Devloper'
// console.log(word.length)
function autoType(wordlist, element) {

    let wordIndex = 0;
    let count = 0;
    let skipUpdate = 0; // type speed
    let check = false;

    let intervalId = setInterval(() => {
        if (skipUpdate) { // type speed
            skipUpdate--
            return
        }
        if (!check) {
            skipUpdate = 2
            span.innerText += wordlist[wordIndex][count]
            count++
        } else {
            span.innerText = span.innerText.slice(0, span.innerText.length - 1)
            count-- // type speed
        }

        if (count === wordlist[wordIndex].length) {
            skipUpdate = 6 // type speed
            check = true
        }

        if (span.innerText.length === 0 && check) {
            check = false
            count = 0
            wordIndex++ // ye jab ek text start hoke ravese hoke khatam hoga uske bar wordIndex ko plus kardega jisee text change ho jayega 
        }

        if (wordIndex === wordlist.length) { // ye jab jab last solve karega problem ko jab last wala wordIndex ata hai uske bad undifined ata hai to  hamne idhar condition check karva le hai ke wordindex jab equal hoga hamre wordlist.length - 1 to wordIndex = 0 wapes se start ho jayege
            wordIndex = 0;
        }

    }, 200)
}

autoType(wordlist2, span)