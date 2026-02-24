addEventListener('mousemove', (val)=>{
    document.querySelector('.box').style.setProperty('--x', val.clientX + 'px')
    document.querySelector('.box').style.setProperty('--y', val.clientY + 'px')
})


const para= document.querySelector('p')
const characters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text= para.innerText


let interval=null;

para.addEventListener('mouseenter', ()=>{
    //map() hme return me ek array deta h but forEach() kuch return ni krta islie map() use kiye h
    let iteration=0;
    clearInterval(interval);

    function randomText(){
        const str= text.split('').map((char,index)=>{
            if(index<iteration) return char;

            return characters.split('')[Math.floor(Math.random()*53)]
        }).join('')
        
        para.innerText= str;

        iteration+=0.5;
    }

    interval=setInterval(randomText,30);
    
})