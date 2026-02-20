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

// ---------------------------------------------------------------
/*
4. var card= document.querySelector('.card')
var love= document.querySelector('#love')

card.addEventListener('dblclick', ()=>{
    love.style.opacity=1
    love.style.transform= 'translate(-50%,-50%) scale(1) rotate(0deg)'

    setTimeout(()=>{
        love.style.transform= 'translate(-50%,-230%) scale(1) rotate(60deg)'
    },800)
    setTimeout(()=>{
        love.style.opacity=0
    },1000)
    setTimeout(()=>{
        love.style.transform= 'translate(-50%,-300%) scale(0) rotate(-60deg)'
    },1200)
})

5. var arr=[
    {
        user: "rakshit",
        age: 22,
        city: "varanasi"
    },
    {
        user: "raj",
        age: 21,
        city: "varanasi"
    },
    {
        user: "rohan",
        age: 22,
        city: "varanasi"

    },
    {
        user: "adarsh",
        age: 22,
        city: "muzaffarnagar"
    }
]

var sum=0
arr.forEach((val)=>{
    sum += val.age
})
console.log(sum)
*/

// ---------------------------------------------------------------

const users = [
  {
    fullname: "Aarav Mehta",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Full Stack Developer",
    description: "Passionate about building scalable web applications and exploring new JavaScript frameworks.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    fullname: "Sofia Williams",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Designing intuitive and beautiful user experiences with a focus on accessibility.",
    tags: ["Figma", "Adobe XD", "User Research", "Prototyping"]
  },
  {
    fullname: "Liam Johnson",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Data Scientist",
    description: "Turning data into actionable insights using machine learning and statistical analysis.",
    tags: ["Python", "Machine Learning", "Pandas", "AI"]
  },
  {
    fullname: "Emily Brown",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    profession: "Digital Marketer",
    description: "Helping brands grow through data-driven marketing strategies and social media campaigns.",
    tags: ["SEO", "Content Marketing", "Google Ads", "Analytics"]
  },
  {
    fullname: "Noah Martinez",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Cybersecurity Analyst",
    description: "Focused on securing systems and protecting organizations from digital threats.",
    tags: ["Network Security", "Ethical Hacking", "Risk Assessment", "Cloud Security"]
  },
  {
    fullname: "Isabella Clark",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
    profession: "Mobile App Developer",
    description: "Building high-performance cross-platform mobile apps with modern technologies.",
    tags: ["Flutter", "React Native", "Android", "iOS"]
  },
  {
    fullname: "Ethan Walker",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    profession: "DevOps Engineer",
    description: "Automating deployments and managing cloud infrastructure for scalable systems.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    fullname: "Olivia Davis",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4",
    profession: "Content Creator",
    description: "Creating engaging digital content focused on tech, productivity, and lifestyle.",
    tags: ["YouTube", "Blogging", "Video Editing", "Brand Strategy"]
  }
];

var sum= ''
users.forEach((val)=>{
    sum += `<div class="card">
            <img src=${val.image} alt="">
            <h3>${val.fullname}</h3>
            <h4>${val.profession}</h4>
            <p>${val.description}</p>
        </div>`
})

var main= document.querySelector('main')
main.innerHTML= sum


