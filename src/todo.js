export default class Todo {
    constructor(title,description,note,dueDate,done=false){
        this.title = title;
        this.description = description;
        this.note = note;
        this.dueDate = dueDate;
        this.done = done;
    }
}