const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//filled
fill.addEventListener("dragstart", dragstart);
fill.addEventListener("dragend", dragend);
//functions
for (const empty of empties) {
  empty.addEventListener("dragover", dragover);
  empty.addEventListener("dragenter", dragenter);
  empty.addEventListener("dragleave", dragleave);
  empty.addEventListener("drop", dragdrop);
}
function dragstart() {
  console.log("Start");
  this.className = `hold`;
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}
function dragend() {
  this.className = "fill";
}
function dragover(e) {
  e.preventDefault();
  console.log("over");
}
function dragenter(e) {
  e.preventDefault();
  this.classList.add("hovered");

  console.log("enter");
}
function dragleave(e) {
  this.className = "empty";
  console.log("leave");
}
function dragdrop(e) {
  console.log("drop");
  this.append(fill);
  this.className = "empty";
}
