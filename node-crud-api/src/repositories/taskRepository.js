const db = require('../db/database');

function findAllTasks() {
  const statement = db.prepare(`
    SELECT id, title, description, done, created_at
    FROM tasks
    ORDER BY id DESC
  `);

  return statement.all();
}

function findTaskById(id) {
  const statement = db.prepare(`
    SELECT id, title, description, done, created_at
    FROM tasks WHERE id = ?
  `);

  return statement.get(id);
}

function createTask(title, description) {
  const statement = db.prepare(`
    INSERT INTO tasks (title, description, done, created_at)
    VALUES (?, ?, 0, CURRENT_TIMESTAMP)
  `);

  const result = statement.run(title, description);
  return result.lastInsertRowid;
}

function updateTask(id, title, description, done) {
  const statement = db.prepare(`
    UPDATE tasks
    SET title = ?, description = ?, done = ?
    WHERE id = ?
  `);

  const result = statement.run(title, description, done ? 1 : 0, id);
  return result.changes;
}

function deleteTask(id) {
  const statement = db.prepare(`
    DELETE FROM tasks
    WHERE id = ?
  `);

  const result = statement.run(id);
  return result.changes;
}


module.exports = {
  findAllTasks, createTask, findTaskById, updateTask, deleteTask
};
