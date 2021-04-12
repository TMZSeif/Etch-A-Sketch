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

let size;
let button = document.querySelector("#change");

button.addEventListener("click", () => {
  do {
    size = prompt("Size: ");
  } while (parseInt(size) > 64 || size === "" || isNaN(size));

  for (let i = 1; i < f.length; i++) {
    f[i].style.backgroundColor = "rgb(180, 164, 164)";
  }

  container.textContent = "";

  for (let i = 0; i < size * size; i++) {
    div = document.createElement("div");
    div.style.border = "2px solid black";
    div.style.padding = "10%";
    container.appendChild(div);
  }

  f = document.querySelectorAll("div");

  for (let i = 1; i < f.length; i++) {
    f[i].addEventListener("mouseenter", () => {
      f[i].style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
  }

  container.style.gridTemplateColumns = "repeat(" + size.toString() + ", auto)";
});

let change = document.querySelector("#reset");

change.addEventListener("click", () => {
  for (let i = 1; i < f.length; i++) {
    f[i].style.backgroundColor = "rgb(180, 164, 164)";
  }
});
