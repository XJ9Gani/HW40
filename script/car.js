const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const runCar = document.querySelector(".runCar");
const fillBtn = document.querySelector(".fill");
const car = document.querySelector(".car");
const fuelScale = document.querySelector(".fuelScale__fill");
let moving = false;
let position = 0;
let maxPosition = 1360;
let fuel = 500;
let moveInterval;
let moveBackInterval;
let carStarted = false;

function wheelRotate() {
  let leftWheel = document.querySelector(".car__wheels--left");
  if (moving) {
    if (startBtn.textContent === "Start") {
      leftWheel.classList.add("rotateAnim");
      leftWheel.classList.remove("wheelBackRotate");
    } else if (startBtn.textContent === "Back") {
      leftWheel.classList.add("wheelBackRotate");
      leftWheel.classList.remove("rotateAnim");
    }
  } else {
    leftWheel.classList.remove("rotateAnim");
    leftWheel.classList.remove("wheelBackRotate");
  }
}

function startMove() {
  if (!carStarted) {
    alert("Машина не заведена");
    return;
  }
  if (!moving) {
    moving = true;
    wheelRotate();
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
        stopCar();
        alert("Достигнута Максимальная Точка");
        startBtn.innerText = "Back";
      } else if (fuel < 0) {
        stopCar();
        alert("Бензин Закончился!!");
      }
    }, 100);
  }
}

function moveBack() {
  if (!carStarted) {
    alert("Машина не заведена");
    return;
  }
  moving = true;
  if (moving) {
    moveBackInterval = setInterval(() => {
      position -= 10;
      fuel -= 10;
      car.style.transform = `translateX(${position}px)`;
      fuelScale.style.width = fuel + "px";
      if (position < 20) {
        stopCar();
        startBtn.textContent = "Start";
        alert("Достигнута Минимальная Точка");
      } else if (fuel < 0) {
        stopCar();
        alert("Бензин Закончился!!");
      }
    }, 100);
  }
}

function stopCar() {
  if (moving) {
    moving = false;
    clearInterval(moveInterval);
    clearInterval(moveBackInterval);
    wheelRotate();
  }
}

function movementHandler() {
  if (!carStarted) {
    alert("Машина не заведена");
    return;
  }
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

function toggleCar() {
  carStarted = !carStarted;
  if (carStarted) {
    startBtn.textContent = "Start";
    alert("Машина заведена");
  } else {
    stopCar();
    startBtn.textContent = "Start";
    alert("Машина остановлена");
  }
}

startBtn.addEventListener("click", movementHandler);
stopBtn.addEventListener("click", stopCar);
fillBtn.addEventListener("click", fillFuel);

const toggleBtn = document.querySelector(".toggle");
toggleBtn.addEventListener("click", toggleCar);
