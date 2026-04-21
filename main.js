// console.log("Hello, JavaScript");
// let age = 18;
// let name = "Veronika";
// let isStudent = true;

// console.log("Name :", name );
// console.log("Age", age );
// console.log("Is Student:", isStudent);

// let value = 10;
// console.log(value);
// value = "Теперь это строка";
// console.log(value);
// value= true;
// console.log(value);

// let userName = "Алексей";
// console.log(`Привет${userName}!`);

// let price = 99.99;
// let temperature = -15;
// let infinity = 1/0;
// let notANumber = 0/0;
// console.log(0.1 + 0.2);

// let bigNumber = 8975478989048903484n;
// let huge = BigInt("123456789012345678901234567890");

// let isAlive = true;
// let isWorking = false;
// let isAdult= age >= 18;
// let x;
// let y = undefined;
// let userData = null;

// let id = Symbol ("id");

// let person ={
//     name: "Станислав",
//     age: 30,
//     isStudent: false,
//     sayHello: function(){
//         console.log("Привет!")
//     },
// };

// let fruits = ["яблоко", "банан","апельсин"];
// let numbers = [1,2,3,4,5];
// let mixed = ["текст", 42, true, null];

function sum (a,b){
    return a+b;
}
let multiply = function (x,y){
    return x*y;
};
console.log(sum(5, 3));

let now = new Date();
let birthday = new Date("1995-12-17");

let a= 10;
let b =3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log(10+"5");
console.log("10"-5);

const numbersArray =[1,2,3];
numbersArray[0] =10;
console.log(numbersArray);
//numbersArray= [5,6,7];