const div = document.createElement("div");

div.classList.add("wrapper");

console.log(div);

const body = document.querySelector("body");

body.appendChild(div);

const header = document.createElement("h1");

header.textContent = " DOM (Document object model)";

div.insertAdjacentElement("beforebegin", header);

const ul = `
<ul>
<li>1</li>
<li>2</li>
</ul>
`;

div.innerHTML = ul;

const img = document.createElement("img");

img.src =
  "https://fastly.picsum.photos/id/862/240/240.jpg?hmac=o-z7CteQz19BKng4_1BnHfIivj3TjDohkw5YJ9o1Bok";
img.width = 240;
img.classList.add("super");

div.appendChild(img);

console.log(header);

const elemHtml = `
  <div class='pDiv'>
  <p>1</p>
  <p>2</p>
  </div>

  `;

const ulList = document.querySelector("ul");
ulList.insertAdjacentHTML("beforebegin", elemHtml);

const pDiv = document.querySelector('pDiv')
pDiv.children[1].classList.add('text')
pDiv.firstElementChild.remove()
