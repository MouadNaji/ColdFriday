"use strcit";
let first = document.querySelector("#first");
let second = document.querySelector("#video-med-logo-beholder");
let video = document.querySelector("#myVideo");
let body = document.querySelector("body");

first.addEventListener("click", start);

function start() {
  video.play();

  body.style.transition = "2s";
  body.style.background = "rgb(157, 172, 205)";

  setTimeout(function() {
    second.style.display = "block";
    first.style.display = "none";
  }, 1400);
}
