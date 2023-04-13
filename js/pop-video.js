const videoOverlay = document.querySelector(".pop-video-overlay");
const exitButton = document.querySelectorAll(".video-exit-button");
//
const btnNavVideoTop = document.querySelector("#btn-nav-pop-video-top");
const btnNavVideoBottom = document.querySelector("#btn-nav-pop-video-bottom");
const popVideos = document.querySelectorAll(".pop-video");
const popVideosCount = document.querySelectorAll(".pop-video").length;
//
let stepPop = 0;

exitButton.forEach((item)=>{
    item.addEventListener('click', ()=>{
        videoOverlay.style = "display : none !important;";
    });
});

btnNavVideoTop.addEventListener('click', ()=>{
    if(stepPop > 0){
        stepPop -= 1;
        popVideos.forEach((item)=>{
            item.style = "transform:translateY("+(stepPop * 100 * (-1))+"%)";
        });
        //
        if(stepPop == 0){
            btnNavVideoTop.style.opacity = 0;
        }else{
            btnNavVideoBottom.style.opacity = 0.7;
        }
    }
});

btnNavVideoBottom.addEventListener('click', ()=>{
    if(stepPop < (popVideosCount-1)){
        stepPop += 1;
        popVideos.forEach((item)=>{
            item.style = "transform:translateY("+(stepPop * 100 * (-1))+"%)";
        });
        //
        if(stepPop == (popVideosCount-1)){
            btnNavVideoBottom.style.opacity = 0;
        }else{
            btnNavVideoTop.style.opacity = 0.7;
        }
    }
});

window.addEventListener('DOMContentLoaded', ()=>{
    videoOverlay.style = "opacity:1";
});