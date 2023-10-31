export default function newTodoForm (){
    const forme = document.querySelector("#newProjectForm");
    if(forme.style.display == "none"){
        forme.style.display = "flex";
    }else{
        forme.style.display = "none";  
    }

    // const title = document.getElementById("title").value;
    // const description = document.getElementById("description").value;
    // const notes = document.getElementById("notes").value;
    // const date = document.getElementById("date").value;

    const lable = document.querySelectorAll("label");

    lable[0].textContent = "todo Title :";
    lable[1].textContent = "todo description :";
    lable[2].textContent = "todo notes :";
    lable[3].textContent = "todo due date :";

    const newTodo = document.getElementById("addNewTodo");
    const newProject = document.getElementById("addNewProject");

    newTodo.style.display = "block";
    newProject.style.display = "none";
    
}