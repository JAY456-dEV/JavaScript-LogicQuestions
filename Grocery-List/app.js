const submitbtn = document.querySelector('.submit-btn')
let text = document.querySelector('.textbar')
const list = document.querySelector('.grocery-list')

let edit_id = null;

let textStore = JSON.parse(localStorage.getItem('listname')) || []
// console.log(textStore)
submitbtn.addEventListener('click', (e) => {
    e.preventDefault()
    saveInfo()
    displayInfo()
})

function saveInfo() {
    let textValue = text.value
    if (textValue === '') {
        return
    }

    if (edit_id != null) { // ye check kar raha hai ke agar edit_id agar null hai to jo hamara push ho raha hai wo to hoga hi vaise jese ho raha hai lekin jab mai edit pe click karuga to jo maine edit_id = id de raha hu uke karan mere edit_id ke value jo uper null hai usme se vo jiss bhi id mtlb edit ke btn pe click kiya hoga uske id ayege or compare hoga ke like 2 != null jo true hai to edit pe click kiya mtlb ab ye edit karega ese ke edit_id hai 2 or ek jo hai vo uspe hi delete karke edit karega ye {'grocName': textValue,} ye isliye liya kyuki localstorage mai ese format mai bhi edit karvake save karvana hoga
        textStore.splice(edit_id, 1, { 'grocName': textValue, })
        edit_id = null // ye hamne isliye likha kyuki jab ham edit kar rahe the tab like 1 item edit ke or uske bad mujhe new item edit karne ho to kya hota tha ki jo maine edit ke na item usme hi new value aa jate thi kyuki jab edit hua to edit_id ke under id reh jate thi like 2 to vo id mai hamne edit kiya uske turant badd mai new value dal raha hu tab ye condition check hoge tab hi local storage mai value jayege or tabhi display hoge info to idhar pehle condition mai jo edit_id ke under ek bar edit kiya like 2 id mai to vo reh gai hai edit_id mai to ye condition true ho rahe hai or isme hi 2 id mai 1 usko delete karke usme new value display karva rahe hai iske liya maine kya kiya ke jab ek bar edit ho jaye tab ye edit_id = null ho jayege jisee isme koi id nahi rahe ge or turant bar agar mai koi new value add karta hu to bhi ye condtion false hoge or new value add ho jayege

    } else { //or value null null hoge to insert karega hi
        textStore.push({ // mai idhar id leke bhi delete edit vagera mai de sakta tha aur vo better  hai so use that id:Date.now() or fir forEach mai jake item.id de deta jaha id ke jarurt hai vaha
            'grocName': textValue,
        })
    }
    localStorage.setItem('listname', JSON.stringify(textStore))
}

const noitem = document.querySelector('.noitem')

function displayInfo() {
    text.value = ''

    let statment = ''
    if (textStore == '') {
        list.innerHTML = ''
    } else {
        textStore.forEach((item, idx) => { //idhar hamne pehle localstorage mai value save karva le hai jo bhi input mai daluga vo localstorage mai save ho jaiege fi mai usko yaha accses kar luga //foreach lagaya hai mtlb jetne item hoge utne baar loop chalega 
            statment += `<div class = "listgroc" id="${idx + 1}">
                <p class="title">${item.grocName}</p>
                    <div class = "btn-container">
                    <button class = "edit" onclick = "editItem(${idx})"> 
                    <i class="fa-solid fa-pen-to-square"></i>
                    </button>
            
                    <button class = "delete" onclick = "deleteItem(${idx})">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                    </div> 
                </div>
                    `
            // particular edit or delete ko ek id de raha hu
            list.innerHTML = statment;
        })
    }
}

displayInfo()

function deleteItem(idx) {
    // idhar filter se bhi kam karva sakta tha like textstore pe filter lagva ke paramkaname.id !== id
    textStore.splice(idx, 1)
    localStorage.setItem('listname', JSON.stringify(textStore))
    displayInfo() // isko call karane ka mtlb hai ke like 5 item thi usme se maine 1 delete ke to ab ye localstoarage mai save hoga (splice ke badd hamne store karvaya hai) or 4 item bachege to ye displayinfo mai jayega jo hamre items ko display karye to pehle 5 thi to 5 show karta tha lekin ab jab check hoga forEach loop se ek ke bad ek value ayege to usme sirf 4 hi grocitem hoge to 4 hi list display karayega //uper foreach lagaya hai mtlb jetne item hoge utne baar loop chalega 5 thi pehle to 5 bar chala or 5 grocitem display karvaye ab 4 hai to 4 grocitem display karvayega
}

function editItem(idx) { // edit pe click karuga tab value input mai vapes chale jayege or fir jab mai vlaue change karuga tab vo value ko submit pe click karuga tab saveinfo chalega 
    edit_id = idx
    text.value = textStore[idx].grocName
    // submitbtn.innerText = 'Edit Item';
}

const clearbtn = document.querySelector('.clear-btn')

clearbtn.addEventListener('click', function () {
    textStore = []
    localStorage.setItem('listname', JSON.stringify(textStore))
    saveInfo()
    displayInfo()
})