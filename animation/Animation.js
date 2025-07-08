"use strict";
var Balls;
(function (Balls) {
    window.addEventListener("load", hndlLoad);
    const balls = [];
    let timePreviousFrame = Date.now();
    const grid = [];
    function hndlLoad() {
        for (let i = 0; i < 7; i++) {
            const randomSign = () => (Math.random() < 0.5 ? -1 : 1);
            const ball = {
                element: document.createElement("span"),
                position: { x: 1000 * Math.random(), y: 1000 * Math.random() },
                velocity: {
                    x: Math.random() * 1000 * randomSign(),
                    y: Math.random() * 1000 * randomSign()
                }
            };
            document.body.appendChild(ball.element);
            balls.push(ball);
            update();
        }
    }
    function update() {
        const timeCurrent = Date.now();
        let timeDelta = timeCurrent - timePreviousFrame;
        timeDelta /= 1000;
        console.log("Time Delta: " + timeDelta + " ms");
        move(timeDelta);
        checkCollisionAll();
        timePreviousFrame = timeCurrent;
        requestAnimationFrame(move);
    }
    function move(timeDelta) {
        for (let ball of balls) {
            ball.position.x += ball.velocity.x * timeDelta;
            ball.position.y += ball.velocity.y * timeDelta;
            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;
            ball.element.style.transform = "matrix(30, 0, 0, 30," + ball.position.x + ", " + ball.position.y + ")";
        }
    }
    function checkCollisionAll() {
        for (const a in balls) {
            console.log(a);
            for (let b = Number(a) + 1; b < balls.length; b++) {
                console.log(b);
                checkCollision(Number(a), Number(b));
            }
        }
    }
    function checkCollision(_a, _b) {
        const ballA = balls[_a];
        const ballB = balls[_b];
        const dx = ballA.position.x - ballB.position.x;
        const dy = ballA.position.y - ballB.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 30) {
            console.log("Collision detected between " + _a + " and " + _b);
        }
    }
})(Balls || (Balls = {}));
//# sourceMappingURL=Animation.js.map