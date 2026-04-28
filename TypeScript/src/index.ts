
// Import and export class form one to another file
import {User} from "./class"
const user=new User("name");
console.log(user.greet());


// -------------------------------------------------------

// 1. Create OrderStatus Enum
enum OrderStatus {
  Pending = "Pending",
  Confirmed = "Confirmed",
  Shipped = "Shipped",
  Delivered = "Delivered",
  Cancelled = "Cancelled"
}

// 2. Create Payment Method using Union Type
type PaymentMethod = "Cash" | "Card" | "UPI" | "NetBanking";


// 3. Create Order Type Alias
type Order = {
  orderId: number;
  customerName: string;
  product: string;
  amount: number;
  payment: PaymentMethod;
  status: OrderStatus;
};


// 4. Create 3 Orders
let order1: Order = {
  orderId: 101,
  customerName: "Rahul",
  product: "Laptop",
  amount: 55000,
  payment: "Card",
  status: OrderStatus.Pending
};

let order2: Order = {
  orderId: 102,
  customerName: "Priya",
  product: "Mobile Phone",
  amount: 25000,
  payment: "UPI",
  status: OrderStatus.Confirmed
};

let order3: Order = {
  orderId: 103,
  customerName: "Amit",
  product: "Headphones",
  amount: 3000,
  payment: "Cash",
  status: OrderStatus.Shipped
};


// Store orders in array
let orders: Order[] = [order1, order2, order3];


// 5. Function to Update Order Status
function updateOrderStatus(orderId: number, newStatus: OrderStatus): void {

  const order = orders.find(o => o.orderId === orderId);

  if (order) {
    order.status = newStatus;
    console.log(`Order ${orderId} status updated to ${newStatus}`);
  } else {
    console.log("Order not found");
  }

}


// 6. Test the function
updateOrderStatus(101, OrderStatus.Confirmed);
updateOrderStatus(102, OrderStatus.Shipped);
updateOrderStatus(103, OrderStatus.Delivered);


// 7. Print all orders
console.log("All Orders:");
console.log(orders);

console.log("First TypeScript Program");
// let val=101;
// console.log(val);
// declaration of variable
// let variableName : datatype = value;

//datatype : number , string, boolean,any, a

let number1 : number=100;
console.log(" number1: "+number1);

number1 = 500;
console.log(" number1: "+number1);

let username : string = "abcd";
let messg : string = `hello ${username}`;

console.log(messg);

let isLogedin : boolean = true;
// isLogedin = 0; //will show Error

// isLogedin = "yuiu"; //will show Error

let anyVariable: any ;

anyVariable= 100;
anyVariable="hello";
anyVariable=false;

let array1 :number[]=[1,2,3,4,5];
let array3 : Array<string>=["A","B","C","ABC"];

array1.push(8);
for(let i=0;i<6;i++){
    console.log(array1[i]);
}
array.push("9");

// Tuple
let user: [number,string]//userid,password

user=[101,"abc@23"];


//Union Type

let var2: number ;
var2= 200;

//objects
let object :{
readonly id :number,
name?:string
}={
    id:101,
    name:"abc"
}
object.name="xyz";


// Type aliases
type Employee={
    id :number,
    name?:string
}

let employee1 :Employee={
    id:104,
    name:"aasd"
}

let employee2: Employee={
    id: 106,
    name:"njn"
}
console.log(employee2)

//enum 
// const small:number=1;
// const medium:number=2;
// const large:number=3;

enum Size {
    small,
    medium,
    large
}

let userSize : Size.medium;

// //confi. of ts compiler

//functions
function abc():number{

    
}
abc(10,"abc");


// -------------------------------------------- 
//union 
let union : string |boolean ;
union="vujhb";
union=true;
union=90;

type payment = "UPI " | "cash"| "online";


// ------------------------------------------
// type alias

type Student ={
    id:number | string,
    name:string,
    class :string,
    section:string,
}

// intersection 
type StudentDetails = Student & {
    email:string,
    address:{
        city:string,
        state:string
    },
    fatherName:string
}

// creatibng objects from type alias
let student1 :Student={
    id:107,
    name:"abc",
    class:"+2",
    section:"A"
}

let student2 : Student={
    id:"110",
    name:"hjh",
    class:"+2",
    section:"B"
}

let student3:StudentDetails={
    id:202,
    name:"jnk",
    class:"+2",
    section:"C",
    email:"abc@gmail.com",
    address:{
        city:"ajbhj",
        state:"gfcyh"
    },
    fatherName:"gvuyhj"
}


// object creation
let obj :{
    id:string|number,
    name?:"string"
}={
    id:104,
}

//array


// any // no type checking
let a:any;
a=[3,8,5,4];
a.push()


// unknown // use type checking
let val:unknown;
val="string";
if(typeof val == "string"){
    val.toLowerCase()
}

//type assertion
let value: unknown;
value="string";
let len=(value as string).length
console.log(len);

// type assertion in Dom , html: form input

let input =document.getElementById("id") as HTMLInputElement
input.value="update input value";


//object by type alias
type User={
    id:string,
    password:string
}

// let res={"id":"104","password":"5456789"};
// const user= (res) as User


// never
let val1:never 
// always empty vale
// can not assign new value;
val1 = "hjh";

// function that run always and no return type

function loop():never{
    while(true){

    }
}

function throwError(messg:string):never{
    throw new Error(messg);
};




// use of never
// 1. function that never return
// 2. Exhaustive checking 
type Role ="user "| "admin " | "custmer" ;

// role-> deshboard display

switch(role:Role){
    case "user"
    console.log("user deshBoard");
    break;
    case "admin"
    console,log("admin deshBoard")
    break;
    default: check :never
    console.log("") 
    break


}


// 3. type Narrowing

function abc(val:string|number):string{
    let value: string
    if(typeof val =="string"){
        let value="string"
        return value;
    }
    else if(typeof val =="number"){
        value = "number"
        return value
    }
    else {
        let value1 : never
        return ""
    }
        
}

// function overloading
function add(v1:number , v2 : number):number{
    return v1+v2;
}

function add1(v1:string , v2 : string):string{
    return v1+v2;
}
// function overloading
function addition(v1:number | string , v2 : number | string) : number | string{
    // =-----
    
}

addition(20,40);
addition("abc","xyz");








