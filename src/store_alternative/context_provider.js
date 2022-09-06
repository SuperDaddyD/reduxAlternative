import React, { useReducer } from "react";
import { intialState, todontReducer } from "./reducer";
import Action from "./action.types";

export const TodoListContext = React.createContext();

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(todontReducer, intialState);
  
  
  const value = {
    login:state.login,
    logout:state.logout,
    todo:state.todo,
    addTodo:(todo)=>{
        console.log('This is the Todo =>', todo)
      dispatch({type:Action.ADD_TODO_ITEM,payload:todo})
    },
    removeTodo:(id)=>{
     dispatch({type:Action.REMOVE_TODO,payload:id})
    },
    changeLogout:()=>{
      dispatch({type:Action.LOGOUT})
    }
  };
  return <TodoListContext.Provider value={value}>{children}</TodoListContext.Provider>;
};
