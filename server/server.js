const PORT = process.env.PORT ?? 8800;
const express = require("express");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const pool = require("./db");
const cors = require("cors");

const app = express();

app.use(cors()); //client moi send request duoc
app.use(express.json()); //su dung du lieu json gui tu client

//get all todos
app.get("/todos/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  try {
    const todos = await pool.query("SELECT * FROM todos where user_email=$1", [
      userEmail,
    ]);
    res.json(todos.rows);
  } catch (error) {
    console.error(error);
  }
});

// create a new Todo
app.post("/todos", async (req, res) => {
  const { user_email, title, progress, date } = req.body;

  const id = uuidv4();
  try {
    const newTodo = await pool.query(
      `INSERT INTO todos(id,user_email,title,progress,date) VALUES($1,$2,$3,$4,$5)`,
      [id, user_email, title, progress, date]
    );
    res.json(newTodo);
  } catch (error) {
    console.error(error);
  }
});

// edit a todo
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { user_email, title, progress, date } = req.body;
  try {
    const editTodo = await pool.query(
      `UPDATE todos SET user_email = $1, title = $2, progress = $3, date = $4 WHERE id = $5`,
      [user_email, title, progress, date, id]
    );
    res.json(editTodo);
  } catch (error) {
    console.error(error);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await pool.query(`DELETE FROM todos WHERE id=$1`, [id]);
    res.json(deletedTodo);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
