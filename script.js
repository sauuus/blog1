let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classlist.toggle('active');
}

let searchIcon = document.querySelector('#search-icon');
let searchIcon = document.querySelector('.search-form');

searchIcon.onclick = () =>{
    searchIcon.classList.toggle('fa-times');
    searchIcon.classlist.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classlist.remove('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classlist.remove('active');
    searchIcon.classList.remove('fa-times');
    searchIcon.classlist.remove('active');
    
}