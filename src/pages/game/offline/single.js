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
    /* Scoreborad */
    const left = document.getElementById('left-score');
    const right = document.getElementById('right-score');

    function leftWin() {
        left.textContent = Number(left.textContent) + 1;
    }

    function rightWin() {
        right.textContent = Number(right.textContent) + 1;
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
    const speed = { paddle: 10, ball: { x: 5, y: 5 } };

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
            speed.ball.y = -speed.ball.y - 1;
            console.log(speed.ball.y);
        }
        if (ball.x <= paddleWidth) {
            if (ball.y >= leftPaddle.y && ball.y <= leftPaddle.y + paddleHeight) {
                speed.ball.x = -speed.ball.x + 1;
                console.log(speed.ball.x);
            }
            else {
                rightWin();
                resetGame();
            }
        } else if (ball.x >= canvas.width - paddleWidth) {
            if (ball.y >= rightPaddle.y && ball.y <= rightPaddle.y + paddleHeight) {
                speed.ball.x = -speed.ball.x + 1;
            }
            else {
                leftWin();
                resetGame();
            }
        }
    }

    function resetGame() {
        leftPaddle.x = 0; leftPaddle.y = (canvas.height - paddleHeight) / 2;
        rightPaddle.x = canvas.width - paddleWidth; rightPaddle.y = (canvas.height - paddleHeight) / 2;
        ball.x = canvas.width / 2; ball.y = canvas.height / 2;
        speed.paddle = 10; speed.ball.x = 5; speed.ball.y = 5;
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