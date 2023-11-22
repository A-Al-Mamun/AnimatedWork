
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




// Testimonial

    let pre = document.getElementsByClassName('t-left')[0];
    let testNext = document.getElementsByClassName('t-right')[0];

    let testItem = document.querySelector('.test-items');
    let testItems = document.querySelectorAll('.t-item');

    let testIndex = 0;
    testItems[testIndex].classList.add('test');

    pre.addEventListener('click', () => {
        testItems[testIndex].classList.remove('test');

        testIndex = (testIndex === 0) ?  testItems.length - 1 : testIndex - 1;
        testItems[testIndex].classList.add('test');

        testItem.style.transform = `translateX(-${testIndex * 100}%)`;
    })

    testNext.addEventListener('click', () => {
        testItems[testIndex].classList.remove('test');

        testIndex = (testIndex === testItems.length - 1) ? 0 : testIndex + 1;
        testItems[testIndex].classList.add('test');

        testItem.style.transform = `translateX(-${testIndex * 100}%)`;
    })



