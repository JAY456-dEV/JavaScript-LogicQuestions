const storys = document.querySelector('.storys')

const instaStory = [
    {
        dp: "https://images.unsplash.com/photo-1687825520449-e7fc1a144cb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://plus.unsplash.com/premium_photo-1706727291205-d65708cd8adf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1687825520449-e7fc1a144cb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1687825520449-e7fc1a144cb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1687825520449-e7fc1a144cb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1687825520449-e7fc1a144cb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1687825520449-e7fc1a144cb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1687825520449-e7fc1a144cb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
        dp: "https://images.unsplash.com/photo-1687825520449-e7fc1a144cb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
]

function displayStory() {
    let statment = "";
    instaStory.forEach((img,idx) => {
        statment += `<div class="story">
                <img src="${img.dp}"
                    alt="" id="${idx}">
            </div> `
    })
    storys.innerHTML = statment
}

displayStory()

let allImg = document.querySelectorAll('.story')
let storyImg = document.querySelector('.full-screen')
// console.log(storyImg)
function showStory() {
    allImg.forEach((img) => {
        img.addEventListener('click', function (e) {
            storyImg.style.display = "block"; 
            // storyImg.style.backgroundImage = `url('${e.target.src}')`
             //ye vala jo hai vo sidha click karne par jo img hai sare story ke under usko get karta hai sare nahi lekin app jispe click karoge uske img dega fir usme se src le lunga
            storyImg.style.backgroundImage = `url('${instaStory[e.target.id].dp}')`// ye id index hai jo foreach se de raha hu // uper vala or ye dono same kam kar rahe or ye vala instastoryvale array mai se ja kar jo id img tag ko de rakhe the sare usme se jisko click karuga uski mereko story dekh jayege // ye id ko leke ata hai jo img pe foreach lagaya hai usme se for jab mai click dabata hu tab jo mereko e milta hai uske through main id leke usko instastoryvale array mai lagata hu or mujhe uske dp milte hai

            setTimeout(()=>{
                storyImg.style.display = "none"
            },3000)
        })
    })
}

showStory()