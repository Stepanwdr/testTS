import React,{FC} from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { setTodoPage } from "../store/action-creators/todos"
import { useActions } from "./hooks/useActions"
import { useTypedSelector } from "./hooks/useTypedSelector"
interface PaginationType{
    page:boolean
}
const TodoList:FC=()=>{
    const {todos,loading,error,page,limit}=useTypedSelector(state=>state.todo)
    const {fetchTodos,setTodoPage}=useActions()
    const pages=[1,2,3,4,5]
    useEffect(()=>{
        fetchTodos(page,limit)
    },[page])

    if(loading){
return(
    <h1>Loading...</h1>
)
    }
if(error){
    return(
        <h1>{error}</h1>
    )
    }
    return (
        <div>
            {todos.map(todo=>
               (
                <ul key={todo.id}>
                <li>{todo.id}-{todo.title}</li>
            </ul>
               )
                )}
    <Pagination>
        {pages.map(p=>(
           <Page key={p} 
           onClick={()=>setTodoPage(p)}
            page={p===page}>
            {p}
           </Page>  
        )
        )}
    </Pagination>
        </div>
    )
}

const Pagination=styled.ul`
display:flex;
list-style-type:none;
`
const Page=styled.li<PaginationType>`
padding:0.5rem;
border:1px solid black;
margin-left:0.5rem;
cursor:pointer;
background-color:${(props)=>props.page ? "grey":"transparent"}
`
export default TodoList;