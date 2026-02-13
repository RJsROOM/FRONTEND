/*
Notes

js ek scripting language h jo hm insaan likhte h and interpreter/comiler use binary code me convert krta h. A scripting language is a type of programming language used to write small programs (scripts) that automate tasks, control other software, or add functionality—without needing to be compiled first. js browser pe chalti h and hm index.html se connect krte h.

console.log() is used to give output in the console of the browser. console.warn() is used to give warning messagein the browser. console.error() is used to give error like message on the console of the browser.console.info() is used to give information message on the console of the browser. and console.table({}) is used to give output in table format on the console of the browser.
slice(), template-literals, split(), replace(), replaceAll(), includes()..these are the basic operations which are performed on the strings.


datatypes in js--
1. float
2. number
3. string
4. boolean
5. null  jab aapke paas koi value na ho dnee ko
6. array  ek se jada val hold krne k lie
8. object   ek se jyada properties ek bande ka hold krne k lie
9. symbol   will learn when we will learn objects in detail
10. undefined  variable bnaya bt usey koi value ni di
11. NaN(not a number)   kisi number k saath esa operation jo ho ni skta
12. infinity
13. relative and primitive DT: primitive dt are those which can be copied directly and dont have bracktes, on the other hand if your var contains any bracket and thus it can not be copied directly,wrt its value. so, those dt are called relative dt and they do not copy the values instead they copy the reference of the variable. for example--
var a= [1,2,3,4,5];
var b= a;   var b copies the refernce of the var a.
b.pop();   the result will be [1,2,3,4] for both a and b
prompt() se jo bhi recieve hota h wo ek string k roop me liya jata h..to agr wo ek number enter hota h to hmlog ye krskte h ki number() k andr rkhde, qki agr tum age mangoge tb string dega to usko parse krne k lie number() istmaal krskt eh


css grid+1 and more se css bacha h

day 30

variable hoisting ka mtlb ye hota h jese hmara variable use phle hi hogya ho and uska declaration hm thora late se krre h...to var hoisting me hota h ki var 2 hisse me toot jata h- declaration(jo top of file chla jata h) and initialization(jo usi jgh rhta h jaha var bna tha)..ise hi hoisting khte h.


Day33

1.
for(let i=1;i<=10;i++){
    console.log(i);
}

2. 
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
    else{
        continue;
    }
}

3.
for(let i=10;i>0;i--){
    console.log(i);
}

4.
for(let i=1;i<6;i++){
    console.log("yes")
}

5.
for(let i=1;i<11;i++){
    if(i%2===0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

6.
number(),parseInt() or + they change the value from string to number becz prompt gives resuls in  strings only
let num= +prompt("enter a number");    
if(num>0){
    console.log("positive number");
}else{
    console.log("negative number");
}

7.
let age= +prompt("enter your age")
if(age>==18){
    console.log("eligible");
}
else if(age<18 && age>==0){
    console.log("not eligible");
}else{
    console.log("invalid input");
}

8. 5 ka table
for(let i=1;i<11;i++){
    console.log(`5 X ${i} = ${5*i}`)
}

9. count num which are greater than 8 from 1->15
let count=0;
for(let i=1;i<16;i++){
    if(i>8){
        count++;
    }
}
console.log(count);

10. check the password form your saved one
let password="RAKSHIT";
let npassword= prompt("enter your password")
if(password===npassword){
    console.log("correct, you're in");
}
else{
    console.log("incorrect password")
}

11. ALLOW only 3 attempts to enter correct password
let count =3;
let open=false;
let password="RAKSHIT";
let npassword= prompt("enter password, you have 3 chances")
count--
while(password!==npassword){
    if(count===0){ 
        console.error("account locked")
        break;
    }
    npassword= prompt(`enter password, you have ${count} chances`)
    if(password===npassword){
        open=true;
    }
    count--;
}

12. ask users for radom words and you've to count only the "yes" words if they type unitl they type "stop".
let count=0;
let word= prompt("enter a word, if you want to stop then type stop");
while(word!=="stop"){
    word= prompt("enter a word, if you want to stop then type stop")
    if(word==="yes") count++
}
console.log(`you typed stop and you've typed ${count} times yes`)

13. print numbers divisible 7 from 1 to 50
for(let i=1;i<51;i++){
    if(i%7==0){
        console.log(i)
    }
} 

14. sum of all the odd numbers from 1 to 30
let sum=0;
for(let i=1;i<31;i++){
    if(i%2!=0){
        sum+=i
    }
}
console.log(`sum of all the odd numbers from 1 to 30 is: ${sum}`)

15. keep asking number until user enters even number
let number= +prompt("enter a number")
while(number%2 !==0){
    number= +prompt("enter a number")
}
console.log("you entered an even number")

16. take user inputs of two numbers and print all the numbers betwen them
let num1= +prompt("enter first number")
let num2= +prompt("enter second number")
if(num1<num2){
    for(let i=num1+1;i<num2;i++){
        console.log(i)
    }
}
else if(num1>num2){
    for(let i=num2+1;i<num1;i++){
        console.log(i)
    }
}
else{
    console.log("you entered same numbers")
}

17. print only first 3 odd numbers from 1 to 20
let count=0;
for(let i=1;i<21;i++){
    if(i%2!==0){
        console.log(i)
        count++
        if(count===3) break
    }
}

18. ask users 5 numbers and count the positive ones
let count= 0;
for(let i=1;i<=5;i++){
    let numbers= +prompt("enter any 5 numbers")
    if(numbers>0) count++
}
console.log(`you entered ${count} positive numbers`)

19. ATM simulator: allow 3 withdrawals and keep track of the balance, if balance is less than 1000 then show a warning message
let balance= 1000;
let count=0;
let flag= false
while(balance>0 && count<3){
    let ask= +prompt("enter your amount")
    count++;
    if(ask<=balance) balance-=ask
    else{
        flag= true
        break;
    }
}
if(flag===true){
    console.log("insufficient balance")
}
console.log(`blanace left is: ${balance}`)


----------------------FUNCTIONS----------------------
ONLY IMPORTANT NOTABLE POINTS ARE MENTIONED HERE


function doSomething(ame, age, email){ //paramters ni bhi rte firbhi console me arguments print hojata
    console.log(arguments) // or arguments[index] se sepcific results bi access kr skte h
}
doSomething("rakshit", 19, "rjsroom@yahoo.com")

variable hoisting:
a()
var a= function(){}  this is not applicable.

function hoisting:
buy()
function buy(){}  this is applicable. function declaration is hoisted but function expression is not hoisted. and arrow functions are also not hoisted.

rest parameter: it is used to skip writing all the parameters from the set of arguments which was called in the function. and when using rest parameter(...) it should be followed by the name of the array in which you'll be storing the rest of the parameters, also the position of rest parameter is last in the parameter list. 
for example- function abc(a,b, ...arr_name) console.log(a,b,c)
abc(1,2,3,4,5,6)  //output will be 1 2 [3,4,5,6]

when you don't pass arguments while calling a function and also using the parameters and using them then they are undefined.
desttructuring a parameter means when you are given an onject as an argument and you want to access only the key of that object then instead of going with the normal way(obj.name,obj.age..etc) you can directly pass the keys as an object in the parameter and access them.
forexample-- function({name,age}{
console.log(name,age)}
abc({name:"rj", age:23})

when we are gievn less arguments but we are working with more parametersin our function then we can use f=default parameters to avoid getting undefined in the console. for example-- function abc(a,b,c=10) console.log(a,b,c) abc(1,2)  //output will be 1 2 10

when we are givin arguments then we must follow the order of the parameters we are asked to give.
the default argument works same like the efault parameter if we want to give the default value to any argument we simply give it in the paramter.
when we are given an array and we dont want to write all the inputs of that then we use the spread argument. it is written same like the rest parameter.

Immediately Invoked Function Expression(IIFE) is a functiom which is called immediately after its creation. it is used to control the privacy of the global variables. as we know the global scoped variables can be accessed from any line of the code and also be modified from anywhere even from the console of the browser, so to avoid this we use IIFE which avoids the use of the global variables from outside.
syntax--
(function(){
    //code
})();

there are various types of functions in JS:
1. anonymous functions: these are those which dont have any name of theier own. for example-- function(){}
2. higher order function: these are those functions which either return a function or take a function as a parameter. for example-- function abc(){ return function(){} } or function abc(func){ }
3. callback function: when usng a higher order function when we pass the function as an argument to the parent function as a parameter then the function used as an argument is called a callback function
4. first class function: it is a concept which is used by other prog languages as well. it says that a function can be used as a variable to other functions. for example- let a =function(){}  or  function abc(a,b){}
abc(1, function(){})
5. pure function: same input= same output AND no side effects
eg. let a =12
    function abc(val) console.log(val+2)
    abc(a);
6. impure functions: same input != same output AND koi na koi side effecrs rhega
eg. let a=12
    function abc(val) console.log(math.random()+val)
    abc(a);

closure are those functions which return another function but that returning function uses a variable from its parent function. every closure is a higher order function too.
eg. function abc(){
    let a=12;
    return function() consoe.log(a)
}




--------------------------ARRAYS AND OBJECT IN JS-----------------------


functions on arrays--psush, pop, shift, unshift, indexOf, filter, some, map, reduce, spread oprator, slice, reverse, sort, join, toString, array destructuring{let arr=[1,2,3,4] let [a,,b]= arr output: a=1 and b=3}

operations on objects--freeze, seal, destructuring, object methods, this keyword.


level-1 questions on arrays...

1. write a function satHello() which prints "hello JS"
function sayHellor(){
    console.log("hello JS")
}
sayHellor();

2. create a function add(a,b) which returns the sume and gives the rsult
function add(a,b){
    return a+b;
}
console.log(add(2,3));      return keyword gives the values on the place from where the function was called.

3. write a function with a default parameter name="rakshit" that prints "hi <name>"
function hello(val="rakshit"){
    console.log(`hi ${val}`)
}
hello()

4. use rest parameters to make a function that adds multiple numbers
function addunlimited(...c){
    let result=0;
    c.forEch(function(val){
        result+=val;
    })
    console.log(rsult)
}
addunlimited(1,2,3,4,5,6,7)

5. create an object person with keys name, age, city an dprint each key's value
let obj={
    name: "rakshit",
    age: 23,
    city: "varanasi"
}
for(let key in obj){
    console.log(obj[key])
}



*/

