const carouselContainer = document.querySelector('.section-head');
const carouselSlides = document.querySelector('.carousel-head');
const slides = document.querySelectorAll('.sections-head');
const slideWidth = slides[0].clientWidth;
let currentIndex = 0;
let sens = 'normal';

// Clonez le premier et dernier élément pour créer l'effet de boucle
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

carouselSlides.appendChild(firstClone);
carouselSlides.insertBefore(lastClone, slides[0]);

//carouselSlides.style.transform = `translateX(-${slideWidth}px)`;

// Fonction pour passer au slide suivant
const nextSlide = () => {
    currentIndex++;
    document.querySelectorAll('.sections-head').forEach((item)=>{
        item.style.transform = `translateX(-${100 * currentIndex}%)`;
    });
    if(currentIndex == 3){
        sens = 'reverse';
    }
};

// Fonction pour passer au slide précédent
const prevSlide = () => {
    currentIndex--;
    document.querySelectorAll('.sections-head').forEach((item)=>{
        item.style.transform = `translateX(-${100 * currentIndex}%)`;
    });
    if(currentIndex == 0){
        sens = 'normal';
    }
};

function carousel_head(){
    setTimeout(()=>{
        if(sens == 'normal'){
            nextSlide();
        }else{
            prevSlide();
        }
        carousel_head();
    }, 5000);
}

carousel_head();
// Appelez ces fonctions pour passer au slide suivant ou précédent
// Vous pouvez les déclencher en fonction des interactions utilisateur (clic sur un bouton, par exemple)


