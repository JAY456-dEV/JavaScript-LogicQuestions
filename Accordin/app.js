const question = document.querySelectorAll('.quiz')
const quesinfo = document.querySelectorAll('.ques-info ')

question.forEach((btn, idx) => {
    btn.addEventListener('click', function () {
        const targetElement = document.querySelector(`.ques${idx}`);

        if (targetElement.classList.contains('active')) {
            targetElement.classList.remove('active');
        } else {
            quesinfo.forEach((ques) => {
                ques.classList.remove('active');
            });
            
            targetElement.classList.add('active');
        }
    });
});
