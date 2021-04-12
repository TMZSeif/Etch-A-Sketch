let div;
let container = document.querySelector("#container");

for (let i = 0; i < 16 * 16; i++) {
  div = document.createElement("div");
  div.style.border = "2px solid black";
  div.style.padding = "10%";
  container.appendChild(div);
}

let f = document.querySelectorAll("div");

for (let i = 1; i < f.length; i++) {
  f[i].addEventListener("mouseenter", () => {
    f[i].style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
}
