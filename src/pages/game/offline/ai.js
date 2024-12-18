import imgUrl from '/assets/meme.jpg';

export function render(app, navigate) {
  app.innerHTML = `
      <canvas id="pongCanvas" style="height: 80vh; background-color:#222"></canvas>
  `;
  const canvas = document.getElementById("pongCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball properties
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speedX: 10,
  speedY: 10,
  color: "white",
};

// Paddle properties
const paddle = {
  width: 10,
  height: 100,
  x: 20,
  y: canvas.height / 2 - 50,
  speed: 35,
  dy: 0,
  color: "white",
};

// AI paddle
const aiPaddle = {
  ...paddle,
  x: canvas.width - 30,
  y: canvas.height / 2 - 50,
};

// Draw ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

// Draw paddle
function drawPaddle(p) {
  ctx.fillStyle = p.color;
  ctx.fillRect(p.x, p.y, p.width, p.height);
}

// Move paddles
function movePaddles() {
  // Player paddle
  paddle.y += paddle.dy;

  // Prevent paddle from leaving the screen
  if (paddle.y < 0) paddle.y = 0;
  if (paddle.y + paddle.height > canvas.height)
    paddle.y = canvas.height - paddle.height;

  // AI paddle moves towards the ball
  if (ball.y < aiPaddle.y) aiPaddle.y -= paddle.speed;
  if (ball.y > aiPaddle.y + aiPaddle.height) aiPaddle.y += paddle.speed;

  // Prevent AI paddle from leaving the screen
  if (aiPaddle.y < 0) aiPaddle.y = 0;
  if (aiPaddle.y + aiPaddle.height > canvas.height)
    aiPaddle.y = canvas.height - aiPaddle.height;
}

// Move ball
function moveBall() {
  ball.x += ball.speedX;
  ball.y += ball.speedY;

  // Bounce off top and bottom walls
  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.speedY *= -1;
  }

  // Bounce off paddles
  if (
    ball.x - ball.radius < paddle.x + paddle.width &&
    ball.y > paddle.y &&
    ball.y < paddle.y + paddle.height
  ) {
    ball.speedX *= -1;
  }

  if (
    ball.x + ball.radius > aiPaddle.x &&
    ball.y > aiPaddle.y &&
    ball.y < aiPaddle.y + aiPaddle.height
  ) {
    ball.speedX *= -1;
  }

  // Reset ball if it goes off screen
  if (ball.x < 0 || ball.x > canvas.width) {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speedX = ball.speedX > 0 ? -4 : 4; // Change direction
  }
}

// Key handlers
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") paddle.dy = -paddle.speed;
  if (e.key === "ArrowDown") paddle.dy = paddle.speed;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp" || e.key === "ArrowDown") paddle.dy = 0;
});

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw elements
  drawBall();
  drawPaddle(paddle);
  drawPaddle(aiPaddle);

  // Update game state
  moveBall();
  movePaddles();

  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();

}
