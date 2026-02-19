const canvas= document.getElementById("canvas");
const context= canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=innerHeight;

canvas.style.backgroundColor="pink";
const gravity=0.5;
let scoreOffsetx=0;
let offset=0;
const background=new Image();
background.src="./images/background.png";

const backgroundHills= new Image();
backgroundHills.src="./images/hills.png";

const platformImage=new Image();
platformImage.src="./images/platform.png";

const platformSmallTall=new Image();
platformSmallTall.src="./images/platformSmallTall.png"

const key={
    right:{
        pressed:false
    },
    left:{
        pressed:false
    }
}

class Background{
    constructor(){
        this.position={
            x:0,
            y:0
        }
    }
    update(){
        context.drawImage(backgroundHills,this.position.x+offset,this.position.y);
    }
}


class Player{
    constructor(x,y, w, h){
        this.position={
            x:x,
            y:y
        }
        this.velocity={
            x:0,
            y:1
        }
        this.width=w;
        this.height=h;

    }
    draw(){
        context.fillStyle="red";
        context.fillRect(this.position.x, this.position.y, this.width,this.height);
    }
    update(){
        this.draw();

        this.position.x+=this.velocity.x;
        this.position.y+=this.velocity.y

        if(this.position.y+ this.height + this.velocity.y < canvas.height){
        this.velocity.y+=gravity;
        }
        else{
        this.velocity.y=0;
        }

    }

}

class Platform{
    constructor(x,y, width, height,image){
        this.position={
            x:x,
            y:y
        }
        this.width=width;
        this.height=height;
        this.image=image;

    }
    draw(){
        // context.fillStyle="blue"
        // context.fillRect(this.position.x,this.position.y,this.width,this.height)
        context.drawImage(this.image,this.position.x, this.position.y, this.image.width, this.image.height);

    }

}


const player=new Player(250,300,30,30);//rectangle type //x, y, w, h
player.draw();


// const platform= new Platform(500,600, 30,100);
// platform.draw();

// const platforms=[
//     new Platform(500,500, 150, 30),
//     new Platform( 300, 200, 100, 20),
//     new Platform( 1000, 600, 20, 100),
//     new Platform( 800, 400, 100, 30),
//     new Platform( 1200, 200, 100, 20),
//     new Platform( 900, 350, 100, 30),
//     new Platform( 1500, 650, 20, 80),
//     new Platform( 1800, 200, 100, 20),
//     new Platform( 2100, 1000, 100, 10),
// ]

const platform= new Platform(0, innerHeight-platformImage.height, platformImage.width, 
            platformImage.height,platformImage);//x, y, width, height, image

const platform2= new Platform(platformImage.width*2, innerHeight-platformImage.height, platformImage.width, 
            platformImage.height,platformImage);

const platform3=new Platform(500,innerHeight-platformSmallTall.height,platformSmallTall.width, 
    platformSmallTall.height,platformSmallTall)

const platforms=[];
platforms.push(platform);
platforms.push(platform2);
platforms.push(platform3);



addEventListener("keydown",(e)=>{

    if(e.key=="ArrowRight"){
        key.right.pressed=true
        console.log(" right arrow key press")
    }
    if(e.key=="ArrowLeft"){
        key.left.pressed=true;
        console.log("left Arrow key Press");
    }
})

addEventListener("keyup",(e)=>{
    if(e.key=="ArrowRight"){
        key.right.pressed=false
    }
    if(e.key=="ArrowLeft"){
        key.left.pressed=false
    }
    if(e.key=="ArrowUp"){
        player.velocity.y=-10;
    }
})

const scrollBackground=new Background();

function animate(){

    requestAnimationFrame(animate);
    context.clearRect(0,0,innerWidth,canvas.height);
    context.drawImage(background,0,0);// image, x, y
    scrollBackground.update();
    // platform.draw();
    
    platforms.forEach(platfom=>{
        platfom.draw();
    })
    player.update();

    if(key.right.pressed && player.position.x <= 700){
        player.velocity.x=10;
    }
    else if(key.left.pressed && player.position.x >=150){
        player.velocity.x=-10;
    }
    else{
        player.velocity.x=0;

        platforms.forEach(platform=>{
            if(key.right.pressed){
                offset-=5;
                scoreOffsetx+=5;
                platform.position.x-=5;
            }
            else if(key.left.pressed){
                offset+=5;
                scoreOffsetx-=5;
                platform.position.x+=5;
            }
        })
        console.log(scoreOffsetx);
        


    }
    
    platforms.forEach(platform=>{
    //  platform collision detection from bottom
    if( player.position.y > platform.position.y +platform.height
        && player.position.y+player.velocity.y <= platform.position.y +platform.height
        && player.position.x+ player.width >= platform.position.x
        && player.position.x<=platform.position.x+platform.width
    ){
        player.velocity.y=0;
        player.position.y=platform.position.y+platform.height;

    }

    //platform collision detection from top
    if(player.position.y+ player.height<= platform.position.y
        && player.position.y +player.height + player.velocity.y > platform.position.y 
        && player.position.x + player.width > platform.position.x 
        && player.position.x < platform.position.x+platform.width

    ){
        player.velocity.y=0;
    }


    // platform collision from left
   if (
    player.position.x + player.width <= platform.position.x 
    && player.position.x + player.width + player.velocity.x >= platform.position.x 
    && player.position.y + player.height > platform.position.y 
    && player.position.y < platform.position.y + platform.height
    ) {
    player.velocity.x = 0;
    player.position.x = platform.position.x - player.width;
    }

    //platform collision from right
    if (
    player.position.x >= platform.position.x + platform.width &&
    player.position.x + player.velocity.x <= platform.position.x + platform.width &&
    player.position.y + player.height > platform.position.y &&
    player.position.y < platform.position.y + platform.height
    ) {
    player.velocity.x = 0;
    player.position.x = platform.position.x + platform.width;
    }

    })

    if(scoreOffsetx>=12500){
        context.beginPath();
        context.fillStyle="Green";

        context.font="30px Arial";
        context.fillText("YOU WIN... ",innerWidth/2 , innerHeight/2);//messg, x, y
        
        context.closePath();
    }

}
animate();

