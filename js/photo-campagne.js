const buttonNextPhoto = document.querySelector("#next-photo-campagne");
const buttonPreviousPhoto = document.querySelector("#previous-photo-campagne");
const photosCampagne = document.querySelectorAll(".embla__slide");
let step = 0;
const carouselCount = document.querySelectorAll(".embla__slide").length;

document.querySelector(".embla__slide:nth-child(2)").style = "filter:blur(4px);"

buttonNextPhoto.addEventListener('click', ()=>{
    if(step < (carouselCount-1)){
        step += 1;
        photosCampagne.forEach((item, index)=>{
            if(step == index){
                item.style = "transform:translateX("+(step * 100 * (-1))+"%)";
            }else{
                item.style = "transform:translateX("+(step * 100 * (-1))+"%);filter:blur(4px);";
            }
        });
        //
        buttonPreviousPhoto.style.opacity = 0.7;
        if(step == (carouselCount-1)){
            buttonNextPhoto.style.opacity = 0;
        }
    }
});

buttonPreviousPhoto.addEventListener('click', ()=>{
    if(step > 0){
        step -= 1;
        photosCampagne.forEach((item, index)=>{
            if(step == index){
                item.style = "transform:translateX("+(step * 100 * (-1))+"%)";
            }else{
                item.style = "transform:translateX("+(step * 100 * (-1))+"%);filter:blur(4px);";
            }
        });
        //
        buttonNextPhoto.style.opacity = 0.7;
        if(step == 0){
            buttonPreviousPhoto.style.opacity = 0;
        }
    }
});