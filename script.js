let menu =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');
menu.onclick=() => {
    menu.classList.toggle('fa-items');
    navbar.classList.toggle('active');
}
