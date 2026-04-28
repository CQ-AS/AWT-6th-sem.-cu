"use strict";
//  instersection and union are allow in type alias
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const userdetals1 = {
    name: "abcd",
    id: "101"
};
console.log(userdetals1.name);
const user4 = {
    name: "ghj",
    id: "108",
    age: 20,
    address: {
        city: "xyz",
        state: "abcd"
    }
};
console.log(user4);
class Shape {
    width;
    height;
    constructor(w, h) {
        this.width = w,
            this.height = h;
    }
    getArea() {
        return "Area : " + this.width * this.height;
    }
    fun() {
        return "ShapeClass";
    }
}
// const rect =new Shape(10,20);
// console.log(rect.getArea());
// inheritance
class sq extends Shape {
    r;
    constructor(w, r) {
        super(w, w);
        this.r = r;
    }
    fun() {
        return "sqClass";
    }
}
const sqr = new sq(10, 8);
console.log(sqr.getArea());
console.log(sqr.fun());
//class
// Public, Protected , private
class User {
    name;
    id;
    address;
    //constructor overloading
    constructor(name, id, address) {
        this.name = name;
        this.id = id ?? 20;
        this.address = address ?? { city: "", state: "" };
    }
    greet() {
        console.log("id: ", this.id);
        return `hello ${this.name}`;
    }
    userDetails() {
        console.log(`user name : ${this.name}`);
        console.log(`user id : ${this.id}`);
        console.log(`user address : City : ${this.address.city} State : ${this.address.state}`);
    }
}
exports.User = User;
// let user1 = new User("xyz",20);
// let user2 = new User("abc");
// let user3 = new User("huihi","107",{city:"A",state:"B"})
// user3.userDetails();
// user2.greet()
// let userGreet = user1.greet();
// console.log(userGreet);
