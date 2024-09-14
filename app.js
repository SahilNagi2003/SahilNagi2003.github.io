function closeSidebar() {
    document.getElementById("checkbox").checked = false; 
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}
