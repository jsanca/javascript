const express = require('express');
const taskController = require('../controllers/taskController');

const router = express.Router();

router.get('/', taskController.getAllTasks);
router.get('/:id'  , taskController.getTask);
router.put('/:id'  , taskController.updateTask);
router.delete('/:id'  , taskController.deleteTask);
router.post('/', taskController.createTask);

module.exports = router;
