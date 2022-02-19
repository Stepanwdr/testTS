import React ,{ FC, useState } from "react";
import styled from "styled-components";
import ToDoForm from "./components/ToDoForm";
import Navbar from "./components/Navbar";
import ToDoList from "./ToDolist";
import { Itodo } from "./interfaces";
const App:FC=()=>{
    const [todos,setToDos]=useState<Itodo[]>([])
    const handleAdd=(title:string)=>{
    const newTodo:Itodo={
        title:title,
        id:Date.now(),
        completed:false
    }
    setToDos((prev)=>([...prev,newTodo]))
    }
    const handleToggle=(id:number)=>{
          setToDos(prev=>prev.map((todo)=>{
          if(todo.id===id){
            todo.completed=true
            }
   return todo
}
    ))
    }
    const hadleDelete=(id:number)=>{
        console.log(id)
     setToDos(prev=>prev.filter((todo)=>todo.id !== id))
    }
    return (
<>
<Navbar/>
<Container>
<ToDoForm onAdd={handleAdd}/>
<ToDoList todos={todos} onToggle={handleToggle} onDelete={hadleDelete}/>
</Container>
</>
)
}

const Container=styled.div`
width:80%;
margin: 0 auto;
`
export default App;