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
  toggleGrid();
};

sizeInput.oninput = function () {
  canvasSize(this.value);
  toggleGrid();
};

canvasSize(16);

function canvasSize(size) {
  canvas.innerHTML = "";
  let width = size;
  let height = size;

  for (let i = 0; i < width; i++) {
    let newRow = document.createElement("div");
    newRow.classList.add("row");
    canvas.appendChild(newRow);

    for (let i = 0; i < height; i++) {
      let newColumn = document.createElement("div");
      newColumn.classList.add("column");
      newRow.appendChild(newColumn);
    }
  }
}

// show/hide grid
const toggleGridCheckbox = document.getElementById("toggleGrid");

function toggleGrid() {
  let column = canvas.querySelectorAll(".column");

  if (toggleGridCheckbox.checked == true) {
    column.forEach((div) => {
      div.classList.remove("noGrid");
      div.classList.add("grid");
    });
  } else if (toggleGridCheckbox.checked == false) {
    column.forEach((div) => {
      div.classList.add("noGrid");
    });
  }
}

toggleGridCheckbox.addEventListener("click", toggleGrid);

// click & hold to draw
const drawCheckbox = document.getElementById("draw");
const eraseCheckbox = document.getElementById("erase");

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
  if (drawCheckbox.checked == true) {
    e.target.style.cssText = "background-color: black;";
  } else if (eraseCheckbox.checked == true) {
    e.target.style.cssText = "background-color: white;";
  }
});

// clear canvas btn
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", () => {
  let pixel = canvas.querySelectorAll("div");
  pixel.forEach((div) => {
    div.style.backgroundColor = "white";
  });
});
// ^^establishing something globally will pull from global presets, this is why "grid" and "column" need to be established inside the scope of the btn instead of outside
