const uploadarea = document.querySelector('.upload-area')
const dragdropText = document.querySelector('.drgdrp')

const browseBtn = document.querySelector('.browse')
const fileUploadInput = document.querySelector('.fileupload')

let file;

browseBtn.addEventListener('click', function () {
    fileUploadInput.click()
})

fileUploadInput.addEventListener('change', function () {
    // console.log(this.files)
    file = this.files[0]
    checkFile()
    // console.log(file)
})

uploadarea.addEventListener('dragover', function (event) {
    event.preventDefault()
    dragdropText.textContent = 'Release to Upload'
    uploadarea.classList.add('active')
})

uploadarea.addEventListener('dragleave', function () {
    dragdropText.textContent = 'Drag & Drop'
    uploadarea.classList.remove('active')
})

uploadarea.addEventListener('drop', function (event) {
    event.preventDefault()
    // console.log(event.dataTransfer.files[0]) // ye jo pehle file hoge usko dega jab drop hoge file 
    file = event.dataTransfer.files[0]
    // console.log(file)
    checkFile()
})


function checkFile() {
    // console.log(file)
    let fileType = file.type
    // console.log(fileType)

    let validType = ['image/jpeg', 'image (5).jpg', 'image/png']

    if (validType.includes(fileType)) { // ye check kar rahe hai ke jo file drop ke jaa rahe hai uska type same hai hamara array se
        let fileReadermain = new FileReader()
        // console.log(fileReadermain)

        fileReadermain.onload = () => {
            let fileUrl = fileReadermain.result
            // console.log(fileUrl)
            let imgTag = `<img src="${fileUrl}">`
            uploadarea.innerHTML = imgTag
        }
        fileReadermain.readAsDataURL(file) // we need to call like this so that can make url for us

    } else {
        alert('please enter currect type of image')
        uploadarea.classList.remove('active')
    }
}