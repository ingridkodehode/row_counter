let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}

let saveBtn = document.getElementById("save-btn");

function save() {
  let countSrt = count + " - ";
  saveEl.textContent += countSrt;
  countEl.textContent = 0;
  count = 0;
}
