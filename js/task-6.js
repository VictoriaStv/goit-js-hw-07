document.addEventListener("DOMContentLoaded", () => {
  const controls = document.querySelector("#controls");
  const input = controls.querySelector("input");
  const createBtn = controls.querySelector("button[data-create]");
  const destroyBtn = controls.querySelector("button[data-destroy]");
  const boxes = document.querySelector("#boxes");

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    boxes.innerHTML = "";
    let size = 30;
    const elements = [];

    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      size += 10;
      elements.push(box);
    }

    boxes.append(...elements);
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }

  createBtn.addEventListener("click", () => {
    console.log("Create button clicked!");
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      console.log("Creating boxes:", amount);
      input.value = "";
    } else {
      alert("Please enter a number between 1 and 100");
    }
  });

  destroyBtn.addEventListener("click", () => {
    console.log("Destroy button clicked!");
    destroyBoxes();
    input.value = "";
  });
});
