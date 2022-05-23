"use strict";

const container = document.querySelector(".container");
const url = "https://source.unsplash.com/random/";
const title = document.querySelector(".title");
const rows = 10;
let image;
for (let i = 0; i < rows * 3; i++) {
  image = document.createElement("img");
  image.src = `${url}${getRandomSize()}`;
  container.appendChild(image);
}

function getRandomSize() {
  return `${getRandomNr()}x${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 20) + 300;
}
