var elems=document.querySelectorAll(".elem");
var fullElems= document.querySelectorAll(".fullElem");

elems.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
        fullElems[elem.id].style.display="block";
    })
})