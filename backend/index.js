const express = require("express");
const app =express();
const cors = require("cors")
app.use(cors());
const storage = require("node-persist");
app.use(express.json());
const init = async () => { await storage.init({ dir: "./todolist" });
};
init();

 app.get('/todo' , async (req,res)=>{
   const itemList = await storage.getItem("todolist");
    // res.status(200).json(await storage.values(itemList))
    res.status(200).json({ result: itemList });
 })


 app.post("/todo", async (req, res) => { 
     const alltodo = await storage.getItem("todolist"); 
     const todo =  req.body;
     todo.id = alltodo.length + 1; 
    await storage.setItem("todolist", [...alltodo, todo]); 
    res.status(200).json({ success: true });
  
   });
   
   


app.listen(8000 ,()=>{
    console.log(`Server Listen at localhost on 8000 port`)
})




// const express = require("express");
// const app =express();
// const cors = require("cors")
// app.use(cors());
// const storage = require("node-persist");
// app.use(express.json());
// const init = async () => { await storage.init({ dir: "./todolist" });
// };
// init();

//  app.get('/todo' , async (req,res)=>{
//    const itemLists = await storage.getItem("todolist");
//       itemLists.forEach((itemList)=>{
//         return itemList.todo
//       })

//     // res.status(200).json(await storage.values(itemLists))
//     res.status(200).json({ result: itemLists });
//  })


//  app.post("/todo", async (req, res) => { 
//      const alltodo = await storage.getItem("todolist"); 
//      const todo =  req.body;
//      todo.id = alltodo.length + 1; 
//     await storage.setItem("todolist", [...alltodo, todo]); 
//     res.status(200).json({ success: true });
  
//    });
   
   


// app.listen(8000 ,()=>{
//     console.log(`Server Listen at localhost on 8000 port`)
// })
