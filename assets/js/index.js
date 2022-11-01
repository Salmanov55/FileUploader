const imageList = document.querySelector('.image-list');
const fileInput = document.querySelector('.files');
const dropzone = document.querySelector('.dropzone');


const input = document.querySelector('input[type="file"]')
input.addEventListener('change',function(e){
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function () {
        const lines = reader.result.split('\n').map(function (line) {
            return line.split(',')
        })
        console.log(lines)
        const img =new Image()
        img.src = reader.result
        document.body.appendChild(img)
    }
    // reader.readAsText(input.files[0])
    reader.readAsDataURL(input.files[0])
},true)