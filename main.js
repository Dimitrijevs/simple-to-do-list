const task = document.querySelector("#tasks");
const toDo = document.querySelector('#newtask input');

function addToDo(){

    task.innerHTML += `
        <div class="task">
            <span id="taskname">
                ${toDo.value}
            </span>
            <button class="delete">Delete</button>
        </div>
    `;

    toDo.value = "";

    let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.remove();
        }
    }
}