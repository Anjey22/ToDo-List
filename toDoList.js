
// task inyut on list
let addBox = document.getElementById("add-box");
let listSection = document.getElementById("list-Section");
function addTask(){
    if (addBox.value ===''){
        alert("Add Your Task");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML =addBox.value;
        listSection.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    addBox.value ="";
    saveTask();
}

// task checked and remove
listSection.addEventListener("click", function(notes){
    if(notes.target.tagName ==="LI"){
        notes.target.classList.toggle("checked");
        saveTask();
    }
    else if (notes.target.tagName ==="SPAN"){
        notes.target.parentElement.remove();
        saveTask();
    }
}, false);

//Data set, fetch and restore
function saveTask(){
    localStorage.setItem("task list", listSection.innerHTML);
}
//show data even page refresh previous task/list willkeep after refresh
function showTask(){
    listSection.innerHTML = localStorage.getItem("task list");
}
showTask() 
