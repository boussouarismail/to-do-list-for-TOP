export default class Project {
    constructor(title,description,note,dueDate,done=false){
        this.title = title;
        this.description = description;
        this.note = note;
        this.dueDate = dueDate;
        this.done = done;
        this.todos = [];
    }
   
}