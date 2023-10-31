import { createProject,mainList } from "./index";
import newProjectForm from "./newProjectForm";


export default function display (mainList){
    //DISPLAY THE PROJECT IN SID BAR
    const projects = document.querySelector(".sid-bar>div");
    projects.innerHTML = ``;
        for (let i=0 ;i<mainList.length ;i++){
            const div = document.createElement('div');
            div.textContent = mainList[i].title;
            div.className = "project";
            div.onclick = "test()";
            projects.appendChild(div);
        }
        //GIVE THE LIST OF PROJECT THE ABILITY TO CLICKED
        const project = document.querySelectorAll(".project");
        project.forEach(box =>{
            box.addEventListener("click", () => {
                displayProject(box.textContent);
            })
        });

        
}

export function displayProject(title){
    
    const head = document.querySelector("#head>div");//EMPTY THE 
    head.textContent = "";
    for(let project in mainList){
        //DISPLAY THE SPECIFIC PROJECT INFO
        if(mainList[project].title == title){
            for(let element in mainList[project]){
                if (element == "todos")continue;
                const div = document.createElement('div');
                div.textContent = mainList[project][element];
                head.appendChild(div);   
            }
            
                

            const todo = document.querySelector("#todos");
            todo.innerHTML = "";
            //DISPLAY THE SPECIFIC PROJECT TODO LIST
            for (let i=0 ;i<mainList[project].todos.length ;i++){
                const div = document.createElement('div');
                div.textContent = mainList[project].todos[i].title;
                div.className = "todo";
                for (let j in mainList[project].todos[i]) {
                    const div1 = document.createElement('div');
                    div1.textContent = mainList[project].todos[i][j];
                    div.appendChild(div1);
                }  
                todo.appendChild(div);
            }
        }
    }
        
}

