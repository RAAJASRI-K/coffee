let searchbox=document.querySelector(".search-box")
let searchicon=document.getElementById("search-icon")

searchicon.addEventListener("click",function(){
    searchbox.classList.toggle("active");
})

    
let header=document.querySelector(".header")
window.addEventListener("scroll",function (){
    header.classList.toggle("shadow",window.scrollY>0);
    searchbox.classList.remove("active",Window.scrollY>0);
});