const myslides = document.querySelectorAll('.myslider');
const dots = document.querySelectorAll('.dot');

let counter = 1;
slideFun(counter);

let timer = setInterval(autoslide, 8000);

function autoslide() {
    counter += 1;
    slideFun(counter);
}

function plusSlides(n) {
    counter += n;
    slideFun(counter);
    resetTimer();
}

function currentSlide(n) {
    counter = n;
    slideFun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function slideFun(n) {
    let i;
    for (i = 0; i < myslides.length; i++) {
        myslides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    if (n > myslides.length) {
        counter = 1;
    }
    if (n < 1) {
        counter = myslides.length;
    }
    myslides[counter - 1].style.display = "block";
    dots[counter - 1].classList.add('active');
}
