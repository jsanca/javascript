const taskRepository = require('../repositories/taskRepository');

function getAllTasks(req, res) {
  const tasks = taskRepository.findAllTasks();

  const response = tasks.map((task) => ({
    ...task,
    done: Boolean(task.done),
  }));

  res.json(response);
}

function getTask(req, res) {

  const task = taskRepository.findTaskById(req.params.id);

  if (!task) {
    return res.status(404).json({
      error: 'Task not found',
    });
  }

  const response = {
    ...task,
    done: Boolean(task.done),
  };

  res.json(response);
}

function createTask(req, res) {
  const { title, description } = req.body;

  if (!title || title.trim() === '') {
    return res.status(400).json({
      error: 'title is required',
    });
  }

  const taskId = taskRepository.createTask(title.trim(), description ?? null);

  res.status(201).json({
    id: taskId,
    message: 'Task created successfully',
  });
}

function updateTask(req, res) {
  const { title, description, done } = req.body;
  const id  = req.params.id;  

  if (!id || id.trim() === '') {
    return res.status(400).json({
      error: 'id is required',
    });
  }
  
  if (!title || title.trim() === '') {
    return res.status(400).json({
      error: 'title is required',
    });
  }

  if (!description || description.trim() === '') {
    return res.status(400).json({
      error: 'description is required',
    });
  }

  const numUpdated = taskRepository.updateTask(id, title.trim(), description ?? null, done ?? false);

  if (numUpdated <= 0) {
    return res.status(404).json({
      error: 'Task not found',
    });
  }

  res.status(200).json({
    id: id,
    message: 'Task updated successfully',
  });
}

function deleteTask(req, res) {
  const id  = req.params.id;  

  if (!id || id.trim() === '') {
    return res.status(400).json({
      error: 'id is required',
    });
  }

  const numDeleted = taskRepository.deleteTask(id);
  if (numDeleted <= 0) {
    return res.status(404).json({
      error: 'Task not found',
    });
  }

  res.status(200).json({
    id: id,
    message: 'Task deleted successfully',
  });
}

module.exports = {
  getAllTasks, createTask, getTask, updateTask, deleteTask
};
