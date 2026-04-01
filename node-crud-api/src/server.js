const app = require('./app');
const initDatabase = require('./db/init');

const PORT = 3000;

initDatabase();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
