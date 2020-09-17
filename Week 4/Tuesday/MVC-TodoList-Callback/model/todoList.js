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

    static list(cb){
        fs.readFile('./data.json', 'utf8', (err, data) => {
            if (err){
                cb(err, null);
            } else {
                const parseData = JSON.parse(data);
                let tempData = [];
                parseData.forEach(data => {
                const { id, task, status, tag, createdAt, completedAt } = data;
                tempData.push(new TodoList(id, task, status, tag,new Date(createdAt), completedAt));
                });
                cb(null, tempData);
            }
        })
    };
    static add(params, cb){
        this.list((err, data)=>{
            if(err){
                cb(err,null)
            } else {
                const [task,status,tag] = params;
                const nextId = data[data.length-1].id + 1;
                const tempObject = {
                    id : nextId,
                    task : task,
                    status : (status === 'true'),
                    tag : tag || "[ ]",
                    createdAt : new Date(),
                    completedAt : null
                }
                data.push(tempObject);
                this.save(data);
                cb(null, `${task} has been created!!!`);
            }
        })
    };

    static delete(id, cb){
        this.list((err, data)=>{
            if(err){
                cb(err,null)
            } else {
                let task = "";
                data.forEach(el => {
                    if(el.id === Number(id)){
                        task = el.task;
                    }
                })
                const tempData = data.filter(el => el.id !== Number(id));
                this.save(tempData);
                cb(null, `${task} has been removed!`);
            }
        })
    };

    static complete(id, cb){
        this.list((err, data)=>{
            if(err){
                cb(err,null)
            } else {
                let task = "";
                data.forEach(el => {
                    if(el.id === Number(id)){
                        task = el.task;
                        el.status = true;
                        el.tag = "[X]"
                        el.completedAt = new Date();
                    }
                })
                this.save(data);
                cb(null, `${task} has been completed!`);  
            }
        })
    };

    static uncomplete(id, cb){
        this.list((err, data)=>{
            if(err){
                cb(err,null)
            } else {
                let task = "";
                data.forEach(el => {
                    if(el.id === Number(id)){
                        task = el.task;
                        el.status = false;
                        el.tag = "[ ]"
                        el.completedAt = null;
                    }
                })
                this.save(data);
                cb(null, `${task} has been uncompleted!`);
            }
        })
    };

    static update(params, cb){
        this.list((err, data)=>{
            if(err){
                cb(err,null)
            } else {
                const [id, task] = params;
                let temp = "";
                data.forEach(el => {
                    if(el.id === Number(id)){
                        temp = el.task;
                        el.task = task;
                    }
                })
                this.save(data);
                cb(null, `${temp} has been changed to ${task}!`);
            }
        })
    };

    static save(data){
        fs.writeFileSync('./data.json', JSON.stringify(data, null,2));
    };
};

module.exports = TodoList;