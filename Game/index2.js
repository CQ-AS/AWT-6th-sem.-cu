//sprite creation 

const canvas= document.getElementById("canvas");
const context= canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=innerHeight;

canvas.style.backgroundColor="pink";
const gravity=0.5;
let scoreOffsetx=0;

var offset=0;
const backImage=new Image();
backImage.src='./images/background.png'

const backgroundHillsImage=new Image();
backgroundHillsImage.src="./images/hills.png";

var platformImage=new Image();
platformImage.src="./images/platform.png";


var platformSmalTall=new Image();
platformSmalTall.src="./images/platformSmallTall.png";

var spriteRunRight=new Image();
spriteRunRight.src="./images/spriteRunRight.png"

var spriteStandRight = new Image();
spriteStandRight.src="./images/spriteStandRight.png"

var spriteRunLeft=new Image();
spriteRunLeft.src="./images/spriteRunLeft.png"

var spriteStandLeft = new Image();
spriteStandLeft.src="./images/spriteStandLeft.png"


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
        context.drawImage(backgroundHillsImage,this.position.x-offset,this.position.y);
    }
}

class Player{
    constructor(x,y, w, h, image){
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
        this.image=image
        this.frame=0;

        this.sprite={
            stand:{
                right: spriteStandRight,
                left:spriteStandLeft,
                cropWidth: 177,
                width:66
            },
            run:{
                right:spriteRunRight,
                left:spriteRunLeft,
                cropWidth: 341,
                width:127.875
            }
        }
        this.currentSprite=spriteStandRight;
        this.currentWidth=177;

    }
    draw(){
        // context.fillStyle="red";
        // context.fillRect(this.position.x, this.position.y, this.width,this.height);
        context.drawImage(
            this.currentSprite,
            this.currentWidth*this.frame,     // x : starting point for croping image
            0,      // y : starting point for croping image
            this.currentWidth,    // crop image width
            400,    // crop image height
            this.position.x,this.position.y,this.width,this.height);

    }
    update(){
        this.frame++;
        if(this.frame>59 && (this.currentSprite==this.sprite.stand.right || 
            this.currentSprite==this.sprite.stand.left)){
            this.frame=0;
        }else if(this.frame>29 && (this.currentSprite==this.sprite.run.right || 
            this.currentSprite==this.sprite.run.left ) ){
            this.frame=0;
        }
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
    constructor(x,y, width, height ,image){
        this.position={
            x:x,
            y:y
        }
        this.width=width;
        this.height=height;
        this.image=image
    }
    draw(){
        // context.fillStyle="blue"
        // context.fillRect(this.position.x,this.position.y,this.width,this.height)
        context.drawImage(
            this.image,this.position.x,this.position.y,this.image.width,this.image.height);

    }

}


const player=new Player(250,300,66,150,spriteStandRight);//rectangle type //x, y, w, h
player.draw();

const platform = new Platform(400, window.innerHeight - (platformSmalTall.height), platformSmalTall.width,
                     platformSmalTall.height,platformSmalTall);


const platform1=new Platform(0, window.innerHeight - platformImage.height, platformImage.width, 
                        platformImage.height,platformImage);
const platform2=new Platform(platformImage.width*2+150, window.innerHeight - platformImage.height, 
                            platformImage.width, platformImage.height,platformImage);


const platforms=[];
platforms.push(platform);
platforms.push(platform1)
platforms.push(platform2)

addEventListener("keydown",(e)=>{

    if(e.key=="ArrowRight"){
        player.currentSprite=player.sprite.run.right;
        player.currentWidth=player.sprite.run.cropWidth;
        player.width=player.sprite.run.width
        key.right.pressed=true
        console.log(" right arrow key press")
    }
    if(e.key=="ArrowLeft"){
        player.currentSprite=player.sprite.run.left;
        player.currentWidth=player.sprite.run.cropWidth;
        player.width=player.sprite.run.width
        key.left.pressed=true;
        console.log("left Arrow key Press");
    }
})

addEventListener("keyup",(e)=>{
    if(e.key=="ArrowRight"){
       
        key.right.pressed=false
         player.currentSprite=player.sprite.stand.right;
        player.currentWidth=player.sprite.stand.cropWidth;
        player.width=player.sprite.stand.width
    }
    if(e.key=="ArrowLeft"){
        key.left.pressed=false
        player.currentSprite=player.sprite.stand.left;
        player.currentWidth=player.sprite.stand.cropWidth;
        player.width=player.sprite.stand.width
    }
    if(e.key=="ArrowUp"){
        player.velocity.y=-10;
    }
})

var backScrollingImage=new Background()

function animate(){

    requestAnimationFrame(animate);
    context.clearRect(0,0,innerWidth,canvas.height);
    context.drawImage(backImage,0,0);
    backScrollingImage.update();

    
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
                offset+=5
                scoreOffsetx+=5;
                platform.position.x-=5;
            }
            else if(key.left.pressed){
                offset-=5
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

