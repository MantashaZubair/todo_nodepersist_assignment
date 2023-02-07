import React from 'react'
const ToDoItem = (props) => {

   

   return (
    <>
    <div className='liststyle'>
   <li>{props.text}</li>
   </div>
   </>
  
  )
}

export default ToDoItem