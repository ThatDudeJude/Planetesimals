const burger_nav = document.querySelector('#nav-bar .nav-content .nav-list .burger');
const nav_list = document.querySelector('#nav-bar .nav-content .nav-list');

burger_nav.addEventListener('click', () => {
    burger_nav.classList.toggle('active');
    nav_list.classList.toggle('more');
});

