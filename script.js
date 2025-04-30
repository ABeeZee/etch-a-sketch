// change canvas size
const container = document.getElementsByClassName("container");
const canvas = document.getElementById("canvas");
const sizeSlider = document.getElementById("sizeSlider");
const sizeInput = document.getElementById("sizeInput");

let syncInputs = function (e) {
  size = e.target.value;
  sizeSlider.value = size;
  sizeInput.value = size;
};

sizeSlider.addEventListener("input", syncInputs);
sizeInput.addEventListener("input", syncInputs);

sizeSlider.oninput = function () {
  canvasSize(this.value);
};

sizeInput.oninput = function () {
  canvasSize(this.value);
};

canvasSize(16);

function canvasSize(size) {
  canvas.innerHTML = "";
  let width = size;
  let height = size;

  for (let i = 0; i < width; i++) {
    let newRow = document.createElement("div");
    // newRow.style.cssText = "background-color: black;";
    newRow.classList.add("row");
    canvas.appendChild(newRow);

    for (let i = 0; i < height; i++) {
      let newColumn = document.createElement("div");
      newColumn.classList.add("column");
      newColumn.style.cssText =
        "border-color: lightgray; border-style: solid; border-width: .25px";
      newRow.appendChild(newColumn);
    }
  }
}

// click & hold to draw
let clicked = false;
canvas.addEventListener("mousedown", () => {
  clicked = true;
});
canvas.addEventListener("mouseup", () => {
  clicked = false;
});
canvas.addEventListener("mouseleave", () => {
  clicked = false;
});

canvas.addEventListener("mousemove", (e) => {
  if (!clicked) {
    return;
  }
  e.target.style.cssText = "background-color: black;";
});
