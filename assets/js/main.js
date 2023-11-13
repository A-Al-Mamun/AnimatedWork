

let bg1 = document.getElementsByClassName('bgItem1')[0];
let bg2 = document.getElementsByClassName('bgItem2')[0];
let bg3 = document.getElementsByClassName('bgItem3')[0];
let bg4 = document.getElementsByClassName('bgItem4')[0];

let bg2Check = (bg2.style.left = 100 + '%');
const nextbtn = () => {
    if(bg1.style.left == 0){
        bg2.style.left = 0;
    } else if(bg2.style.left == bg2Check){
        alert('Orange');
    }
}
