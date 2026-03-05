function format(s){
    let n = s.length;
    let ans="";
    for(let i=0 ; i<n ;  i++){
        if((s.charCodeAt(i) >= "A".charCodeAt(0)) && (s.charCodeAt(i)<="Z".charCodeAt(0))){
            ans+=" ";
        }
        ans+=s[i];
    }
    return ans;
}
async function submitInput(){
    let box = document.getElementById("input1").value;
    let output = document.getElementById("allocation");
    let tab = document.getElementById("prev");
    if(!box){
        alert("Enter valid input");
        return;
    }
    let form = new FormData();
   //this code is hidden
    });
    if(!(send.ok)){
        output.innerHTML = "<h2>An Error Occured! Try reloading the page after a few minutes!</h2>";
        return;
    }
    else{
       //the remaining code is hidden
    }
}
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popupImage');
const closeBtn = document.getElementById('closePopup');
const sliderContainer = document.getElementById('sliderContainer');

const popupDots = document.querySelector('.popup-dots');

let index = 0;
let interval;
let isPopup = false;
let popupPaused = false;

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === i);
    dots[idx].classList.toggle('active', idx === i);
  });
  updatePopup(i);
}

function updatePopup(i) {
  popupImg.src = slides[i].src;

  // Rebuild popup dots
  popupDots.innerHTML = '';
  slides.forEach((_, idx) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (idx === i) dot.classList.add('active');
    dot.onclick = () => {
      index = idx;
      showSlide(index);
      resumePopupAutoplay();
    };
    popupDots.appendChild(dot);
  });
}

function startAutoplay() {
  clearInterval(interval);
  interval = setInterval(() => {
    if (isPopup && popupPaused) return; // Pause only if popup mode AND paused
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);
}

function pauseAutoplay() {
  clearInterval(interval);
}

function resumePopupAutoplay() {
  popupPaused = false;
  startAutoplay();
}

document.querySelector('.prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
  resumePopupAutoplay();
};

document.querySelector('.next').onclick = () => {
  index = (index + 1) % slides.length;
  showSlide(index);
  resumePopupAutoplay();
};

dots.forEach((dot, i) => {
  dot.onclick = () => {
    index = i;
    showSlide(i);
    resumePopupAutoplay();
  };
});

slides.forEach((slide, i) => {
  slide.addEventListener('click', () => {
    isPopup = true;
    popupPaused = false;
    popup.style.display = 'flex';
    index = i;
    showSlide(index);
    startAutoplay();
  });
});

// Pause/resume slideshow on hover (main slider)
sliderContainer.addEventListener('mouseenter', pauseAutoplay);
sliderContainer.addEventListener('mouseleave', () => {
  if (!isPopup) startAutoplay();
});

// Toggle pause/resume on popup image click
popupImg.onclick = () => {
  popupPaused = !popupPaused;
  if (!popupPaused) startAutoplay();
};

// Close popup
closeBtn.onclick = () => {
  popup.style.display = 'none';
  isPopup = false;
  popupPaused = false;
  startAutoplay();
};

// Clicking outside image also closes popup
window.addEventListener('click', (e) => {
  //code is hidden
});

// Start
showSlide(index);
startAutoplay();

