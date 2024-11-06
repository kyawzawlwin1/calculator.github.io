// if (false) {
//     console.log("hello");
// } else {
//     console.log("false");
// }

// let x = 0;
// if (false) {
//     x = 5;
// } else {
//     x = 3;
// }

// console.log(x);

// const run = function() {
//     if (false) {
//         return "this is ture";
//     }
//     return "this is false";
// };
// console.log(run());

// console.log(false ? "this is true" : "this is not true");

// const marking = function(mark){
//     if (mark > 80) {
//         return "u got destiniciton"; 
//     } else if (mark >= 40) {
//         return "U passed";
//     } else if (mark < 40) {
//         return "U failed";
//     }
// };

// console.log(marking(30))
// console.log(marking(40))
// console.log(marking(81))

// function calculatePercentage(amount, percentage) {
//     return (amount / 100) * percentage; 
// }




// function tax(){ 

// }
// if(false){
//     console.log("*")
// } else {
//     console.log("***")
// }

// const passedMark = 40;
// const yourMark = 30;

// if (yourMark >= 40) {
//     console.log("you passed")
// }
// else {
//     console.log("you failed.")
// }

// function blockMaker(width, height){
//     let result = ``;
//     for(let x = 1; x <= height; x++){
//         for(let i = 1; i <= width; i++){
//             result += "* ";
//         }
//         result += "\n";
//     }
//     return result;  
// }

// console.log(blockMaker(4, 3));

// class Person {
//     //name,age
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     talk(){
//         return this.name + " can talk.";
//     }
// }

// class Student extends Person{
//     constructor(name, age, gender, major){
//         super(name, age, gender);
//         this.major = major;
//     }
//     learn(){
//         return `${this.name} can learn.`;
//     }
// }
// const me = new Person("hein htet zan", 18, "male");
// console.log(me);
// console.log(me.talk());

// const st1 = new Person("Mg Mg", 16, "male");
// console.log(st1);
// console.log(st1.learn());

// const st2 = new Person("Su Su", 17, "male");
// console.log(st2);  

// const age = window.prompt("how old are you?");

// const birthYear = 2024 - parseInt(age);
// window.alert(`you were born in ${birthyear}`)