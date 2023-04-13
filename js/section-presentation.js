const btnCloseCV = document.querySelector(".btn-close-cv");
const btnShowCV = document.querySelector(".btn-show-cv");
const cvOverlay = document.querySelector(".cv-overlay");

btnCloseCV.addEventListener('click', ()=>{
    cvOverlay.style = "display : none !important";
});

btnShowCV.addEventListener('click', ()=>{
    cvOverlay.style = "display : grid";
});