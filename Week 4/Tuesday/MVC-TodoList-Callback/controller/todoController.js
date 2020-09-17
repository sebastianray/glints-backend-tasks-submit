const Todolist = require('../model/todoList');
const View = require('../view/View');

class TodoController{
    static help(){
        View.help();
    };

    static list(){
        Todolist.list((err, data) => {
            if(err){
                View.error(err);
            }
            else{
                View.list(data);
            }
        })
    };

    static add(params){
        Todolist.add(params, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    };

    static delete(id){
        Todolist.delete(id, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    };

    static complete(id){
        Todolist.complete(id, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    };

    static uncomplete(id){
        Todolist.uncomplete(id, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    };

    static update(params){
        Todolist.update(params, (err, data)=>{
            if(err){
                View.error(err);
            }
            else{
                View.message(data);
            }
        })
    };

    static message(){
        View.message("Insert The Right Command Please.");
    };
};

module.exports = TodoController;