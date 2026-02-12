// collision detection 
const canvas=document.getElementById("canvas");
const context=canvas.getContext("2d");

const width=window.innerWidth;
const height=window.innerHeight;
canvas.width=width;
canvas.height=height;

let count=0;

class Circle{
    constructor(x,y,r,sAngle,eAngle,speed){
        this.x=x;
        this.y=y;
        this.r=r;
        this.sAngle=sAngle;
        this.eAngle=eAngle;
        this.speed=speed;
        this.dx=1*this.speed;
        this.dy=1*this.speed;


    }
    draw(){
        context.beginPath();
        
        context.arc(this.x,this.y,this.r,this.sAngle,this.eAngle);
        context.stroke();
        context.closePath();
    }
    update(){
        context.clearRect(0,0,width,height);
        this.draw(context);


        if((this.x+ this.r)>width){
            this.dx=-this.dx;
            count++
        }
        if((this.x - this.r)<0){
            this.dx=-this.dx;
            count++
        }
        if((this.y - this.r)<0){
            this.dy=-this.dy;
            count++
         }
        if((this.y+ this.r)>height){
            this.dy=-this.dy;
            count++
        }

        // if(count==4){
        //     this.stop();
        //     this.break;
        // }

        this.x+=this.dx
        this.y+=this.dy

        const distance= Math.sqrt(Math.pow(circle2.x-this.x,2)+ Math.pow(circle2.y-this.y,2))
        if(distance <= (circle2.r + this.r)){
            this.stop();
        }

    }
    stop(){
        this.dx=0;
        this.dy=0;
    }
}

const circle1=new Circle(Math.random()*width,Math.random()*height,30,0,2*Math.PI, 2);//x,y,radius,sAngle, eAngle, speed
circle1.draw();

const circle2=new Circle(300,300,70,0,2*Math.PI,0);
circle2.draw();

let getDistance=function(){

    return Math.sqrt(Math.pow(circle2.x-circle1.x,2)+Math.pow(circle2.y+circle1.y,2))

}

function moveCircle(){
    
    requestAnimationFrame(moveCircle)
    circle1.update();
    circle2.draw(context);
    
}
moveCircle();



