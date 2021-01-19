"use strict";

const numberOfImgs = document.querySelectorAll(".img1").length;

const array1 = document.querySelectorAll(".pop");

for (let i = 0; i < numberOfImgs; i++) {
  array1[i].addEventListener("click", function () {
    array1[i].children[1].classList.toggle("hidden");
    console.log("hi");
  });
}
