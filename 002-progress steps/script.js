"use strict";

// select all elements i need
const circles = document.querySelectorAll(".circle");
const lines = document.querySelectorAll(".line");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let whichNumber = 0;

// Next Event
nextBtn.addEventListener("click", (e) => {
  if (whichNumber < 3) {
    whichNumber++;
    prevBtn.classList.add("active-btn");
    circles[whichNumber].classList.add("active-circle");
    lines[whichNumber - 1].classList.add("active-line");
  }
  if (whichNumber == 3) {
    nextBtn.classList.remove("active-btn");
    return;
  }
});

// Prev Event
prevBtn.addEventListener("click", (e) => {
  if (whichNumber > 0) {
    nextBtn.classList.add("active-btn");
    circles[whichNumber].classList.remove("active-circle");
    lines[whichNumber - 1].classList.remove("active-line");
    whichNumber--;
  }
  if (whichNumber == 0) {
    prevBtn.classList.remove("active-btn");
    return;
  }
});
