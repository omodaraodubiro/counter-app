let count = document.querySelector(".count");
let buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});
function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "lightgreen";
  } else if (count.innerHTML < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "white";
  }
}
