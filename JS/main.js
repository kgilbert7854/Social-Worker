//carousel
let i = 0;
let images = [];
let time = 3000;

images[0] = '/IMAGES/schoolkids_in_class.jpg';
images[1] = '/IMAGES/world-map.jpg';
images[2] = '/IMAGES/school-children.jpg';
images[3] = '/IMAGES/school-books.jpg';

function changeImg(){
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImg()', time);
};

window.onload = changeImg;

// nav hover link color
let element = document.querySelectorAll('nav a');

let arr = Array.from(element);

arr.forEach((link) => {link.addEventListener("mouseover", function(){
    console.log();
    this.style.color = "#6C5359"; setTimeout( () => {this.style.color ="";}, 500);}, false)
});


