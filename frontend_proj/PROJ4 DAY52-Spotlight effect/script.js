addEventListener('mousemove', (val)=>{
    document.querySelector('.box').style.setProperty('--x', val.clientX + 'px')
    document.querySelector('.box').style.setProperty('--y', val.clientY + 'px')
})


const para= document.querySelector('p')
const characters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text= para.innerText

para.addEventListener('mouseenter', ()=>{
    //map() hme return me ek array deta h but forEach() kuch return ni krta islie map() use kiye h
    setInterval(()=>{
        const str= text.split('').map((char,index)=>{
            return characters.split('')[Math.floor(Math.random()*53)]
        }).join('')
        
        para.innerText= str;

    }, 30)
    
})