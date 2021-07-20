const parentContainer = document.getElementById("container");
let gridSize = 32;
const colorPicker = document.getElementById("colorPicker");
const colorPickerWrapper = document.getElementById("colorPickerWrapper");

document.getElementById("userInput").onclick = setCustomGrid;
document.getElementById("increase").onclick = increaseGrids;
document.getElementById("decrease").onclick = decreaseGrids;
document.getElementById("reset").onclick = updateLogOnReset;

function generateGrids(rows, columns) {
  parentContainer.style.setProperty("--rows", rows);
  parentContainer.style.setProperty("--columns", columns);
  for (let i = 0; i < rows * columns; i++) {
    const gridCells = document.createElement("div");
    gridCells.setAttribute("onmouseover", "paint(this);");
    parentContainer.appendChild(gridCells).className = "gridCells";
  }
}

function removeGrids() {
  const reset = Array.from(parentContainer.childNodes);
  reset.forEach((el) => {
    parentContainer.removeChild(el);
  });
}

function increaseGrids() {
  gridSize += 8;
  removeGrids();
  generateGrids(gridSize, gridSize);

  if (gridSize >= 80) {
    alert("maximum grid size has reached");
    gridSize = 80;
  }
  updateLog();
}

function decreaseGrids() {
  if (gridSize >= 8) {
    gridSize -= 8;
    removeGrids();
    generateGrids(gridSize, gridSize);
  } else if (gridSize < 8) {
    gridSize -= 1;
    removeGrids();
    generateGrids(gridSize, gridSize);
  }

  if (gridSize < 0) {
    alert("No girds left to remove");
    gridSize = 0;
  }

  updateLog();
}

function setCustomGrid() {
  let customSize = parseInt(prompt("Enter a number from 1 to 80"));
  if (customSize < 1 || customSize > 80 || isNaN(customSize)) {
    alert("The input should be between 1 and 80");
  } else {
    removeGrids();
    gridSize = customSize;
    generateGrids(customSize, customSize);
    updateLog();
  }
}

function paint(x) {
  x.style.background = colorPicker.value;
}

(function clearBackground() {
  const clearBtn = document.getElementById("clearBtn");
  let changeBackground = Array.from(parentContainer.childNodes);
  changeBackground.forEach((el) => {
    el.style.background = "initial";
  });
  clearBtn.onclick = clearBackground;
})();

function updateLog() {
  document.getElementById(
    "gridCounter"
  ).innerText = `${gridSize} x ${gridSize}`;
}

function updateLogOnReset() {
  gridSize = 0;
  const reset = Array.from(parentContainer.childNodes);
  reset.forEach((el) => {
    parentContainer.removeChild(el);
  });
  updateLog();
}

colorPicker.onchange = function () {
  colorPickerWrapper.style.backgroundColor = colorPicker.value;
};
colorPickerWrapper.style.backgroundColor = colorPicker.value;

generateGrids(gridSize, gridSize);

updateLog();
