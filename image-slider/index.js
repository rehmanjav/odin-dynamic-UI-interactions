"use strict";

let divRibbon = document.querySelector(".ribbon");
let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let imgs = document.querySelectorAll(".ribbon > img");
let numImgs = imgs.length;
let heightImgs = imgs[0].height
let ribbonEnd = (numImgs - 1) * heightImgs * -1;            // top of last image
let totalLength = numImgs * heightImgs;

btnLeft.addEventListener('click', () => {
    let ribbonTop = parseInt(getComputedStyle(divRibbon).top);
    if (ribbonTop < 0) {
        divRibbon.style.top = `${ribbonTop + heightImgs}px`;
    } else if (ribbonTop == 0) {
        divRibbon.style.top = `${ribbonEnd}px`;
    }
});
btnRight.addEventListener('click', () => {
    let ribbonTop = parseInt(getComputedStyle(divRibbon).top);
    if (ribbonTop > ribbonEnd) {
        divRibbon.style.top = `${ribbonTop - heightImgs}px`;
    } else if (ribbonTop == ribbonEnd) {
        divRibbon.style.top = `0px`;
    }
});

