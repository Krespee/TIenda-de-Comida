const menu = document.getElementById("hola");
const line1 = document.querySelector(".line1_bars_menu")
const line2 = document.querySelector(".line2_bars_menu")
const line3 = document.querySelector(".line3_bars_menu")

const navmenu = document.querySelector(".nav-menu");

menu.addEventListener("click",(e)=>{
    line1.classList.toggle("activeline1_bars_menu");
    line2.classList.toggle("activeline2_bars_menu");
    line3.classList.toggle("activeline3_bars_menu");
    navmenu.classList.toggle("nav-menuactive");
    document.body.classList.toggle('hidden');
})

const linkMenu = document.querySelectorAll(".link-menu");

linkMenu.forEach(e => {
    e.addEventListener("click",()=>{
        console.log("object");
        line1.classList.remove("activeline1_bars_menu");
        line2.classList.remove("activeline2_bars_menu");
        line3.classList.remove("activeline3_bars_menu");
        navmenu.classList.remove("nav-menuactive");
        document.body.classList.toggle('hidden');
    })
});
