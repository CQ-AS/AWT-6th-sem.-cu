const canvas= document.getElementById("canvas");
const context= canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=innerHeight;

canvas.style.backgroundColor="pink";
const gravity=0.5;

const key={
    right:{
        pressed:false
    },
    left:{
        pressed:false
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
    constructor(x,y, width, height){
        this.position={
            x:x,
            y:y
        }
        this.width=width;
        this.height=height;

    }
    draw(){
        context.fillStyle="blue"
        context.fillRect(this.position.x,this.position.y,this.width,this.height)

    }

}


const player=new Player(250,300,30,30);//rectangle type //x, y, w, h
player.draw();


// const platform= new Platform(500,600, 30,100);
// platform.draw();

const platforms=[
    new Platform(100,500, 150, 30),
    new Platform( 300, 200, 100, 20),
    new Platform( 800, 600, 100, 100)
]


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



function animate(){

    requestAnimationFrame(animate);
    context.clearRect(0,0,innerWidth,canvas.height);
    
    // platform.draw();
    
    platforms.forEach(platfom=>{
        platfom.draw();
    })
    player.update();

    if(key.right.pressed){
        player.velocity.x=10;
    }
    else if(key.left.pressed){
        player.velocity.x=-10;
    }
    else{
        player.velocity.x=0;
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

}
animate();

