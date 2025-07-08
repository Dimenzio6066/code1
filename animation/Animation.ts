namespace Balls {
    type Vector = { x: number; y: number }
    type Ball = {
        element: HTMLSpanElement;
        position: Vector;
        velocity: Vector;
    };

    type Grid = {
        position: Vector;
        size: Vector;
        balls: Ball[];
        addBall: (ball: Ball) => void;
        removeBall: (ball: Ball) => void;
    };

    window.addEventListener("load", hndlLoad);
    const balls: Ball[] = [];
    let timePreviousFrame: number = Date.now();


    const grid: Grid[] = [];

    function hndlLoad(): void {
        for (let i: number = 0; i < 700; i++) {
            const randomSign = () => (Math.random() < 0.5 ? -1 : 1);
            const ball: Ball = {
                element: document.createElement("span"),
                position: { x: 1000 * i * Math.random(), y: 1000 * i * Math.random() },
                velocity: { 
                    x: Math.random() * 1000 * randomSign(),
                    y: Math.random() * 1000 * randomSign()
                }
            };
            document.body.appendChild(ball.element);

            balls.push(ball);
        }
        move();
    }


    function move(): void {
        const timeCurrent: number = Date.now();
        let timeDelta: number = timeCurrent - timePreviousFrame;
        timeDelta /= 1000;
        console.log("Time Delta: " + timeDelta + " ms");

        for (let ball of balls) {
            ball.position.x += ball.velocity.x * timeDelta;
            ball.position.y += ball.velocity.y * timeDelta;

            ball.position.x = (ball.position.x + window.innerWidth) % window.innerWidth;
            ball.position.y = (ball.position.y + window.innerHeight) % window.innerHeight;

            ball.element.style.transform = "matrix(30, 0, 0, 30," + ball.position.x + ", " + ball.position.y + ")";
        }
        timePreviousFrame = timeCurrent;
        // setTimeout(move, 1000 / 30);
        requestAnimationFrame(move);
    }
}