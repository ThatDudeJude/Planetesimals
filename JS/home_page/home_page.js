const carouselHist = document.querySelectorAll('.container-wrapper .carousel-wrapper a');

for (let anchor of carouselHist) {    
    anchor.addEventListener('click', () => {s        
        setTimeout(() => {        
        history.replaceState(null, '', './index.html');
        
    }, 1)
})
}


const slides = document.querySelector(".slides");

const slideOneButtons = document.querySelectorAll('.carousel-wrapper .slides .first_slide .prev_next button')                
const slideThreeButtons = document.querySelectorAll('.carousel-wrapper .slides .third_slide .prev_next button')                
const slideTwoButtons = document.querySelectorAll('.carousel-wrapper .slides .second_slide .prev_next button')                

for (let integer of [2, 1]) {
    let index = 2-integer
    slideOneButtons[index].addEventListener('click', () => {
        let slideLength = slides.offsetWidth
        slides.scrollLeft = slideLength * integer
    })        

    slideThreeButtons[index].addEventListener('click', () => {
        let slideLength = slides.offsetWidth
        slides.scrollLeft = slideLength * (integer - 1)
    })            
}

for (let integer of [0, 2]) {
    let index = integer / 2            
    slideTwoButtons[index].addEventListener('click', () => {
        let slideLength = slides.offsetWidth
        slides.scrollLeft = slideLength * integer
    })            
}


const bullets = document.getElementsByClassName("bullets");
let activeBullet = (index) => {
    bullet = document.getElementById("bullet-" + String(index + 1))
    bullet.classList.add("active");
}

let inactiveBullet = (index) => {
    bullet = document.getElementById("bullet-" + String(index + 1));
    bullet.classList.remove("active");
}

window.onload = activeBullet(0);
slides.addEventListener("scroll", () => {    
    let carouselWidth = slides.offsetWidth;
    let detectScroll = (times) => {
        return carouselWidth * times - (carouselWidth * times % 10) == slides.scrollLeft - (slides.scrollLeft % 10);
    }
    if (detectScroll(0)) {
        activeBullet(0);
        inactiveBullet(1);
        inactiveBullet(2);
    }
    if(detectScroll(1)) {
        activeBullet(1);
        inactiveBullet(0);
        inactiveBullet(2);
    }
    if(detectScroll(2)) {
        activeBullet(2);
        inactiveBullet(0);
        inactiveBullet(1);
    }
})

let stopScroll = document.querySelectorAll(".carousel-wrapper .bullets a");
stopScroll.forEach(element => {
    // element.scrollIntoView({behavior: "smooth"})
    element.addEventListener("click", () => {
        // history.length = 2    
        let x = window.scrollX, y = window.scrollY;
        window.onscroll = () => {window.scrollTo(x, y)};
        setTimeout(() => window.onscroll = null, 100)
    })
})

console.log(stopScroll)
