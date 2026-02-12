const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const width = canvas.width;
const height = canvas.height;


function random(min, max) {
    return Math.random() * (max - min) + min;
}


function randomColor() {
    return `rgb(
        ${Math.floor(random(0,255))},
        ${Math.floor(random(0,255))},
        ${Math.floor(random(0,255))}
    )`;
}


function getDistance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}


// ---------- Ball class ----------
class Ball {
    constructor() {
        this.radius = random(10, 25);
        this.x = random(this.radius, width - this.radius);
        this.y = random(this.radius, height - this.radius);
        this.dx = random(-3, 3);
        this.dy = random(-3, 3);
        this.color = randomColor();
    }


    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }


    update() {
        this.x += this.dx;
        this.y += this.dy;


        // Wall collision
        if (this.x + this.radius > width || this.x - this.radius < 0) {
            this.dx = -this.dx;
            this.color = randomColor();
        }


        if (this.y + this.radius > height || this.y - this.radius < 0) {
            this.dy = -this.dy;
            this.color = randomColor();
        }


        this.draw();
    }
}


// ---------- Create balls ----------
const balls = [];
const BALL_COUNT = 30;


for (let i = 0; i < BALL_COUNT; i++) {
    balls.push(new Ball());
}


// ---------- Collision between balls ----------
function handleBallCollision() {
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {


            let dist = getDistance(
                balls[i].x, balls[i].y,
                balls[j].x, balls[j].y
            );


            if (dist <= balls[i].radius + balls[j].radius) {
                balls[i].color = randomColor();
                balls[j].color = randomColor();
            }
        }
    }
}


// ---------- Animation loop ----------
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, width, height);


    balls.forEach(ball => ball.update());
    handleBallCollision();
}


animate();
