let prompts = [
  "Waittt 😭",
  "Please think again 🥺",
  "I got flowers for you 🌹",
  "You're my favorite person 💞",
  "No is not allowed 😤",
  "Say YES please 😚"
];

let step = 0;
const girl = document.getElementById("girl");
const text = document.getElementById("text");
const buttons = document.getElementById("buttons");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const cutePrompts = document.getElementById("cutePrompts");

buttons.style.display = "none";

setTimeout(() => {
  text.innerHTML = "Look what I got for you...";
  girl.innerHTML = "👧💐";
}, 2000);

setTimeout(() => {
  text.innerHTML = "Will you be my Valentine? 💘";
  buttons.style.display = "block";
}, 4000);

noBtn.addEventListener("mouseover", () => {
  let x = Math.random() * (window.innerWidth - 120);
  let y = Math.random() * (window.innerHeight - 120);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (step < prompts.length) {
    cutePrompts.innerHTML += `<div>${prompts[step]}</div>`;
    step++;
  }
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
  <h1 style="font-size:60px;color:white;">
  YAYYY 💖 You are my Valentine forever 😍
  </h1>`;
});
