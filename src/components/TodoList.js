import React, { useContext } from "react";
import { TodoListContext } from "../store_alternative/context_provider";

const TodoList = () => {
  const { login, logout, todo, removeTodo, } = useContext(TodoListContext);

  const handleRemove =(e)=>{
    console.log('Value-->', e.target.textContent)
    removeTodo(e.target.textContent)
    
  }
  return (
    <>
   {!logout ? <h1>Todo</h1> : <h1>Please Login</h1>}
      <ul>
      {todo.map((item)=>( 
        <p key={item.name} onClick={(e)=>handleRemove(e)}>{item.name}</p>
      )
      )
    }
    </ul>
    </>
  );
};

export default TodoList;
