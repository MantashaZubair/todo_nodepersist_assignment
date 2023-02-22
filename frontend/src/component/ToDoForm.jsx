import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
const ToDoForm = () => {
const [todo, setTodo] = useState("");
const [itemList, setItemlist] = useState([]);
const onsubmitHandler = async (e) => {
e.preventDefault();
if (!todo) {
return alert("please enter your todo");
}
try {
await fetch("http://localhost:8000/todo", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify({
todo: todo,
}),
}).then((response) => {
console.log(response);
setTodo("");
getTodos();
});
} catch (err) {
console.log(err.message);
}
};
///------------get todos----------
const getTodos = async () => {
fetch("http://localhost:8000/todo", {
method: "GET",
})
.then((response) => response.json())
.then((result) => {
var item = Object.keys(result).length ? result.result : [];
setItemlist(item);
})
.catch((error) => {
console.error({ mess: error });
});
};
useEffect(() => {
getTodos();
//--------use clearFunction for delete todos----//
return () => {
fetch("http://localhost:8000/todo", {
method: "DELETE",
})
.then((response) => response.json())
.then((result) => {
getTodos("");
})
.catch((error) => {
console.error({ mess: error });
});
};
}, []);
return (
<>
<form onSubmit={onsubmitHandler}>
<div className="inputbox">
<input
placeholder="Enter to do"
value={todo}
onChange={(e) => setTodo(e.target.value)}
/>
<button type="submit">Add Task</button>
</div>
<ol>
{itemList.map((item, index) => {
return <ToDoItem text={item.todo} key={index} />;
})}
</ol>
</form>
</>
);
};
export default ToDoForm;





