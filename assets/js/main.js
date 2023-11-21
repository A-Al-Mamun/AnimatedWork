
let preBtn = document.getElementsByClassName('left-btn')[0];

let nextBtn = document.getElementsByClassName('right-btn')[0];

let slider = document.querySelectorAll('.slider');

slider.forEach(item => {
    // console.log(slider[item])
    nextBtn.addEventListener('click', () => {
        // item.style.display = 'block';
        console.log(item);
    });
});

