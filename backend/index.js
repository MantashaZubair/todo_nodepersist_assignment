const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const storage = require("node-persist");
const init = async () => {
  await storage.init({ dir: "./todolist" });
};
init();

//------get api-----//
  app.get("/todo", async (req, res) => {
    const itemLists = await storage.getItem("todolist");
    res.status(200).json({ result: itemLists });
  });


//-----create api-----//
  app.post("/todo", async (req, res) => {
    const alltodo = await storage.getItem("todolist");
    const todo = req.body;
    todo.id = alltodo ? alltodo.length + 1 : 1;
    const newTodo = alltodo ? [...alltodo, todo] : [todo];
    await storage.setItem("todolist", newTodo);
    res.status(200).json({ success: true });
  });

//------delete api-----//
  app.delete("/todo", async (req, res) => {
    await storage.clear();
    res.status(200).json({ success: true });
  });

  //listen
  app.listen(8000, () => {
    console.log(`Server Listen at localhost on 8000 port`);
  });
