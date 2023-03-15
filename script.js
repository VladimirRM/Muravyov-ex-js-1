const div = document.createElement("div");

div.classList.add(".wrapper");

const body = document.querySelector("body");

body.appendChild(div);

div.textContent = "huy";

const header = document.createElement("h1");
header.textContent = "DOM";
