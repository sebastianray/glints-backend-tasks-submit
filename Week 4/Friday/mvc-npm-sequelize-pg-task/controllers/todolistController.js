const { tasks_table } = require('../models')

class TodolistController {
    static getTask(req, res){
        tasks_table.findAll()
        .then(result => {
        // console.log(result)
            // res.send(result)
            res.render('todolist.ejs', {tasks : result})
        })
        .catch(err => {
            console.log(err)
        })
    }

    static addFormTasks(req, res) {
        res.render('addTask.ejs');
    }

    static addTask(req,res){
        // res.send(req.body)
        const { task, status } = req.body;
        tasks_table.create({
            task,
            status,
        })
            .then(result => {
                // res.send(result)
                res.redirect('/tasks')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findById(req, res) {
        const id = req.params.id;
        tasks_table.findOne({
            where: { id }
        })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static deleteTask(req,res){
        const id = req.params.id;
        tasks_table.destroy({
            where: { id }
        })
            .then(() => {
                // res.send("Deleted")
                res.redirect('/tasks')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static updateTask(req,res){
        const id = req.params.id;
        const { task, status } = req.body;
        tasks_table.update({
            task,
            status
        }, {
            where: { id }
        })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = TodolistController;