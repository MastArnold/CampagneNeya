    const presentationTabItem = document.querySelectorAll(".presentation-tab-item");
    //
    const presentationButton1 = document.querySelector("#presentation-button-1");
    const presentationButton2 = document.querySelector("#presentation-button-2");
    const presentationButton3 = document.querySelector("#presentation-button-3");
    //
    const presentationTabItem1 = document.querySelector("#carousel-tab-1");
    const presentationTabItem2 = document.querySelector("#carousel-tab-2");
    const presentationTabItem3 = document.querySelector("#carousel-tab-3");
    //

    presentationButton1.addEventListener('click', ()=>{
        presentationButton2.classList.remove('active');
        presentationButton3.classList.remove('active');
        presentationButton1.classList.add('active');
        presentationTabItem.forEach((item)=>{
            item.style = "transform:translateX(0);"
        });
    });

    presentationButton2.addEventListener('click', ()=>{
        presentationButton1.classList.remove('active');
        presentationButton3.classList.remove('active');
        presentationButton2.classList.toggle('active');
        presentationTabItem.forEach((item)=>{
            item.style = "transform:translateX(-100%);"
        });
    });

    presentationButton3.addEventListener('click', ()=>{
        presentationButton1.classList.remove('active');
        presentationButton2.classList.remove('active');
        presentationButton3.classList.toggle('active');
        presentationTabItem.forEach((item)=>{
            item.style = "transform:translateX(-200%);"
        });
    });

