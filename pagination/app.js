const ContainerProfile = document.querySelector('.main-container')

const btnNum = document.querySelectorAll('.btnNum')
let i = 0
let j = 14
async function loadItem() {
    const url = `https://api.github.com/users/john-smilga/followers?per_page=100`
    const res = await fetch(url)
    const data = await res.json()

    showData(data)
}


function showData(data) {
    console.log(i)

    // console.log(data)
    // console.log(prof.avatar_url)
    if (ContainerProfile.innerHTML !== '') {
        ContainerProfile.innerHTML += `
        <div class="profile-1">
        <img src="${prof.avatar_url}" alt="">
        <p>${prof.login}</p>
        <button class="viewProf">VIEW PROFILE</button>
    </div>`
    } else {
        data.forEach((prof, idx) => {
            ContainerProfile.innerHTML = `
            <div class="profile-1">
            <img src="${prof.avatar_url}" alt="">
            <p>${prof.login}</p>
            <button class="viewProf">VIEW PROFILE</button>
        </div>`
        })
    }

}

btnNum.forEach((btn, idx) => {
    btn.addEventListener('click', function (e) {
        i += 10
        j += 10
        showData()
    })
})
loadItem()

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

next.addEventListener('click', function () {

})



