import React,{useState,useContext} from 'react';
import {TodoListContext} from '../store_alternative/context_provider';



const AddTodo =()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {addTodo} = useContext(TodoListContext);
    const handleAddTodo =()=>{
        if(name && email){
            addTodo({
                name:name,
                email:email
            })
            setName('')
            setEmail('')
        }else{

         alert('Enter both Email and Name!!')

        }


    }

    return (
        <>
        <h1>Hello Me</h1>
        <input type="text" placeholder='enter name'
        onChange ={(e)=>setName(e.target.value)}
        ></input>
        <input type="text" placeholder='enter email'
        onChange ={(e)=>setEmail(e.target.value)}
        ></input>
        <button onClick={()=>{
            handleAddTodo()
        }}
        >Add Todo</button>
        </>
    )

}

export default AddTodo;