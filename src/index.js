import _ from 'lodash';
import './style.css';
import { compareAsc, format } from 'date-fns'

//modules
import Todo from "./todo"; 
import Project from './project';
import titleExist from "./titleExist";
import display from "./display";
import { displayProject } from "./display";
import newProjectForm from './newProjectForm';
import newTodoForm from "./newTodoForm";
////////////////////////////////////

export let mainList = [];

 if (localStorage.getItem("myLocalStorage")){
     mainList = JSON.parse(localStorage.getItem("myLocalStorage"));
     console.log(mainList)
     console.log("regesters")
 }else{
    console.log("no regesters yet")
 }

export function createProject(title,description,note,dueDate,done=false) {
    if (titleExist(title,mainList)){
        console.log ("this project is already exist");
        return;
    }
    mainList.push(new Project(title,description,note,dueDate,done));
    localStorage.removeItem("myLocalStorage");
    localStorage.setItem("myLocalStorage", JSON.stringify(mainList) );
};

function createTodo(projectTitle,title,description,note,dueDate,done=false) {
    for (let i=0 ;i<mainList.length ;i++){
        if(mainList[i].title == projectTitle){
            mainList[i].todos.push(new Todo(title,description,note,dueDate,done));  
            localStorage.removeItem("myLocalStorage");
            localStorage.setItem("myLocalStorage", JSON.stringify(mainList) );
            return;
        }
    }
    console.log ("this project d'ont exist..."); 
};

function removeProject (title){
    for (let i=0 ;i<mainList.length ;i++){
        if(mainList[i].title == title){
            mainList.splice(i,1);
        }
    }
}
function removeTodo (project,title){
    for (let i=0 ;i<mainList.length ;i++){
        if(mainList[i].title == project){
            for (let t=0 ;t<mainList[i].todos.length ;t++){
                if(mainList[i].todos[t].title == title){
                    mainList[i].todos.splice(t,1);
                }
                
            }
            
        }
    }
}

/*

*/

//test



//  createProject("first project","test project","note","01/02/2023");
//  createTodo("first project","first todo","test todo","note","01/02/2023");
//  createTodo("first project","second todo","test todo","note","01/02/2023");
//  createTodo("first project","third todo","test todo","note","01/02/2023");

//  mainList.push(new Project("second project","test project","note","01/02/2023"));
//  createTodo("second project","second todo","test todo","note","01/02/2023");

//  createProject("third project","test project","note","01/02/2023");
//  createTodo("third project","first todo","test todo","note","01/02/2023");
//  createTodo("third project","second todo","test todo","note","01/02/2023");
//  createTodo("third project","third todo","test todo","note","01/02/2023");

//  localStorage.setItem("mylocalStorage", JSON.stringify(mainList) );

//  console.log(JSON.parse(localStorage.getItem("myLocalStorage")));

display(mainList);





const addNewProject = document.querySelector("#addNewProject");
addNewProject.addEventListener('click', () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const notes = document.getElementById("notes").value;
    const date = document.getElementById("date").value;

    createProject(title,
    description,
    notes,
    date);

    newProjectForm();
    display(mainList);
});

const addNewTodo = document.querySelector("#addNewTodo");
addNewTodo.addEventListener('click', () => {

    const projectName = document.getElementById("projectName");
    const div1 = projectName.querySelectorAll("div");
    console.log(div1[0].textContent);
    

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const notes = document.getElementById("notes").value;
    const date = document.getElementById("date").value;

    createTodo(div1[0].textContent, 
    title,
    description,
    notes,
    date);

    newProjectForm();
    displayProject(div1[0].textContent);
});


export let project = document.querySelectorAll(".project");
project.forEach(box =>{
    box.addEventListener("click", () => {
        displayProject(box.textContent);
    })
}
    
  );

//GIVE THE PLUS BUTTON THE ABILITY TO CREATE A NEW PROJECT
const addProject = document.querySelector("#addProject");
addProject.addEventListener('click', () => {
    newProjectForm();
  });

//GIVE THE PLUS BUTTON THE ABILITY TO CREATE A NEW todo
const addTodo = document.querySelector("#addTodo");
addTodo.addEventListener('click', () => {
    newTodoForm();
});

  //displayProject(mainList[0].title);