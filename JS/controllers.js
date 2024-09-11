//Controllers
function toggleDropdown() {
  let menu = document.getElementById("hilsList");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
function decay() {
  fuelBar.style.width = fuelProgress + "%";
  fuelProgress -= 10;
}
function setTimer() {
  fuelTimer = setInterval(decay, 1000);
  }
setTimer();
function drive() {}
function receive() {}
function greet() {}
