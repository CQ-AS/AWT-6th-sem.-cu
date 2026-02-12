const canvas=document.getElementById('canvas');
const context=canvas.getContext('2d');

const width=window.innerWidth;
const height=window.innerHeight;

context.canvas.width=width;
context.canvas.height=height;

canvas.style.backgroundColor='lightgrey';

let count=0;
class Circle{

    constructor(x, y, radius, color,speed, count){
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.speed=speed;
        this.count=count;
        this.color=color;
    
        this.dx=1*this.speed;
        this.dy=1*this.speed;
    }
    drow(){
        context.beginPath();
       
        context.textAlign='center';
        context.textBaseline='middle';
        context.font='20px Arial';
        context.strokeStyle=this.color;
        context.fillText(this.count, this.x, this.y);
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        context.stroke();
        context.closePath();
    }
    
    update(){
        this.count=count;

        context.clearRect(0, 0, width, height);
        this.drow(context);
        if((this.x+this.radius)>width || (this.x-this.radius)<0){
            this.dx=-this.dx;
            count++;
        }
        if((this.y+this.radius)>height || (this.y-this.radius)<0){
            this.dy=-this.dy;
            count++;
        }
         
        this.x+=this.dx;
        this.y+=this.dy;

    }
}

// const circle1=new Circle(100, 100, 50, 'red',);
// const circle2=new Circle(200, 200, 30, 'blue');
// circle1.drow();
// circle2.drow(); 

const circle1=new Circle(Math.random()*width, Math.random()*height,50, 'red', 2,count);
circle1.drow(context)

let animate=function(){
    requestAnimationFrame(animate);
    circle1.update();
}
animate();