let hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
let mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
let header =document.querySelector('.header.container');


hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active');
});
