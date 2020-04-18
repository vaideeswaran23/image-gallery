const pics = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
  "images/11.jpg",
  "images/12.jpg",
  "images/13.jpg",
  "images/14.jpg",
  "images/15.jpg",
];
let count = 0;
const img = document.querySelector("img");
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  if (count < 14) {
    count++;
  } else {
    count = 0;
  }
  img.src = pics[count];
});
