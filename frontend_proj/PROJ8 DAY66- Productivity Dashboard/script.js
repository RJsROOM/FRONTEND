
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

// ------------------------TODO LIST----------------------------

function TodoList() {
    let form = document.querySelector(".addTask form")

    let taskInput = document.querySelector(".addTask form input")
    let taskDetailsInput = document.querySelector(".addTask form textarea")
    let taskCheckbox = document.querySelector(".addTask form #check")

    let currentTask = [];

    if (localStorage.getItem('currentTask')) {
        currentTask = JSON.parse(localStorage.getItem('currentTask'));
    } else {
        console.error('task list is empty');
    }


    function renderTask() {

        let allTask = document.querySelector(".allTask");

        let sum = '';

        currentTask.forEach((elem, id) => {
            sum += `<div class="task">
                <h5>${elem.task}
                    ${elem.checked ? `<span class="imp">Imp</span>` : ``}
                </h5>
                <button id=${id}>Mark as complete</button>
            </div>`
        })

        allTask.innerHTML = sum;

        localStorage.setItem('currentTask', JSON.stringify(currentTask))

        let markAsCompleteBtn = document.querySelectorAll(".task button")
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
                checked: taskCheckbox.checked,
            }
        )
        renderTask();
        form.reset();
    })
}

TodoList();


// --------------------------DAILY PLANNER-------------------------

function dailyPlanner() {
    var dayActivities = JSON.parse(localStorage.getItem('dayActivities')) || []
    var dayPlanner = document.querySelector(".day-planner")


    var hours = Array.from({ length: 24 }, (elem, idx) => {
        return `${0 + idx}:00 - ${1 + idx}:00`
    })


    var wholeDaySum = '';

    hours.forEach((elem, idx) => {
        var savedData = dayActivities[idx] || '';

        wholeDaySum += `<div class="day-planner-time">
                    <p>${elem}</p>
                    <input id=${idx} type="text" placeholder="..." value=${savedData}>
                </div>`
    })

    dayPlanner.innerHTML = wholeDaySum;
    var dayPlannerInput = document.querySelectorAll(".day-planner input")

    dayPlannerInput.forEach((elem) => {
        elem.addEventListener("input", () => {
            dayActivities[Number(elem.id)] = elem.value;
            localStorage.setItem('dayActivities', JSON.stringify(dayActivities));
        })
    })
}

dailyPlanner();