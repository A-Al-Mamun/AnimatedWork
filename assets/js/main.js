
let preBtn = document.getElementsByClassName('left-btn')[0];

let nextBtn = document.getElementsByClassName('right-btn')[0];

let slider = document.querySelector('.slider');
let slideItem = document.querySelectorAll('.item');

let slideIndex = 0;
slideItem[slideIndex].classList.add('active');

nextBtn.addEventListener('click', () => {
    slideItem[slideIndex].classList.remove('active');

    slideIndex = (slideIndex === slideItem.length - 1) ? 0 : slideIndex + 1;
    slideItem[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
})


preBtn.addEventListener('click', () => {
    slideItem[slideIndex].classList.remove('active');

    slideIndex = (slideIndex === 0) ? slideItem.length - 1 : slideIndex - 1;
    slideItem[slideIndex].classList.add('active');

    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
})


