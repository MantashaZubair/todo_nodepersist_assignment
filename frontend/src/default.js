



import React, { useEffect, useState } from 'react'
import ToDoItem from './component/ToDoItem'
import axios from 'axios';

const ToDoForm = () => {
    const [state ,setState] = useState("")
    const[itemList , setItemlist]=useState([])

       const addTodo = async()=>{
       try {
        await axios.post('http://localhost:8000/todo',{
          state:state
        })
       } catch (error) {
        console.error(error.message)
       }
       }

       const getallTodos = async()=>{
        try {
          await axios 
          .get('http://localhost:8000/todo')
          .then((response)=>{
            setItemlist(response.data)
            console.log(response)
          })
        } catch (error) {
          console.error(error.message)
        }
       }

       const onsubmitHandler =(e)=>{
        e.preventDefault();
        if(!state) return;
        addTodo()
        setState('')
       }

    useEffect(()=>{
      getallTodos();
    }, [itemList])

  return (
    <>
        <form onSubmit={onsubmitHandler}>
            <div className='inputbox'>
            <input placeholder='Enter to do'  value={state} onChange={(e)=>setState(e.target.value)}/>
            <button type='submit'>Add Task</button>
            </div>
            <ol >
                {itemList.map((item, index)=>{
                    return <ToDoItem text={item.state} id={index} key={index} />
                })}
            </ol>
            </form>
    </>
  )
}

export default ToDoForm


//.then((response)=>{response.json()})
.then((result)=>setItemlist(result))





/*----------------for my reference ---------------*/

// import React, { useEffect, useState } from 'react'
// import ToDoItem from './ToDoItem'

// const ToDoForm = () => {
//     const [todo ,setTodo] = useState("")
//     const[itemList , setItemlist]=useState([])
//     const onsubmitHandler =async (e)=>{
//       e.preventDefault()
//         if (!todo) {
//             return alert("please enter your todo");
//         }
     
//       try{
        
//           await fetch("http://localhost:8000/todo",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({
//               todo:todo
//             })
        
//           }).then((response)=>{
//             alert("sucessfull insert")
//             console.log(response)
            
//             setItemlist((itemList)=>[
//               ...itemList,
//               {todo:todo}
//               ]);
//               setTodo("")  
//            })
          
//       }catch(err){
//   console.log(err.message)
//       }
//     }

//     useEffect(()=>{
//       fetch("http://localhost:8000/todo")
//       .then((response)=>{response.json()})
//       .catch((error)=>{
//         console.error({mess:error})
//       })
//       //  .then((result)=>setItemlist(result))
//       //  .catch((error)=>{
//       //   console.error({mess:error})
//       // })
//     },[])

//   return (
//     <>
//         <form onSubmit={onsubmitHandler}>
//             <div className='inputbox'>
//             <input placeholder='Enter to do'  value={todo} onChange={(e)=>setTodo(e.target.value)}/>
//             <button type='submit'>Add Task</button>
//             </div>
//             <ol >
//                 {itemList.map((item, index)=>{
//                     return <ToDoItem text={item.todo}  key={index} />
//                 })}
//             </ol>
//             </form>
//     </>
//   )
// }
// export default ToDoForm











// import React, { useEffect, useState } from 'react'
// import ToDoItem from './ToDoItem'

// const ToDoForm = () => {
//     const [todo ,setTodo] = useState("")
//     const[itemList , setItemlist]=useState([])
//     const onsubmitHandler =async (e)=>{
//       e.preventDefault()
//         if (!todo) {
//             return alert("please enter your todo");
//         }
     
//       try{
        
//           await fetch("http://localhost:8000/todo",{
//             method:"POST",
//             headers:{"Content-Type":"application/json"},
//             body:JSON.stringify({
//               todo:todo
//             })
        
//           }).then((response)=>{
//             alert("sucessfull insert")
//             console.log(response)
            
//             // setItemlist((itemList)=>[
//             //   ...itemList,
//             //   {todo:todo}
//             //   ]);
//               // setTodo("")  
//            })
          
//       }catch(err){
//   console.log(err.message)
//       }
//     }

//     useEffect(()=>{
//       fetch("http://localhost:8000/todo",{
//           method: "GET"
//       })
//       .then((response)=>{response.json()})
//       .then((result)=> { setItemlist((itemList)=>[
//         ...itemList,
//         {todo:result}
//         ])
//         setTodo("")  
//       })
//        .catch((error)=>{
//         console.error({mess:error})
//       })
//       .catch((error)=>{
//         console.error({mess:error})
//       })
//       //  .then((result)=>setItemlist(result))
//       //  .catch((error)=>{
//       //   console.error({mess:error})
//       // })
//     },[])

//   return (
//     <>
//         <form onSubmit={onsubmitHandler}>
//             <div className='inputbox'>
//             <input placeholder='Enter to do'  value={todo} onChange={(e)=>setTodo(e.target.value)}/>
//             <button type='submit'>Add Task</button>
//             </div>
//             <ol >
//                 {itemList.map((item, index)=>{
//                     return <ToDoItem text={item.todo}  key={index} />
//                 })}
//             </ol>
//             </form>
//     </>
//   )
// }
// export default ToDoForm



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
//    const itemList = await storage.getItem("todolist");
//     // res.status(200).json(await storage.values(itemList))
//     res.status(200).json({ result: itemList });
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
