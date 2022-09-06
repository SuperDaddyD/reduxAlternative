import React,{useState,useContext,useRef} from 'react';
import {TodoListContext} from '../store_alternative/context_provider';



const AddTodo =()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const {addTodo,login,changeLogout,logout} = useContext(TodoListContext);

    
    const handleAddTodo =(e)=>{
        if(email !== '' && name !==''){
            console.log('HEY LOGIN DID YOU CHANGE? -->',e.target.textContent)
            addTodo({
                name:name,
                email:email
            })
            setName('')
            setEmail('');
            
        }else{
            
            alert('Enter both Email and Name!!')
            
        }
    }
    
    const handleLogout =()=>{
        
        console.log('HERE IS LOGIN',logout +'  ' +changeLogout())
   }


    return (
        <>
        {logout ? <h1>Please Login</h1>:<h1>Hello {name}</h1>}
        <input  type="text" placeholder='enter name' value={name}
        onChange ={(e)=>setName(e.target.value)}
        ></input>
        <input type="text" placeholder='enter email' value={email}
        onChange ={(e)=>setEmail(e.target.value)}
        ></input>
        <button onClick={(e)=>{
            handleAddTodo(e)
        }}
        >Add Todo</button>
        <button onClick={handleLogout}
        >Logout</button>
        </>
    )

}

export default AddTodo;