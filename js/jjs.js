const modal = document.querySelector(".modal");
const write = document.querySelector(".write");

write.addEventListener("click",function (evt) {
  evt.preventDefault();
  modal.classList.add("pokaz-show");
});
window.addEventListener("keydown", function(evt){
   if (evt.keyCode === 27){
     if (modal.classList.contains("pokaz-show")){
       evt.preventDefault();
       modal.classList.remove("pokaz-show");
     }
   }
})

const close = document.querySelector(".close");

close.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.remove("pokaz-show");
});


const catalog = document.querySelector(".super-catalog");
const upper = document.querySelector(".upper");

upper.addEventListener("click", function(evt){
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


const map = document.querySelector(".map");
const mapmodal = document.querySelector(".map-modal");

map.addEventListener("click", function(evt){
  evt.preventDefault();
  mapmodal.classList.add("pokaz-show");
})
window.addEventListener("keydown", function(evt){
   if (evt.keyCode === 27){
     if (mapmodal.classList.contains("pokaz-show")){
       evt.preventDefault();
       mapmodal.classList.remove("pokaz-show");
     }
   }
})


const closemap = document.querySelector(".close-map");

closemap.addEventListener("click", function(evt){
  evt.preventDefault();
  mapmodal.classList.remove("pokaz-show");
});
