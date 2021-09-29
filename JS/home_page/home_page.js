const carouselHist = document.querySelectorAll('.container-wrapper .carousel-wrapper a');

for (let anchor of carouselHist) {    
    anchor.addEventListener('click', () => {
        // window.location.replace("./index.html")
        setTimeout(() => {
        // history.length = 2
        // history.replaceState(null, '', "./index.html");
        
        // history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search)
        // window.forward(2)
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

// prev_next.addEventListener('click', () => {
//     // window.location.replace("./index.html")
//     setTimeout(() => 
//     history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search), 5);
// }, 5)

// var animation = false, 
//     animationstring = 'animation',
//     keyframeprefix = '', 
//     domPrefixes = 'Webkit Moz O ms Khtml'.split(' '), 
//     pfx = '', 
//     elem = document.createElement('div');

// if (elem.style.animationName !== undefined) {animation = true;}

// if (animation === false) {
//   for (var i = 0; i < domPrefixes.length; i++) {
//     if (elem.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
//       pfx = domPrefixes[i];
//       animationstring = pfx + 'Animation';
//       keyframeprefix = '-' + pfx.toLowerCase() + '-';
//       animation = true;
//       break;
//     }
//   }
// }