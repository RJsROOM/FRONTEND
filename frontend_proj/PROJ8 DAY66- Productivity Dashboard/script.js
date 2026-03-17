function openCrads(){
    var elems=document.querySelectorAll(".elem");
    var fullElems= document.querySelectorAll(".fullElem");
    var fullElemsBack= document.querySelectorAll(".fullElem .back")

    elems.forEach((elem)=>{
    elem.addEventListener("click", ()=>{
            fullElems[elem.id].style.display="block";
        })
    })

    fullElemsBack.forEach((back)=>{
        back.addEventListener("click", ()=>{
            fullElems[back.id].style.display="none";
        })
    })
}

openCrads();