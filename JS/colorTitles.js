function random(num) {
    return Math.floor(Math.random()*(num+1));
} 

function changeColor() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return rndCol;
}

const container = document.querySelector("#container");

container.addEventListener("click", (event) => {
  event.target.style.backgroundColor = changeColor();
});