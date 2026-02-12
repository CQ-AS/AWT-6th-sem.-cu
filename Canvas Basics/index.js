
// ---------------------------------------
//            canvas Basics
// ---------------------------------------

const canvas= document.getElementById("canvas");

const context=canvas.getContext('2d');
canvas.style.backgroundColor="yellow";

const width=window.innerWidth;
const height=window.innerHeight;
context.canvas.width=width;
context.canvas.height=height;

// ---------------------------
// line draw
// ---------------------------
context.beginPath();
context.moveTo(20,20);
context.lineTo(100,120);
context.lineWidth=10;
context.strokeStyle="red";
context.lineCap="round";
context.stroke();
context.closePath();

// ------------------------------
// rectangle Draw
// ------------------------------

//first method
context.beginPath();
context.strokeStyle="blue";
context.rect(200,300,150,200)
context.stroke();
context.closePath();

//second method
context.beginPath();
context.fillStyle="green"
context.fillRect( 400, 500, 100, 100);
context.closePath();

// third method
context.beginPath();
context.strokeRect( 500,200, 150, 160);
context.closePath();

// -------------------------
//clearRect method
// -------------------------
context.clearRect(450,550,50,50);

// ----------------------------
// circle draw
// ----------------------------
context.beginPath();

context.arc(150,150,30,0,2*Math.PI);
context.stroke();
context.closePath();

context.beginPath();
context.arc(300,180,40,0,1*Math.PI);
context.strokeStyle="black";
context.fillStyle="purple"
context.fill();
context.stroke();
context.closePath();

// --------------------------------
// text draw
// --------------------------------

context.beginPath();
context.font="30px Arial"
context.fillText("Hello",500,100) //it will draws filled text
context.closePath();


context.beginPath();
context.shadowColor="blue"
context.shadowOffsetX=10;
context.shadowOffsetY=10;
context.shadowBlur=30;
context.font = "150px Arial";
context.strokeText("Hello World",150,150 ); // it will draws outlined text
context.closePath();

// ----------------------------------
// draw circles at random postions 
// ----------------------------------
for(let i=0;i<5;i++){
    context.beginPath();
    const tx=Math.random()*width;
    const ty=Math.random()*height;
    context.arc(tx,ty,30,0,2*Math.PI);
    context.stroke();
    context.closePath();
}




