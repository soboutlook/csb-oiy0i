const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerWidth;
ctx.globalCompositeOperation = "destination-over";
let hue = Math.random() * 360;
let number = 0;
let scale = 10;
function drawFlower() {
  let angle = number * 2.52;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;
  ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(positionX, positionY, 4.78, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  number++;
  hue++;
}
function animate() {
  drawFlower();
  if (number > 720) return;
  requestAnimationFrame(animate);
}
animate();
