/* DOM: document object module (frontend ki javascript)
DOM k 4 pillars-
1. selection of an element
    -querySelector
    -getElementById
    -getElementByClassName
    -querySelectorAll
2. changing HTML elements
    - textContent
    - innerHTML
3. changing CSS properties
    - style.[prop_name]
4. event listeners.
eg.-
1. var h =document.querySelector('h1')
console.log(h)

2. var h1= document.querySelector('h1')
h1.innerHTML= 'changed with JS'

3. var h1= document.querySelector('h1')
h1.innerHTML= 'changed with JS'
h1.style.color='red'
h1.style.backgroundColor='white'

4. var h1= document.querySelector('h1')
h1.innerHTML='changed'
h1.style.color= 'gold'
h1.addEventListener('click', function(){
    console.log('clicked')
})

5. var h1= document.querySelector('h1')
var btn= document.querySelector('button')

btn.addEventListener('click', function(){
    h1.innerHTML= "i am a Batman"
    h1.style.color= "red"
    h1.style.fontSize= '60px'
})

-----------------MINI PROPJECT ------------
var box= document.getElementById('box')
var btn=document.querySelector('button')

btn.addEventListener('click', function(){
    let a1= Math.floor(Math.random()*256)
    let a2= Math.floor(Math.random()*256)
    let a3= Math.floor(Math.random()*256)

    box.style.backgroundColor= `rgb(${a1},${a2},${a3})`
})
*/

// ---------------------------------------------------------------------

// creating an element and appending a child
/* 
eg.-
1. var btn= document.querySelector('button')
btn.addEventListener('click', function(){
    var h1= document.createElement('h1')
    h1.innerHTML= "hello RJ"
    console.log(h1)
}
)

2. var h1= document.createElement('h1')
h1.innerHTML= "hello RJ"
var body= document.querySelector('body')
body.appendChild(h1)

3. var btn= document.querySelector('button')
var main= document.querySelector('main')

btn.addEventListener('click', ()=>{
    var div= document.createElement('div')

    var x= Math.random()*100
    var y= Math.random()*100
    var rot= Math.random()*360
    var c1= Math.floor(Math.random()*256)
    var c2= Math.floor(Math.random()*256)
    var c3= Math.floor(Math.random()*256)


    div.style.height= '50px'
    div.style.width= '50px'
    div.style.position= 'absolute'
    div.style.left= `${x}%`
    div.style.top= `${y}%`
    div.style.rotate= `${rot}deg`
    div.style.backgroundColor= `rgb(${c1},${c2},${c3})`


    main.appendChild(div)
})

4. var btn= document.querySelector('button')
var main= document.querySelector('main')

var arr=['rakshit', 'raj', 'rohan', 'adarsh', 'osama', 'krishna', 'yash', 'sufiyan']

btn.addEventListener('click', ()=>{
    var h2= document.createElement('h2')
    var x= Math.random()*100
    var y= Math.random()*100
    var rot= Math.random()*360
    var scl= Math.random(0)*3

    h2.innerHTML= arr[Math.floor(Math.random()*arr.length)]
    h2.style.position= 'absolute'
    h2.style.left= `${x}%`
    h2.style.top= `${y}%`
    h2.style.rotate= `${rot}deg`
    h2.style.transform= `scale(${scl})`


    main.appendChild(h2)
})

*/

// ----------------------------------------------------------------------
// setTimeout() and setInterval() : making JS work like asynchronous lanaguage.
/*  
eg.--

1. console.log("one")
setTimeout(function(){
    console.log('hello')
},1000)
console.log("two")

2. var h1= document.querySelector('h1')
var btn= document.querySelector('button')
var arr=['rakshit', 'raj', 'rohan', 'adarsh', 'osama', 'krishna', 'yash', 'sufiyan']

btn.addEventListener('click', ()=>{
    h1.innerHTML= 'changing user..'
    setTimeout(()=>{
        h1.innerHTML=arr[Math.floor(Math.random()*arr.length)]
    },400)
})

3. var h1= document.querySelector('h1')
var btn= document.querySelector('button')
var arr=['rakshit', 'raj', 'rohan', 'adarsh', 'osama', 'krishna', 'yash', 'sufiyan']

btn.addEventListener('click', ()=>{
    h1.innerHTML= 'changing user..'
    var auto= setInterval(()=>{
        h1.innerHTML=arr[Math.floor(Math.random()*arr.length)]
    },500)
    
    setTimeout(()=>{
        clearInterval(auto)
    },3000)
})

*/






