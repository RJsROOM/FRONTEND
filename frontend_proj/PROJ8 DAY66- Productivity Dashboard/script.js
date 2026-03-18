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

let form= document.querySelector(".addTask form")

let taskInput= document.querySelector(".addTask form input")
let taskDetailsInput= document.querySelector(".addTask form textarea")
let taskCheckbox= document.querySelector(".addTask form #check")

let currentTask=[
    {
        task: "mandir jana h",
        details: "sankat mochan",
        checked: true
    },
    {
        task: "badminton",
        details: "kukkru-ankit ko call kro 4pm tk",
        checked: true
    },
    {
        task: "samaan lana h",
        details: "tel or shampoo",
        checked: false
    },
]

function renderTask(){
    var allTask= document.querySelector(".allTask");

    var sum='';

    currentTask.forEach((elem)=>{
    sum+= `<div class="task">
                <h5>${elem.task} 
                    <span class=${elem.checked}>
                        Imp
                    </span>
                </h5>
                <button>Mark as complete</button>
            </div>`
    })

    allTask.innerHTML=sum;
}
renderTask();


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    currentTask.push(
        {   
        task: taskInput.value, 
        details: taskDetailsInput.value, 
        checked: taskCheckbox.value
        }
    )
    renderTask();
    form.reset();
})


