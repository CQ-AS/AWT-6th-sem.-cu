
// Chess board Assignmen

const context=canvas.getContext('2d');
canvas.style.backgroundColor="gray";

const width=window.innerWidth;
const height=window.innerHeight;
context.canvas.width=width;
context.canvas.height=height;

for(let i=0;i<12;i++){
    for(let j=0;j<12;j++){
        if((i+j)%2==0){
            context.fillStyle="black" //to change color of shape
        }
        else{
            context.fillStyle="white"
        }
        context.fillRect( i*50+380, j*50+40, 50,50);//x,y,w,h
    }
}





