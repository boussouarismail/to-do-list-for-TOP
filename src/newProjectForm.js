export default function newProjectForm (){
    const forme = document.querySelector("#newProjectForm");
    if(forme.style.display == "none"){
        forme.style.display = "flex";
    }else{
        forme.style.display = "none";  
    }
}