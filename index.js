const menuImage = document.getElementById("menuImage")
const closeImage = document.getElementById("closeImage")
const menu = document.getElementById("menu")



menuImage.addEventListener("click", function(){

    menu.classList.toggle("showMenu")
    closeImage.style.display = "block"
})

closeImage.addEventListener("click", function(){
  
    menu.classList.toggle("showMenu")
    menu.style.zIndex = 999999;
    closeImage.style.display = "none"
})



