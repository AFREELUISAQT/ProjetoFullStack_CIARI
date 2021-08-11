window.addEventListener("DOMContentLoaded", function(){
    const button= document.getElementById("nav-toggle");
    const menu= document.querySelector("nav-menu");

    button.addEventListener("click", () => {
        menu.classList.toggle("nav-menu_visible");
    });
});