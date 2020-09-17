class View {
    static list(data){
        // console.log(data);
        data.forEach(el => {
            console.log(`${el.id}. ${el.tag} ${el.task}`);
        });
    };
    static message(data){
        console.log(data);
    };
    static help(){
        const commandList = `       
        node todo.js
        node todo.js help
        node todo.js list  
        node todo.js add <task>
        node todo.js update <id> <task>
        node todo.js delete <id>
        node todo.js complete <id>
        node todo.js uncomplete <id>
        `
        console.log(commandList);
    }
};

module.exports = View;