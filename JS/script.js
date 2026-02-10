// Notes

//js ek scripting language h jo hm insaan likhte h and interpreter/comiler use binary code me convert krta h. A scripting language is a type of programming language used to write small programs (scripts) that automate tasks, control other software, or add functionality—without needing to be compiled first. js browser pe chalti h and hm index.html se connect krte h.

// console.log() is used to give output in the console of the browser. console.warn() is used to give warning messagein the browser. console.error() is used to give error like message on the console of the browser.console.info() is used to give information message on the console of the browser. and console.table({}) is used to give output in table format on the console of the browser.
//slice(), template-literals, split(), replace(), replaceAll(), includes()..these are the basic operations which are performed on the strings.


// datatypes in js--
// 1. float
// 2. number
// 3. string
// 4. boolean
// 5. null  jab aapke paas koi value na ho dnee ko
// 6. array  ek se jada val hold krne k lie
// 8. object   ek se jyada properties ek bande ka hold krne k lie
// 9. symbol   will learn when we will learn objects in detail
// 10. undefined  variable bnaya bt usey koi value ni di
// 11. NaN(not a number)   kisi number k saath esa operation jo ho ni skta
// 12. infinity
// 13. relative and primitive DT: primitive dt are those which can be copied directly and dont have bracktes, on the other hand if your var contains any bracket and thus it can not be copied directly,wrt its value. so, those dt are called relative dt and they do not copy the values instead they copy the reference of the variable. for example--
// var a= [1,2,3,4,5];
// var b= a;   var b copies the refernce of the var a.
// b.pop();   the result will be [1,2,3,4] for both a and b
// prompt() se jo bhi recieve hota h wo ek string k roop me liya jata h..to agr wo ek number enter hota h to hmlog ye krskte h ki number() k andr rkhde, qki agr tum age mangoge tb string dega to usko parse krne k lie number() istmaal krskt eh


//css grid+1 and more se css bacha h

// day 30

// variable hoisting ka mtlb ye hota h jese hmara variable use phle hi hogya ho and uska declaration hm thora late se krre h...to var hoisting me hota h ki var 2 hisse me toot jata h- declaration(jo top of file chla jata h) and initialization(jo usi jgh rhta h jaha var bna tha)..ise hi hoisting khte h.


//Day33

// 1.
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// 2. 
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
//     else{
//         continue;
//     }
// }

// 3.
// for(let i=10;i>0;i--){
//     console.log(i);
// }

// 4.
// for(let i=1;i<6;i++){
//     console.log("yes")
// }

// 5.
// for(let i=1;i<11;i++){
//     if(i%2===0){
//         console.log("even");
//     }
//     else{
//         console.log("odd");
//     }
// }

// 6.
//number(),parseInt() or + they change the value from string to number becz prompt gives resuls in  strings only
// let num= +prompt("enter a number");    
// if(num>0){
//     console.log("positive number");
// }else{
//     console.log("negative number");
// }

// 7.
// let age= +prompt("enter your age")
// if(age>==18){
//     console.log("eligible");
// }
// else if(age<18 && age>==0){
//     console.log("not eligible");
// }else{
//     console.log("invalid input");
// }

// 8. 5 ka table
// for(let i=1;i<11;i++){
//     console.log(`5 X ${i} = ${5*i}`)
// }

// 9. count num which are greater than 8 from 1->15
// let count=0;
// for(let i=1;i<16;i++){
//     if(i>8){
//         count++;
//     }
// }
// console.log(count);

// 10. check the password form your saved one
// let password="RAKSHIT";
// let npassword= prompt("enter your password")
// if(password===npassword){
//     console.log("correct, you're in");
// }
// else{
//     console.log("incorrect password")
// }

// 11. ALLOW only 3 attempts to enter correct password
// let count =3;
// let open=false;
// let password="RAKSHIT";
// let npassword= prompt("enter password, you have 3 chances")
// count--
// while(password!==npassword){
//     if(count===0){ 
//         console.error("account locked")
//         break;
//     }
//     npassword= prompt(`enter password, you have ${count} chances`)
//     if(password===npassword){
//         open=true;
//     }
//     count--;
// }

// 12. ask users for radom words and you've to count only the "yes" words if they type unitl they type "stop".
// let count=0;
// let word= prompt("enter a word, if you want to stop then type stop");
// while(word!=="stop"){
//     word= prompt("enter a word, if you want to stop then type stop")
//     if(word==="yes") count++
// }
// console.log(`you typed stop and you've typed ${count} times yes`)

//13. print numbers divisible 7 from 1 to 50
// for(let i=1;i<51;i++){
//     if(i%7==0){
//         console.log(i)
//     }
// } 

//14. sum of all the odd numbers from 1 to 30
// let sum=0;
// for(let i=1;i<31;i++){
//     if(i%2!=0){
//         sum+=i
//     }
// }
// console.log(`sum of all the odd numbers from 1 to 30 is: ${sum}`)

//15. keep asking number until user enters even number
// let number= +prompt("enter a number")
// while(number%2 !==0){
//     number= +prompt("enter a number")
// }
// console.log("you entered an even number")

//16. take user inputs of two numbers and print all the numbers betwen them
// let num1= +prompt("enter first number")
// let num2= +prompt("enter second number")
// if(num1<num2){
//     for(let i=num1+1;i<num2;i++){
//         console.log(i)
//     }
// }
// else if(num1>num2){
//     for(let i=num2+1;i<num1;i++){
//         console.log(i)
//     }
// }
// else{
//     console.log("you entered same numbers")
// }

//17. print only first 3 odd numbers from 1 to 20
// let count=0;
// for(let i=1;i<21;i++){
//     if(i%2!==0){
//         console.log(i)
//         count++
//         if(count===3) break
//     }
// }

//18. ask users 5 numbers and count the positive ones
// let count= 0;
// for(let i=1;i<=5;i++){
//     let numbers= +prompt("enter any 5 numbers")
//     if(numbers>0) count++
// }
// console.log(`you entered ${count} positive numbers`)

//19. ATM simulator: allow 3 withdrawals and keep track of the balance, if balance is less than 1000 then show a warning message
// let balance= 1000;
// let count=0;
// let flag= false
// while(balance>0 && count<3){
//     let ask= +prompt("enter your amount")
//     count++;
//     if(ask<=balance) balance-=ask
//     else{
//         flag= true
//         break;
//     }
// }
// if(flag===true){
//     console.log("insufficient balance")
// }
// console.log(`blanace left is: ${balance}`)


//----------------------FUNCTIONS----------------------


// ONLY IMPORTANT NOTABLE POINTS ARE MENTIONED HERE


// function doSomething(ame, age, email){ //paramters ni bhi rte firbhi console me arguments print hojata
//     console.log(arguments) // or arguments[index] se sepcific results bi access kr skte h
// }
// doSomething("rakshit", 19, "rjsroom@yahoo.com")

// variable hoisting:
//a()
//var a= function(){}  this is not applicable.

//function hoisting:
// buy()
// function buy(){}  this is applicable. function declaration is hoisted but function expression is not hoisted. and arrow functions are also not hoisted.