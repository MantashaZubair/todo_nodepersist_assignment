



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