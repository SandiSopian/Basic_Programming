// Menyiapkan Canvas
const mycanvas = document.querySelector("#mycanvas");

// Atur ukuran Canvas
mycanvas.width = window.innerWidth;
mycanvas.height = window.innerHeight;

// Tentukan Context
const c = mycanvas.getContext("2d");

// // Manipulasi Canvas
// // Membuat Rectangle
// c.fillStyle = "red";
// c.strokeStyle = "black";
// c.lineWidth = "5";

// c.rect(50, 50, 300, 300);
// c.fill();
// c.stroke();

// // Membuat Circle
// c.fillStyle = "blue";
// c.beginPath();

// c.arc(200, 200, 150, 0, 2 * Math.PI);
// c.fill();
// c.stroke();

// // Membuat Path (Triangle)
// c.fillStyle = "yellow";
// c.beginPath();

// c.moveTo(900, 50);
// c.lineTo(1050, 350);
// c.lineTo(750, 350);
// c.closePath();
// c.fill();
// c.stroke();

// Animasi Canvas
let x = 350;
let y = 200;
let speedX = 5;
let speedY = 5;
let radius = 150;

function draw() {
  window.requestAnimationFrame(draw);
  console.log("ok!");
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.fillStyle = "lightgreen";
  c.beginPath();
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.fill();
  c.stroke();

  if (x + radius > innerWidth || x - radius < 0) {
    speedX = -speedX;
  }
  if (y + radius > innerHeight || y - radius < 0) {
    speedY = -speedY;
  }

  x += speedX;
  y += speedY;
}

draw();
