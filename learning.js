// console.log("Hello i'm learning javascript")
// function findAge(birthYear){
//     let currentYear = 2024;
//     let age = currentYear - birthYear   
//     return age;
// }

// console.log(findAge(1994))
// // console.log(findAge(2005))
// // console.log(findAge(2002))


// // let total = 0;

// // function buy(productName, productPrice, quantity) {
    
// //     let cost = productPrice * quantity;
// //     total += cost;
// //     return productName +"-" + quantity +"-" + cost;
// // }
// // console.log(buy("apple", 500, 5))
// // console.log(buy("orange", 600, 3))
// // console.log(buy("mango", 1200, 7))


// // let age = prompt("Enter your age: ")
// //     age = Number(age);

// // if(age >= 18) {
// //     console.log("အရက်သောက်လို့ရတယ်");
// //     alert("အရက်သောက်လို့ရတယ်");
// // }   else    {
// //     console.log("ရေသောက်");
// //     alert("ရေသောက်");
// // // }
// // let a = 6;
// // let b = 2;
// // let result = a + b;
// // console.log(a)
// // console.log(result)
// // let firstName = "Kyaw";
// // let lastName = "Lwin";
// // console.log(lastName + ' ' + firstName);

// // let x = 10;
// // x += 5;
// // console.log(x);

// const name = "maung maung";
// let age = 15;
// let township = "kyaukmyaung";

// let pocketMoney = 200;
// let orangePrice = 50;

// pocketMoney -= orangePrice;

// console.log (pocketMoney);

// const bag = ['Myanmar Book', 'English Book', 'Bio Book']

// let pen = false;
// console.log(bag);
// let canMgMgFriSmoke = true;
// let canMgMgSmoke = false;


// const student1 = {
//     name : "kyaw kyaw",
//     age : 15,
//     township : "kyaungmyaung",
    
// }
// const student2 = {
//     name : "zaw zaw",
//     age : 15,
//     township : "kyaungmyaung",
    
// }
// const student3 = {
//     name : "mya mya",
//     age : 15,
//     township : "kyaungmyaung",
    
// }

// students = [student1, student2, student3]
// console.log(students)
// console.table(students)

// const run = function(x) {
//     return x * 2;
// }

// console.log(run(7))

// // (function(){
// //     console.log("IIFE");
// // })();

// const x = function () {
//     return "this is x";
// };

// const y = function () {
//     return x() + "this is y";
// };

// console.log(x());
// console.log(y());

// console.log(window);
// console.log(document);
// console.log(console);

// console.log(`I'am ${(function age(){
//     const currentYear = 2024;
//     const birthYear = 1994;
//     const age = currentYear - birthYear;
//     return age;
    
// })()}` )

// const x = window.prompt("Input first number: ")
// const y = window.prompt("Input second number: ")

// // result = parseFloat(x) + parseFloat(y)

// // console.log(result);

// // const age = window.prompt("Enter your age:");
// // const birthYear = 2024 - parseInt(age);

// // window.alert(`Your born in ${birthYear}`)

// const answer = window.confirm("have u finish ur dinner?")
// console.log(answer ? "Yes i am finish": "No, no yet") 

// const heading = document.getElementById("heading")
// const textInput = document.getElementById("textInput");
// const btn = document.getElementById("btn")
// console.log(heading.innerHTML);
// console.dir(textInput);
// console.log(btn);
// console.log(listGroup.innerHTML)
// console.log(listGroup.innerText)
// console.dir(textInput)

// obj = {
//     a : "aaa",
//     b : "bbb",
// }

// console.log(obj);

// obj.a = "ooo";
// obj.c = "eee";

// heading.innerText = "San Kyi Tar";

//change title
// 1. select
// 2. set
// function changeTitle() {
//     heading.innerText = textInput.value;
// // 3. clear
//     textInput.value = "";
// }

// btn.ondblclick= function() {
//     console.log("U click");
// };

// btn.onclick = changeTitle;
// btn.addEventListener("click", changeTitle)

// 4. event listener

// const paragraphs = document.getElementsByTagName("p")
const points = [34, 15, 25, 52, 19, 56 ,30, 57];