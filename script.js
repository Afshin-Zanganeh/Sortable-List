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
    draggableList.innerHTML += `<div class="draggable-item"><div class="number">${
      index + 1
    }</div><p class="name">${person}</p><i class="fas fa-bars"></i></div>`;
  });

checkBtn.addEventListener("click", () => {
  const items = document.querySelectorAll(".name");
  items.forEach((item, index) => {
    if (item.innerText === correctOrder[index]) {
        item.classList.remove('wrong')
        item.classList.add('correct')
    }else {
        item.classList.remove('correct')
        item.classList.add('wrong')
    }
  });
});
