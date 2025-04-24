// create 16 x 16 grid of square divs
const container = document.querySelector(".container");
const canvas = document.querySelector("#canvas");

const MIN_SIZE = 16;

canvasSize(MIN_SIZE);

function canvasSize(size) {
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
