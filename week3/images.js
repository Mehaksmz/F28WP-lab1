var i = 0


const images = []

const slideInterval = 3000 

images.push('images/1.jpeg')
images.push('images/2.jpeg')
images.push('images/3.jpeg')
images.push('images/4.jpeg')
images.push('images/5.jpeg')
images.push('images/6.jpeg')
images.push('images/7.jpeg')
images.push('images/8.jpeg')

function changeImage() {
    const imgElement = document.getElementById('slide')
    if (images.length > 0) {
        imgElement.src = images[i]
        i= (i + 1) % images.length
    }
}


setInterval(changeImage, slideInterval)


window.addEventListener('load', changeImage)