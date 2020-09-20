const { Router } = require('express');
const router = Router();
const TodolistController = require('../controllers/todolistController')

router.get('/', TodolistController.getTask);
router.get('/add', TodolistController.addFormTasks)
router.post('/add', TodolistController.addTask)
router.get('/delete/:id', TodolistController.deleteTask)
router.get('/edit/:id', TodolistController.updateTask)
router.get('/:id', TodolistController.findById);

module.exports = router;