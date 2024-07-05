let icon=document.querySelector(".fa-menu");
let menu_items=document.querySelector(".nav-menu");


icon.addEventListener("click",()=>{
if(icon.classList.contains("fa-bars")){
    icon.classList.add("fa-times");
    icon.classList.remove("fa-bars");
    menu_items.style.display="flex";
}else{
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    menu_items.style.display="none";

}


});

