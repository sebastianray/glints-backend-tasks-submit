const { Router } = require('express');
const router = Router();
const TodolistRoutes = require('./todolist')


router.get('/', (req, res) => {
    res.render('index.ejs')
});

router.use('/tasks', TodolistRoutes)

// router.get('/lecturers', (req, res) => {
//     res.send("Ini page Lecturers")
// })

module.exports = router;