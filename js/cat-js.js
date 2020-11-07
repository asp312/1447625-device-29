const catalog = document.querySelector(".super-catalog1");
const upper1 = document.querySelector(".upper1");

upper1.addEventListener("click", function(evt){
  evt.preventDefault();
  catalog.classList.add("pokaz-show");
})

 window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27){
      if (catalog.classList.contains("pokaz-show")){
        evt.preventDefault();
        catalog.classList.remove("pokaz-show");
      }
    }
 })
