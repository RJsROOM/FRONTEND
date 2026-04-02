
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


// ---------------------MOTIVATIONAL QUOTE------------------------------

function motivationalQuote() {
    var quote = document.querySelector(".motivation-2 h2")
    var author = document.querySelector(".motivation-3 h2")

    async function fetchQuote() {
        let response = await fetch('https://dummyjson.com/quotes/random')
        let data = await response.json()

        quote.innerHTML = data.quote;
        author.innerHTML = '-' + data.author;

    }
    fetchQuote();
}

motivationalQuote();


// ----------------------POMODORO TIMER------------------------------


let timer= document.querySelector(".pomo-timer h1");
let timerInterval=null;
let startBtn= document.querySelector(".pomo-timer .start");
let resetBtn= document.querySelector(".pomo-timer .reset");
let pauseBtn= document.querySelector(".pomo-timer .pause");
let session= document.querySelector(".pomo-fullpage .session");
let isWorkSession=true;

let totalSeconds= 25*60;

function updateTimer(){
    let minutes= Math.floor(totalSeconds/60);
    let seconds=totalSeconds%60;

    timer.innerHTML= `${minutes<10? '0'+minutes: minutes}:${seconds<10? '0'+seconds: seconds}`;
}

function startTimer(){
    clearInterval(timerInterval);

    if(isWorkSession){
        timerInterval=setInterval(()=>{
            if(totalSeconds>0){
                totalSeconds--;
                updateTimer();
            }else{
                isWorkSession=false;
                clearInterval(timerInterval);
                timer.innerHTML="05:00";
                session.innerHTML="Break";
                session.style.backgroundColor="var(--blue)";
                totalSeconds=5*60;
            }
        },1000)
    }else{
        timerInterval=setInterval(()=>{
            if(totalSeconds>0){
                totalSeconds--;
                updateTimer();
            }else{
                isWorkSession=true;
                clearInterval(timerInterval);
                timer.innerHTML="25:00";
                session.innerHTML="Work Session";
                session.style.backgroundColor="var(--green)";
                totalSeconds=25*60;
            }
        },1000)
    }
}

function pauseTimer(){
    clearInterval(timerInterval);
}

function resetTimer(){
    totalSeconds=25*60;
    clearInterval(timerInterval);
    updateTimer();
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer)

// the pause timer restarts from that last time because the value of totalseconds which already was deducted gets continued from that number only