"use strict";
var TankMoves;
(function (TankMoves) {
    window.addEventListener("load", hndlLoad);
    const randomSign = () => (Math.random() < 0.5 ? -1 : 1);
    let timePreviousFrame = Date.now();
    let tank = {
        element: document.createElement("span"),
        position: { x: 1000 * Math.random(), y: 1000 * Math.random() },
        velocity: { x: Math.random() * 1000 * randomSign(),
            y: Math.random() * 1000 * randomSign() },
        rotation: 90
    };
    function hndlLoad() {
        document.body.appendChild(tank.element);
        update(0);
    }
    function update(_time) {
        let timeDelta = _time - timePreviousFrame;
        timeDelta /= 1000;
        console.log("Time Delta: " + timeDelta + " ms");
        move(timeDelta);
        timePreviousFrame = _time;
        // requestAnimationFrame(move);
        requestAnimationFrame(() => update(Date.now()));
    }
    function move(timeDelta) {
        tank.rotation += 8;
        tank.position.x += tank.velocity.x * timeDelta;
        tank.position.y += tank.velocity.y * timeDelta;
        tank.position.x = (tank.position.x + window.innerWidth) % window.innerWidth;
        tank.position.y = (tank.position.y + window.innerHeight) % window.innerHeight;
        const matrix = createMatrix(tank.position, tank.rotation, { x: 60, y: 120 });
        tank.element.style.transform = matrix;
    }
    function createMatrix(_translation, _rotation, _scale) {
        const sin = Math.sin(Math.PI * _rotation / 180);
        const cos = Math.cos(Math.PI * _rotation / 180);
        const matrix = [_scale.x * cos, _scale.x * sin, _scale.y * -sin, _scale.y * cos, _translation.x, _translation.y];
        return "matrix(" + matrix.toString() + ")";
    }
})(TankMoves || (TankMoves = {}));
//# sourceMappingURL=GiveMeControllllll.js.map