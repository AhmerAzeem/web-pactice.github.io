const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const navUL = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});
close.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("hide");
});
const modal = document.querySelector(".modal");
const btn = document.querySelector(".search");
const closeModal = document.querySelector(".close-modal");

btn.addEventListener("click", openpopup);
closeModal.addEventListener("click", closepopup);

function openpopup(){
  modal.style.display = "block";
}
function closepopup(){
  modal.style.display = "none";
}
AOS.init({
  duration:1000,
});