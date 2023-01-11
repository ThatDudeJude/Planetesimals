const burger_nav = document.querySelector('#nav-bar .nav-content .nav-list .burger');
const nav_list = document.querySelector('#nav-bar .nav-content .nav-list');

burger_nav.addEventListener('click', () => {
    burger_nav.classList.toggle('active');
    nav_list.classList.toggle('more');
});

const prev_next = document.querySelectorAll('.container-wrapper .carousel-wrapper .prev_next a');

for (let anchor of prev_next) {
    anchor.addEventListener('click', () => {
        setTimeout(() => 
        history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search));
    }, 5)
}

