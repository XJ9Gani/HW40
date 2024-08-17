const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const fillBtn = document.querySelector(".fill");
const car = document.querySelector(".car");
const fuelScale = document.querySelector(".fuelScale__fill");
let moving = false;
let position = 0;
let maxPosition = 1360;
let fuel = 500;
function startMove() {
  if (!moving) {
    moving = true;
    move();
  }
}

function move() {
  if (moving) {
    moveInterval = setInterval(function () {
      position += 10;
      fuel -= 10;
      car.style.transform = `translateX(${position}px)`;
      fuelScale.style.width = fuel + "px";
      console.log(position);
      if (position > maxPosition) {
        moving = false;
        clearInterval(moveInterval);
        alert("Достигнута Максимальная Точка");
        startBtn.innerText = "Back";
      } else if (fuel < 0) {
        moving = false;
        alert("Бензин Закончился!!");
        clearInterval(moveInterval);
      }
    }, 100);
  }
}

function moveBack() {
  moving = true;
  if (moving) {
    moveBackInterval = setInterval(() => {
      position -= 10;
      fuel -= 10;
      car.style.transform = `translateX(${position}px)`;
      fuelScale.style.width = fuel + "px";
      if (position < 20) {
        moving = false;
        clearInterval(moveBackInterval);
        startBtn.textContent = "Start";
        alert("Достигнута Максимальная Точка");
      } else if (fuel < 0) {
        moving = false;
        alert("Бензин Закончился!!");
        clearInterval(moveBackInterval);
      }
    }, 100);
  }
}

function stopCar() {
  if (moving) {
    moving = false;
    clearInterval(moveInterval);
    clearInterval(moveBackInterval);
  }
}

function movementHendler() {
  if (startBtn.textContent === "Start") {
    startMove();
  } else {
    moveBack();
  }
}

function fillFuel() {
  fuel = 500;
  fuelScale.style.width = "500px";
}
startBtn.addEventListener("click", movementHendler);
stopBtn.addEventListener("click", stopCar);
fillBtn.addEventListener("click", fillFuel);
