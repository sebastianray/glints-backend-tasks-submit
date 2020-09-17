const fs = require('fs');

class TodoList {
    constructor(id,task,status,tag,createdAt,completedAt){
        this.id = id;
        this.task = task;
        this.status = status;
        this.tag = tag;
        this.createdAt = new Date();
        this.completedAt = completedAt;
    };

    static list(){
        const data = fs.readFileSync('./data.json', 'utf8');
        const parseData = JSON.parse(data);
        let tempData = [];
        parseData.forEach(data => {
            const { id, task, status, tag, createdAt, completedAt } = data;
            tempData.push(new TodoList(id, task, status, tag,new Date(createdAt), completedAt));
        });
        return tempData;
    };
    static add(params){
        const toDo = this.list();
        const [task,status,tag] = params;

        const nextId = toDo[toDo.length-1].id + 1;
        const tempObject = {
            id : nextId,
            task : task,
            status : (status === 'true'),
            tag : tag || "[ ]",
            createdAt : new Date(),
            completedAt : null
        }
        toDo.push(tempObject);

        this.save(toDo);
        return `${task} has been created!!!`
    };

    static delete(id){
        const toDo = this.list();
        let task = "";
        toDo.forEach(el => {
            if(el.id === Number(id)){
                task = el.task;
            }
        })
        const tempData = toDo.filter(el => el.id !== Number(id));

        this.save(tempData);
        return `${task} has been removed!`;
    };

    static complete(id){
        const toDo = this.list();
        let task = "";
        toDo.forEach(el => {
            if(el.id === Number(id)){
                task = el.task;
                el.status = true;
                el.tag = "[X]"
                el.completedAt = new Date();
            }
        })
        this.save(toDo);
            return `${task} has been completed!`;  
    };

    static uncomplete(id){
        const toDo = this.list();
        let task = "";
        toDo.forEach(el => {
            if(el.id === Number(id)){
                task = el.task;
                el.status = false;
                el.tag = "[ ]"
                el.completedAt = null;
            }
        })
        this.save(toDo);
            return `${task} has been uncompleted!`;
    };

    static update(params){
        const toDo = this.list();
        const [id, task] = params;
        let temp = "";
        toDo.forEach(el => {
            if(el.id === Number(id)){
                temp = el.task;
                el.task = task;
            }
        });
        this.save(toDo);
        return `${temp} has been changed to ${task}!`
    };

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null,2));
    };
};

module.exports = TodoList;