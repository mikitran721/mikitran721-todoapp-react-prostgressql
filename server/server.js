const PORT = process.env.PORT ?? 8800;
const express = require("express");
const pool = require("./db");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

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

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
