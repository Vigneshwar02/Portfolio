const hamburger_menu = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu")

hamburger_menu.addEventListener("click", ()=>{
    hamburger_menu.classList.toggle("active")
    navmenu.classList.toggle("active")
})