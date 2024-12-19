export function render(app, navigate) {
  app.innerHTML = `
      <canvas id="pongCanvas" width="800px" height="400px" style="border: 1px solid #FFF">
          Your browser does not support this game.
      </canvas>
      <div class="score-box" style="display: flex; align-items: center; justify-content: center;">
          <h1 id="left-score">0</h1>
          <h1>:</h1>
          <h1 id="right-score">0</h1>
      </div>
  `;

  function reflectBall(ball, paddle) {
    const hitPoint = (ball.y - (paddle.y + paddleHeight / 2)) / (paddleHeight / 2);
    const maxBounceAngle = Math.PI / 4;  // 최대 반사 각도 45도
    const bounceAngle = hitPoint * maxBounceAngle;

    const speedMagnitude = Math.sqrt(speed.ball.x ** 2 + speed.ball.y ** 2);
    speed.ball.x = speedMagnitude * Math.cos(bounceAngle) * (ball.x < canvas.width / 2 ? 1 : -1);
    speed.ball.y = speedMagnitude * Math.sin(bounceAngle);
  }

  function increaseBallSpeed() {
    const increaseFactor = 1.1;
    speed.ball.x *= increaseFactor;
    speed.ball.y *= increaseFactor;
  }

  function finish(winner) {
    alert(`${winner} wins!`);
    navigate('main');
  }

  /* Scoreborad */
  const left = document.getElementById('left-score');
  const right = document.getElementById('right-score');

  function leftWin() {
      left.textContent = Number(left.textContent) + 1;
      if (Number(left.textContent) === 5) {
          finish('Left');
      }
  }

  function rightWin() {
      right.textContent = Number(right.textContent) + 1;
      if (Number(right.textContent) === 5) {
          finish('Right');
      }
  }

  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
  }

  /* Pong Game Play */
  const canvas = document.getElementById('pongCanvas');
  const ctx = canvas.getContext('2d');

  const paddleWidth = 10, paddleHeight = 100;
  const leftPaddle = { x: 0, y: (canvas.height - paddleHeight) / 2 };
  const rightPaddle = { x: canvas.width - paddleWidth, y: (canvas.height - paddleHeight) / 2 };

  const ballRadius = 10;
  const ball = { x: canvas.width / 2, y: canvas.height / 2 };
  const speed = { paddle: 8, ball: { x: 5, y: 5 } };

  let leftPaddleDirection, rightPaddleDirection;

  function drawPaddle(paddle) {
      ctx.fillStyle = '#FFF';
      ctx.fillRect(paddle.x, paddle.y, paddleWidth, paddleHeight);
  }

  function drawBall(ball) {
      ctx.fillStyle = '#FFF'
      ctx.beginPath();
      ctx.ellipse(ball.x, ball.y, ballRadius, ballRadius, 0, 0, Math.PI * 2);
      ctx.fill();
  }

  function movePaddle(left, right) {
      if (left === 'up' && leftPaddle.y > 0) {
          leftPaddle.y -= speed.paddle;
      } else if (left === 'down' && leftPaddle.y < canvas.height - paddleHeight) {
          leftPaddle.y += speed.paddle;
      }
      if (right === 'up' && rightPaddle.y > 0) {
          rightPaddle.y -= speed.paddle;
      } else if (right === 'down' && rightPaddle.y < canvas.height - paddleHeight) {
          rightPaddle.y += speed.paddle;
      }
  }

  function moveBall() {
      ball.x += speed.ball.x;
      ball.y += speed.ball.y;
      if (ball.y < ballRadius || ball.y > canvas.height - ballRadius) {
          speed.ball.y = -speed.ball.y;
          console.log(speed.ball.y);
      }
      if (ball.x <= paddleWidth + ballRadius) {
        if (ball.y >= leftPaddle.y && ball.y <= leftPaddle.y + paddleHeight) {
            reflectBall(ball, leftPaddle);
            increaseBallSpeed();
          }
          else {
              rightWin();
              resetGame();
          }
      } else if (ball.x >= canvas.width - paddleWidth - ballRadius) {
          if (ball.y >= rightPaddle.y && ball.y <= rightPaddle.y + paddleHeight) {
            reflectBall(ball, rightPaddle);
            increaseBallSpeed();
          }
          else {
              leftWin();
              resetGame();
          }
      }
  }

  function resetGame() {
    leftPaddle.y = (canvas.height - paddleHeight) / 2;
    rightPaddle.y = (canvas.height - paddleHeight) / 2;
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    const initialDirectionX = Math.random() < 0.5 ? 1 : -1;
    const initialDirectionY = Math.random() < 0.5 ? 1 : -1;
    speed.ball.x = 5 * initialDirectionX;
    speed.ball.y = (Math.random() * 4 + 2) * initialDirectionY;  // 2 ~ 6
  }

  window.addEventListener('keydown', (e) => {
      switch (e.key) {
          case 'ArrowUp':
              rightPaddleDirection = 'up';
              break;
          case 'ArrowDown':
              rightPaddleDirection = 'down';
              break;
          case 'w':
              leftPaddleDirection = 'up';
              break;
          case 's':
              leftPaddleDirection = 'down';
              break;
          default:
              rightPaddleDirection = null;
              break;
      }
  });

  window.addEventListener('keyup', (e) => {
      switch (e.key) {
          case 'ArrowUp':
              rightPaddleDirection = null;
              break;
          case 'ArrowDown':
              rightPaddleDirection = null;
              break;
          case 'w':
              leftPaddleDirection = null;
              break;
          case 's':
              leftPaddleDirection = null;
              break;
          default:
              leftPaddleDirection = null;
              rightPaddleDirection = null;
              break;
      }
  })

  function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall(ball);
      drawPaddle(rightPaddle);
      drawPaddle(leftPaddle);
      movePaddle(leftPaddleDirection, rightPaddleDirection);
      moveBall();
      requestAnimationFrame(draw);
  }

  draw();
}