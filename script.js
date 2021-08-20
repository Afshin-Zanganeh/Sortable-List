const draggableList = document.getElementById("draggable-list");
const checkBtn = document.getElementById("check-btn");

const correctOrder = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffet",
  "Larry Page",
  "Mark Zuckerburg",
  "Elon Musk",
];

// scramble the order
correctOrder
  .map((person) => ({ name: person, value: Math.random() }))
  .sort((a, b) => a.value - b.value)
  .map((elem) => elem.name)
  .forEach((person, index) => {
    draggableList.innerHTML += `<div draggable="true" class="draggable-item"><div class="number">${
      index + 1
    }</div><p class="name">${person}</p><i class="fas fa-bars"></i></div>`;
  });

checkBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".name");
  items.forEach((item, index) => {
    if (item.innerText === correctOrder[index]) {
      item.classList.remove("wrong");
      item.classList.add("correct");
    } else {
      item.classList.remove("correct");
      item.classList.add("wrong");
    }
  });
});

const draggables = document.querySelectorAll(".draggable-item");
let draggedItem;
draggables.forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", item.querySelector(".name").innerText);
    draggedItem = item;
  });
  item.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  item.addEventListener("dragenter", () => {
    item.classList.add("over");
  });
  item.addEventListener("dragleave", () => {
    item.classList.remove("over");
  });
  item.addEventListener("drop", (e) => {
    e.preventDefault();
    item.classList.remove("over");
    const temp = e.dataTransfer.getData("text");
    const name = item.querySelector(".name");
    draggedItem.querySelector(".name").innerText = name.innerText;
    name.innerText = temp;
  });
});
