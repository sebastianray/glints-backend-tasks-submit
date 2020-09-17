const Todolist = require('../model/todoList');
const View = require('../view/View');

class TodoController{
    static help(){
        View.help();
    }
    static list(){
        const list = Todolist.list();
        View.list(list);
    }
    static add(params){
        const result = Todolist.add(params);
        View.message(result);
    }
    static delete(id){
        const result = Todolist.delete(id);
        View.message(result);
    }
    static complete(id){
        const result = Todolist.complete(id);
        View.message(result);
    }
    static uncomplete(id){
        const result = Todolist.uncomplete(id);
        View.message(result);
    }
    static update(params){
        const result = Todolist.update(params);
        View.message(result);
    }
    static message(){
        View.message("Insert The Right Command Please.");
    }
}

module.exports = TodoController;