let $inplist = document.querySelector('.inplist');
let $btnadd = document.querySelector('.btnadd');
let $tasklist = document.querySelector('.tasklist');
let $span = document.querySelectorAll('.tasklist div span');
let tabTask = JSON.parse(localStorage.getItem("Tasks")) || [];

function showTask(){
    let tasklist = '';
    for(let i=0; i < tabTask.length; i++){
        tasklist += `
        <div>
            <span id='idspan' onclick="ligne(${i})" class="${tabTask[i].done ? 'done' : ''}">${tabTask[i].text}</span>
            <button onclick="deleteTask(${i})">
                <i class="ri-delete-bin-6-line"></i>
            </button>
        </div>
    `
    }
    $tasklist.innerHTML = tasklist;

}

function addTask(){
    if($inplist.value === ''){
        alert('Add task');
    }
    tabTask.push({text:$inplist.value, done:false});  
    localStorage.setItem("Tasks", JSON.stringify(tabTask));
    showTask();
    $inplist.value = '';     
}
showTask()


function deleteTask(id){
    tabTask.splice(id,1);
    localStorage.Tasks = JSON.stringify(tabTask);
    showTask();
}

// function ligne(id){
//     id.classList.toggle('spantask');   
// }
function ligne(id){
    tabTask[id].done =! tabTask[id].done;
    localStorage.setItem("Tasks", JSON.stringify(tabTask));
    showTask(); 
}