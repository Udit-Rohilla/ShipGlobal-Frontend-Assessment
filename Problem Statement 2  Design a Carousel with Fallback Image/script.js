let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.current');

function showImage(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }

    document.querySelector('.carousel-images').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function nextImage() {
    showImage(currentIndex + 1);
}

function prevImage() {
    showImage(currentIndex - 1);
}

function currentImage(index) {
    showImage(index - 1);
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Initialize the carousel
showImage(currentIndex);
