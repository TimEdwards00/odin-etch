const container = document.querySelector("#container-main");
let size = 16;
let pixelDimension = Math.floor(960 / size);

function clear() {
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}

function genererateGrid() {
  for (let i = 0; i < size ** 2; i++) {
    container.appendChild(document.createElement("div"));
  }

  const pixels = container.querySelectorAll("div");

  pixels.forEach((pixel) => {
    pixel.classList.add("pixel");
    pixel.setAttribute(
      "style",
      `height: ${pixelDimension}px; width: ${pixelDimension}px;`
    );

    pixel.addEventListener("mouseover", () => {
      pixel.classList.toggle("active");
    });
  });
}

const setSizeButton = document.querySelector("#set-size");

setSizeButton.addEventListener("click", () => {
  size = prompt("Integer between 1 and 96");
  pixelDimension = Math.floor(960 / size);
  clear();
  genererateGrid();
});

const eraseButton = document.querySelector("#erase");

eraseButton.addEventListener("click", () =>{
    clear();
    genererateGrid();
}
)

genererateGrid();