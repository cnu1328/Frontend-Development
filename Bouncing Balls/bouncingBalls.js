//Setup Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// Function to generate random number

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

//Function to generate random color

function randomRGB() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

//Ball Class

class Shape {
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }
}

class EvilCircle extends Shape{

    constructor(x, y) {
        super(x, y, 20, 20);
        this.color = "white";
        this.size = 15; 

        window.addEventListener("keydown", (e) => {
            switch(e.key) {
                case "ArrowLeft":
                    this.x -= this.velX;
                    break;
                case "ArrowRight":
                    this.x += this.velY;
                    break;
                case "ArrowDown":
                    this.y += this.velY;
                    break;
                case "ArrowUp":
                    this.y -= this.velY;
                    break;
            }
        });
    }

    draw() {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.stroke();
    }

    checkBounds() {
        if((this.x + this.size) >= width) {
            this.x = width - this.size;
        }

        if((this.x - this.size) <= 0) {
            this.x = 0 + this.size;
        }

        if((this.y + this.size) >= height) {
            this.y = height - this.size;
        }

        if((this.y - this.size) <= 0) {
            this.y = this.size;
        }
        
    }

    collisionDetect() {
        for(const ball of balls) {
            if(ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;

                const distance = Math.sqrt(dx*dx + dy*dy);

                if(distance < this.size + ball.size) {
                    para.textContent = `Ball Count : ${--count}`;
                    ball.exists = false;
                }
            }
        }
    }
    
}



class Ball extends Shape{
    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
        this.color = color;
        this.size = size;
        this.exists = true;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
        ctx.fill();
    }

    update() {
        if((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }

        if((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }

        if((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }

        if((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    collisionDetect() {
        for(const ball of balls) {
            if(!(this === ball) && ball.exists) {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;

                const distance = Math.sqrt(dx*dx + dy*dy);

                if(distance < this.size + ball.size) {
                    ball.color = this.color = randomRGB();
                }
            }
        }
    }
}

// const testBall = new Ball(50, 100, 4, 4,'blue', 10);

// testBall.draw();

const size1 = random(10, 20);
const evil = new EvilCircle(
    random(0 + size1, width - size1),
    random(0 + size1, height - size1),
);



const balls = [];

while(balls.length <= 24) {
    const size = random(10, 20);

    const ball = new Ball(
        //ball positon always drawn at least one ball width
        //away from the edge fo the canvas, to avoid drawing errors
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomRGB(),
        size,
    );

    balls.push(ball);
}

const para = document.querySelector(".count");
const time = document.querySelector(".time");
let count = 25;
para.textContent = `Ball Count : ${count}`;
let startTime = Date.now();
let runningTime;


function updateTimer() {
    if(count) {
        runningTime = Math.floor((Date.now() - startTime)/1000);
        time.textContent = `Time : ${runningTime} Seconds`;
    }
}

function loop() {
    ctx.fillStyle = "rgba(0,0, 0, 0.25)";
    ctx.fillRect(0, 0, width, height);
    

    for(const ball of balls) {
        evil.draw();
        if(ball.exists) {
            updateTimer();
            evil.checkBounds();
            evil.collisionDetect(count);
            ball.draw();
            ball.update();
            ball.collisionDetect(); 
        }
        
    }

    if(count == 0) {
        result();
    }
    else {
        requestAnimationFrame(loop);
    }
}

// loop();

const instruct = document.querySelector('.instruct');
const output = document.querySelector('.output');
const play = document.querySelector('#play');

play.addEventListener('click', () => {
    startTime = Date.now();       
    loop();
    instruct.parentElement.removeChild(instruct);
});




let flag = true;

function result() {
    if(flag) {
        requestAnimationFrame(loop);
        flag = false;
        return;
    }
    setTimeout(() => {
        const div = document.createElement('div');
        const h1 = document.createElement("h1");
        const p = document.createElement('p');
        const p1 = document.createElement('p');
        const button = document.createElement('button');

        button.innerHTML = "Play Again";
        button.classList.add('button');
        button.classList.add('play');
        p.classList.add('para');
        p1.classList.add('remember');
        div.classList.add('instruct');
        h1.textContent = "Congratulations!!!";
        p.textContent = `The time you took to kill all the balls is ${runningTime} Seconds.`;
        p1.textContent = "Can you do it even faster next time and beat your own record? <br> Please Enter F5 key to play again";
        
        div.appendChild(h1);
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(button);
        document.querySelector('body').appendChild(div);
    }, 1000);

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('.play').addEventListener('click', () => {
            document.location.reload();
        });
    });
    
}



