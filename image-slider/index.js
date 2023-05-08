"use strict";

let divRibbon = document.querySelector(".ribbon");
let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let imgs = document.querySelectorAll(".ribbon > img");
let numImgs = imgs.length;
let heightImgs = imgs[0].height
let ribbonEnd = (numImgs - 1) * heightImgs * -1;

btnLeft.addEventListener('click', () => {
    let ribbonTop = parseInt(getComputedStyle(divRibbon).top);
    if (ribbonTop < 0) {
        divRibbon.style.top = `${ribbonTop + heightImgs}px`;
    }
});
btnRight.addEventListener('click', () => {
    let ribbonTop = parseInt(getComputedStyle(divRibbon).top);
    if (ribbonTop > ribbonEnd) {
        divRibbon.style.top = `${ribbonTop - heightImgs}px`;
    }
});

