console.log('JavaScript file is loaded');

var menu = document.querySelector(".ri-menu-line");
var clos = document.querySelector(".ri-close-fill");
var nav = document.querySelector(".responsive-nav");

menu.addEventListener("click", function() {
    console.log("Menu clicked!");
    nav.style.right = "0%";
})

clos.addEventListener("click", function() {
    console.log("Close clicked!");
    nav.style.right = "-100%";
})
