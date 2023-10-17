var i = 0;
var slideInterval = 3000;
var imageList = [
    "images\slide1.png",
    "images\slide2.png",
    "images\slide3.png",
    "images\slide4.png",
    "images\slide5.png", 
    "images\slide6.png",
    "images\slide7.png", 
    "images\slide8.png"
    
]

function changeImage() {

    const imgElement = document.getElmentByID("slide");
    if (i> imageList.length) {
        i+=1;
    }
    else{
        i=1;
    }
   img.innerHTML="<img src="+ imageList[i-1] + ">";
}

setInterval(changeImage, slideInterval);
window.addEventListener('load', changeImage);