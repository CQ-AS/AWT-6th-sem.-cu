const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");
canvas.style.backgroundColor="lightgray";

const width=window.innerWidth;
const height=window.innerHeight;
canvas.width=width;
canvas.height=height;

class circle{
    constructor(x,y,radius,speed){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.speed=speed;
        this.dx=1*this.speed;
        this.dy=1*this.speed;
        this.collided = false;
    }
    draw(){
        context.beginPath();
        context.arc(this.x,this.y,this.radius,0,Math.PI*2);

        // Render moving circle with a distinct color so it's easy to identify
        if(this.collided){
            // After collision: red
            context.fillStyle = 'rgba(255,0,0,0.6)';
            context.lineWidth = 2;
            context.strokeStyle = 'red';
        } else if(this.speed && this.speed > 0){
            context.fillStyle = 'rgba(30,144,255,0.6)'; // DodgerBlue translucent
            context.lineWidth = 2;
            context.strokeStyle = 'blue';
        } else {
            // Static/obstacle circles
            context.fillStyle = 'rgba(128,128,128,0.35)';
            context.lineWidth = 1;
            context.strokeStyle = 'gray';
        }
        context.fill();
        context.stroke();
        context.closePath();
    }
    update(allCircles){
        this.draw(context);

        if((this.x+this.radius)>width  || (this.x-this.radius)<0){
            this.dx=-this.dx;
        }
        if((this.y+this.radius)>height || (this.y-this.radius)<0){
            this.dy=-this.dy;
        }
        this.x+=this.dx;
        this.y+=this.dy;
        
        // Check collision with all other circles
        for(let i = 0; i < allCircles.length; i++){
            if(allCircles[i] !== this){
                const dx = allCircles[i].x - this.x;
                const dy = allCircles[i].y - this.y;
                const distance = Math.sqrt(dx*dx + dy*dy);
                
                if(distance < this.radius + allCircles[i].radius){
                    this.speed=0;
                    this.collided = true;
                    
                    context.textAlign='center';
                    context.textBaseline='middle';
                    context.font='30px Arial';
                    context.fillStyle='red';
                   
                    // Apply shadow only for text
                    context.shadowColor='purple';
                    context.shadowOffsetX=2;
                    context.shadowOffsetY=2;
                    context.shadowBlur=5;
                    
                    context.fillText('Collision Detected', width/2, height/2);
                    
                    // Reset shadow properties so circles don't get shadow
                    context.shadowColor='transparent';
                    context.shadowOffsetX=0;
                    context.shadowOffsetY=0;
                    context.shadowBlur=0;
                    
                    this.stop();
                    break;
                }
            }
        }
    }
    stop(){
        this.dx=0;
        this.dy=0;
    }

}

// Generate random position
let randam_X= Math.random() * width;
let randam_Y= Math.random() * height;

// Array to store all circles
const allCircles = [];

// Create circle1 (the moving circle)
const circle1=new circle(randam_X,randam_Y,30,5);
allCircles.push(circle1);

// Create circle2 and circle3
const circle2=new circle(400,400,80,0);
allCircles.push(circle2);

const circle3=new circle(100,300,50,0);
allCircles.push(circle3);

// Create 10 more circles with random positions and sizes
for(let i = 0; i < 10; i++){
    let randomX = Math.random() * width;
    let randomY = Math.random() * height;
    let randomRadius = Math.random() * 30 + 20; // radius between 20-50
    const newCircle = new circle(randomX, randomY, randomRadius, 0);
    allCircles.push(newCircle);
}

// Animation loop
let animate=function(){
    requestAnimationFrame(animate);
    context.clearRect(0,0,width,height);
    
    // Update circle1 (moving circle) with collision detection against all others
    circle1.update(allCircles);
    
    // Draw all other circles
    for(let i = 1; i < allCircles.length; i++){
        allCircles[i].draw(context);
    }
}
animate();
