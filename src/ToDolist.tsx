import React,{FC} from "react"
import styled from "styled-components";
import { Itodo } from "./interfaces";
interface ToDoListProps{
    todos:Itodo[],
    onDelete(id:number):void,
    onToggle(id:number):void,
}

const ToDoList:FC<ToDoListProps>=({todos,onToggle,onDelete})=>{
const handleDelete=(ev:React.MouseEvent,id:number)=>{
    ev.stopPropagation()
    const isDelete=window.confirm("Did you like to delete?")
    if(isDelete){
        onDelete(id)
    }

}
const handleToggle=(id:number)=>{
 
    onToggle(id)
}
return(
    <ul>
        {todos.map(todo=>(
            <li key={todo.id}> 
                <label htmlFor="">
                <input type="checkbox" checked={todo.completed} onChange={()=>handleToggle(todo.id)}/>
                <Title completed={todo.completed}>{todo.title}</Title>
                <i className="delete icon" onClick={(ev)=>handleDelete(ev,todo.id)}>delete</i>
                </label>
            </li>
        ))}
    </ul>
)

}
const Title=styled.span<{completed:boolean}>`
text-decoration:${(props)=>props.completed ? "line-through" :"none" };
`
export default ToDoList;