let div;
let container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
  div = document.createElement("div");
  div.style.border = "2px solid black";
  div.style.padding = "10%";
  container.appendChild(div);
}
