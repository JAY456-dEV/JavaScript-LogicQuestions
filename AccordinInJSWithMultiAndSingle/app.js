const data = [
    {
        id: "1",
        question: "What are accordion components?",
        answer:
            "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
        id: "2",
        question: "What are they used for?",
        answer:
            "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
        id: "3",
        question: "Accordion as a musical instrument",
        answer:
            "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
        id: "4",
        question: "Can I create an accordion component with a different framework?",
        answer:
            "Yes of course, it is very possible to create an accordion component with another framework.",
    },
];

const quesMain = document.querySelector('.quesMain')

data.map((ques) => {
    return quesMain.innerHTML += `<div class="ques">
            <div class="ques-and-btn">
                <p>${ques.question}</p>
                <div class='btn' onclick=showPara(${ques.id})>▶️</div>
            </div>
            <p class='para' id=para${ques.id}>${ques.answer}</p>
        </div>`
})


// for open only Single⬇️

function showPara(id) {
    const selectPara = document.querySelector(`#para${id}`)

    const para = document.querySelectorAll('.para')

    if (selectPara.getAttribute('style') === 'display: block;') {
        selectPara.style.display = 'none'
    } else {
        para.forEach((item) => {
            if (item.getAttribute('style') == 'display: block;') {
                item.style.display = 'none'
            }
            selectPara.style.display = 'block'
        })
    }
}

//for open multiple ⬇️

function showPara(id) {
    const selectPara = document.querySelector(`#para${id}`)
    console.log(selectPara.getAttribute('style'))

    if (selectPara.getAttribute('style') == null || selectPara.getAttribute('style') == 'display: none;') {
        selectPara.style.display = 'block'
    } else {
        selectPara.style.display = 'none'
    }
}