"use strict";

let divRibbon = document.querySelector(".ribbon");
let btnLeft = document.querySelector(".btn-left");
let btnRight = document.querySelector(".btn-right");
let imgs = document.querySelectorAll(".ribbon > img");
let numImgs = imgs.length;
let heightImgs = imgs[0].height
let ribbonEnd = (numImgs - 1) * heightImgs * -1;            // top of last image
let totalLength = numImgs * heightImgs;
let currentImage = 0;

function updateImgIndicator() {
    for (let i = 0; i < numImgs; i++) {
        let currentCircle = document.querySelector(`[data-index="${i}"]`);
        if (currentCircle.dataset.index != currentImage) {
            currentCircle.classList.remove("img-active");
        } else if (currentCircle.dataset.index == currentImage) {
            currentCircle.classList.add("img-active");
        }
    }
}

function nextImage() {
    btnRight.click();
}

btnLeft.addEventListener('click', () => {
    let ribbonTop = parseInt(getComputedStyle(divRibbon).top);

    if (ribbonTop < 0) {
        divRibbon.style.top = `${ribbonTop + heightImgs}px`;
        currentImage -= 1;
        updateImgIndicator();
    } else if (ribbonTop == 0) {
        divRibbon.style.top = `${ribbonEnd}px`;
        currentImage = numImgs - 1;
        updateImgIndicator();
    }
});
btnRight.addEventListener('click', () => {
    let ribbonTop = parseInt(getComputedStyle(divRibbon).top);

    if (ribbonTop == ribbonEnd) {
        divRibbon.style.top = `0px`;
        currentImage = 0;
        updateImgIndicator();
    } else if (ribbonTop > ribbonEnd) {
        divRibbon.style.top = `${ribbonTop - heightImgs}px`;
        currentImage += 1;
        updateImgIndicator();
    }
});

window.addEventListener('click', (e) => {
    if (e.target.classList.contains("img-circle")) {
        let index = e.target.dataset.index;
        currentImage = parseInt(index);
        divRibbon.style.top = `${index * -600}px`;
        updateImgIndicator();
    }
});

updateImgIndicator();
setInterval(nextImage, 1000);

