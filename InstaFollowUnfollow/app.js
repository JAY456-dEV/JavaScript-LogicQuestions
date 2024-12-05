const addbtn = document.querySelector('.add')
const friend = document.querySelector('h5')

let click = 0;

addbtn.addEventListener('click', function () {
    if (click == 0) {
        addbtn.innerText = "Remove"
        addbtn.style.backgroundColor = "red"
        friend.innerText = "friend"
        friend.style.color = 'green'
        click = 1;
    } else {
        addbtn.innerText = "Add Friend"
        addbtn.style.backgroundColor = "cadetblue"
        friend.innerText = "stranger"
        friend.style.color = 'red'
        click = 0;
    }
})