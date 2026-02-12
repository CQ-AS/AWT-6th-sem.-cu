// // ----------------------------------------------------
// // circle with class and movment of object/shape
// // ----------------------------------------------------

const canvas=document.getElementById("canvas");
const context=canvas.getContext('2d');

const width=window.innerWidth;
const height=window.innerHeight;

canvas.width=width;
canvas.height=height;
class circle{

    constructor(x,y,r,sAngle,eAngle,speed){
        this.x=x;
        this.y=y;
        this.r=r;
        this.sAngle=sAngle;
        this.eAngle=eAngle;
        this.speed=speed;
        this.dx=1*this.speed;
        this.dy=1*this.speed

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
        
       

        if((this.x + this.r) > width){
            this.dx=-this.dx;
            
        }
        if((this.y+ this.r )>height){
            this.dy=-this.dy;
           
        }
        if((this.x - this.r)<0){
            this.dx=-this.dx;
           
        }
        if((this.y-this.r) < 0){
            this.dy=-this.dy;
            
        }

         this.x+=this.dx;
        this.y+=this.dy;

        //collision detection
        const distance=Math.sqrt(Math.pow(circle2.x-this.x,2)+ Math.pow(circle2.y-this.y,2))
        if(distance < (circle2.r + this.r)){
            this.speed=0;
            this.stop();
        }

    }
    stop(){
        this.dx=0;
        this.dy=0;
    }

}

const circle1=new circle(Math.random()*width,Math.random()*height,30, 0, 2*Math.PI ,2)// x, y, r, sAngle, eAngle, speed
circle1.draw();

const circle2=new circle(500,300,70,0,2*Math.PI);
circle2.draw();


function moveCircle(){
    requestAnimationFrame(moveCircle);
    circle1.update();
    circle2.draw();

}
moveCircle();


// const circle2=new circle(Math.random()*width,Math.random()*height,30, 0, 2*Math.PI)// x, y, r, sAngle, eAngle,
// circle2.draw();
















































// const canvas=document.getElementById("canvas");
// const context=canvas.getContext('2d');

// const width=window.innerWidth;
// const height=window.innerHeight;

// canvas.style.backgroundColor="gray";

// context.canvas.width=width;
// context.canvas.height=height;
// let count=0;
// class circle{
//     constructor(x,y,r,sAngle,eAngle,speed){
//         this.x=x;
//         this.y=y;
//         this.r=r;
//         this.sAngle=sAngle;
//         this.eAngle=eAngle;
//         this.speed=speed;
//         this.dx=1*this.speed;
//         this.dy=1*this.speed;

//     }
//     draw(){
//         context.beginPath();
//         context.arc(this.x,this.y,this.r,this.sAngle,this.eAngle);
//         context.stroke();
//         context.closePath();

//     }
//     update(){
//         context.clearRect(0,0,width,height);
        
//         this.draw(context);

//         if((this.x + this.r)>width){
//             this.dx=-this.dx;
//             count++;
//         }
//         if((this.x - this.r)<0){
//             this.dx=-this.dx;
//             count++;
//         }
//         if((this.y - this.r)<0){
//             this.dy=-this.dy;
//             count++;
//         }
//         if((this.y + this.r)>height){
//             this.dy=-this.dy;
//             count++;
//         }
//         if(count==10){
//             this.stop();
//             this.break;
//         }

//         this.x+=this.dx;
//         this.y+=this.dy;

//     }
//     stop(){
//         this.dx=0;
//         this.dy=0;
//     }
// }


// const circle1=new circle(Math.random()*width,Math.random()*height,50,0,2*Math.PI,2);
// circle1.draw();

// // for animation (moving the object)
// function moveCircle(){
//     requestAnimationFrame(moveCircle);
//     circle1.update();
// }
// moveCircle();


// //---------------------------------------
// //Draw circle by using class
// //---------------------------------------

// // const circle1=new circle(50,60,30,0,2*Math.PI);// x, y, r,sAngle,eAngle, bool
// // circle1.draw();
// // const circle2= new circle(150,180, 50,0,2*Math.PI);
// // circle2.draw();

// //--------------------------------------------
// //Draws circles at random postions
// //---------------------------------------------

// // for(let i=0;i<10;i++){
// //     let dx=Math.random()*width;
// //     let dy=Math.random()*height;
// //     const circle3=new circle(dx,dy,40,0,2*Math.PI);
// //     circle3.draw();
// // }

