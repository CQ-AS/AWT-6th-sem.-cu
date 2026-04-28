

//  instersection and union are allow in type alias


// Interface
interface UserDetails{
    name:string,
    id:number | string,
}


// marge interface
interface UserDetails{
    age?:number
}
 
const userdetals1 : UserDetails={
    name :"abcd",
    id: "101"
}

console.log(userdetals1.name);

// interface extends

interface usersAllDetails extends UserDetails {
   
    address:{
        city:string,
        state:string
    }
}
const user6 : usersAllDetails={
    name:"xyz",
    id:78,
    address:{
        city:"abcd",
        state:"fcv"
    }
}
console.log(user6);


const user4 : usersAllDetails ={
    name :"ghj",
    id: "108",
    age:20,
    address:{
        city:"xyz",
        state:"abcd"
    }
}
console.log(user4)

// interface with class

interface Area{
    getArea() :string
}


class Rect implements Area{
    width : number
    height: number
    constructor(w:number , h : number){
        this.width=w
        this.height=h
    }
    getArea(): string {
        return "Area  : "+this.height*this.width
    }

}

const myRect = new Rect (10,20);
myRect.getArea();


class Shape implements Area {
        private width:number
        protected height:number

        constructor(w:number, h:number){
            this.width=w,
            this.height=h
        }

        getArea(): string {
            return "Area : "+this.width* this.height
        }
         public fun():string{
        return "ShapeClass"
     }

}

// const rect =new Shape(10,20);
// console.log(rect.getArea());


// inheritance

class sq extends Shape {
    constructor(w:number){
        super(w,w)//10,10
    }
    override fun()  :string {
        return "Sqr Class"
    }
    
   
}
const sqr = new sq(10);
sqr.getArea();




console.log(sqr.getArea());
// console.log(sqr.fun());



//class
// Public, Protected , private
export class User{
    private name:string;
    private id: number | string;
    private address : {
        city:string,
        state:string
    }

    //constructor overloading

    constructor(name:string ,id?:number | string, address?:{city:string,state:string}){
        this.name=name;
        this.id=id ?? 20;
        this.address=address ?? {city:"",state:""};
    }
    greet():string{
       console.log("id: ",this.id);
        return `hello ${this.name}`;
    }
    userDetails():void{
        console.log(`user name : ${this.name}`)
        console.log(`user id : ${this.id}`)
        console.log(`user address : City : ${this.address.city} State : ${this.address.state}`)
    }
}
// let user1 = new User("xyz",20);
// let user2 = new User("abc");
// let user3 = new User("huihi","107",{city:"A",state:"B"})
// user3.userDetails();
// user2.greet()
// let userGreet = user1.greet();
// console.log(userGreet);





























