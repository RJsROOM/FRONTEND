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





