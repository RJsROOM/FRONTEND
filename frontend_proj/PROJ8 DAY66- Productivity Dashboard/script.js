function openCrads() {
    var elems = document.querySelectorAll(".elem");
    var fullElems = document.querySelectorAll(".fullElem");
    var fullElemsBack = document.querySelectorAll(".fullElem .back")

    elems.forEach((elem) => {
        elem.addEventListener("click", () => {
            fullElems[elem.id].style.display = "block";
        })
    })

    fullElemsBack.forEach((back) => {
        back.addEventListener("click", () => {
            fullElems[back.id].style.display = "none";
        })
    })
}

openCrads();


function TodoList() {
    let form = document.querySelector(".addTask form")

    let taskInput = document.querySelector(".addTask form input")
    let taskDetailsInput = document.querySelector(".addTask form textarea")
    let taskCheckbox = document.querySelector(".addTask form #check")

    var currentTask = [];

    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'));
    } else {
        console.error('task list is empty');
    }


    function renderTask(){

        var allTask = document.querySelector(".allTask");

        var sum = '';

        currentTask.forEach((elem, id) => {
            sum += `<div class="task">
                <h5>${elem.task} 
                    <span class=${elem.checked}>
                        Imp
                    </span>
                </h5>
                <button id=${id}>Mark as complete</button>
            </div>`
        })

        allTask.innerHTML = sum;

        localStorage.setItem('currentTask', JSON.stringify(currentTask))

        var markAsCompleteBtn = document.querySelectorAll(".task button")
        markAsCompleteBtn.forEach((btn) => {
            btn.addEventListener("click", () => {
                currentTask.splice(btn.id, 1)
                renderTask();
            })
        })
    }
    renderTask();


    form.addEventListener("submit", (e) => {
        e.preventDefault();
        currentTask.push(
            {
                task: taskInput.value,
                details: taskDetailsInput.value,
                checked: taskCheckbox.value,
            }
        )
        renderTask();
        form.reset();
    })
}

TodoList();
