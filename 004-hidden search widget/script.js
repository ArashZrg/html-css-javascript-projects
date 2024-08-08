// container
// input
// image

"use strict";

const container = document.querySelector("#container");
const input = document.querySelector(".input");
const image = document.querySelector(".image");
let flag = false;

image.addEventListener("click", (e) => {
  flag = !flag;
  console.log(input);
  if (flag) {
    input.classList.remove("input-close");
    input.classList.add("input-show");
  }
  if (!flag) {
    input.classList.add("input-close");
    input.classList.remove("input-show");
  }
});
