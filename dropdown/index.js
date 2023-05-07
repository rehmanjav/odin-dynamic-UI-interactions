"use strict";

let btnHamburger = document.querySelector(".hamburger");
let divDropdown = document.querySelector("#dropdown");

btnHamburger.addEventListener('click', () => {
    console.log("clicked");
    divDropdown.classList.toggle("dropdownHidden");
});