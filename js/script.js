const search = document.querySelector(".searh-box");
const disign = document.querySelector(".search-txt");
const invis = document.querySelector(".invis");


disign.addEventListener("focus",function (evt) {
  evt.preventDefault();
  invis.classList.remove("hids");
});

const range = document.querySelector("#range1")
const output = document.querySelector("#volume")
function outputUpdate(vol){
  output.value = "до" + " " + vol ;
  output.style.left = 0 + vol/40 + 168 + 'px';
  if(output.value < 50) {
    output.style.left = 0+ vol/40 + 170 + 'px';
  }
  if(output.value < 100) {
    output.style.left = 0+ vol/40 + 169 + 'px';
  }
  if(output.value >100) {
    output.style.left = 0+ vol/40 + 166 + 'px';
  }
  if(output.value >225) {
    output.style.left = 0+ vol/45 + 165 + 'px';
  }
  if(output.value >670) {
    output.style.left = 0+ vol/45 + 164 + 'px';
  }
  if(output.value >1000) {
    output.style.left = 0+ vol/45 + 160 + 'px';
  }
  if(output.value >1400) {
    output.style.left = 0+ vol/45 + 159 + 'px';
  }
  if(output.value >1550) {
    output.style.left = 0+ vol/45 + 157 + 'px';
  }
  if(output.value >2500) {
    output.style.left = 0+ vol/45 + 155 + 'px';
  }
  if(output.value >2930) {
    output.style.left = 0+ vol/45 + 154 + 'px';
  }
  if(output.value >3380) {
    output.style.left = 0+ vol/45 + 153 + 'px';
  }
  if(output.value >4280) {
    output.style.left = 0+ vol/45 + 152 + 'px';
  }
  if(output.value >4730) {
    output.style.left = 0+ vol/45 + 151 + 'px';
  }
  if(output.value >5130) {
    output.style.left = 0+ vol/45 + 150 + 'px';
  }
  if(output.value >5630) {
    output.style.left = 0+ vol/45 + 149 + 'px';
  }
  if(output.value >6080) {
    output.style.left = 0+ vol/45 + 148 + 'px';
  }
  if(output.value >6530) {
    output.style.left = 0+ vol/45 + 147 + 'px';
  }
  if(output.value >7430) {
    output.style.left = 0+ vol/45 + 146 + 'px';
  }
  if(output.value >7880) {
    output.style.left = 0+ vol/45 + 145 + 'px';
  }
  if(output.value >8330) {
    output.style.left = 0+ vol/45 + 144 + 'px';
  }
  if(output.value >8780) {
    output.style.left = 0+ vol/45 + 143 + 'px';
  }
};
