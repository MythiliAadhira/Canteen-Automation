let menu =document.querySelector('#menu-bar');
let navbar =document.querySelector('.navbar');
menu.onclick=() => {
    menu.classList.toggle('fa-items');
    navbar.classList.toggle('active');
}
window.onscroll=()=>{
    menu.classList.remove('fa-items');
    navbar.classList.remove('active');


    if(window.scrollY>60){
        document.querySelector('#scroll-top').classList.add('active');
      
      }
      else{
        document.querySelector('#scroll-top').classList.remove('active');
      
      }
}
function loader(){
        document.querySelector('.loader-container').classList.add('fade-out');
}
      
function fadeout(){
        setInterval(loader,3000);
}
window.onload=fadeOut();