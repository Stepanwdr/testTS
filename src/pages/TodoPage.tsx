import React,{useState,useEffect} from 'react';
import { ITodo } from '../Types';
import axios from 'axios';
import List from '../components/List';
import TodoList from '../components/TodoList';
const TodoPage = () => {
    const [todos,setTodos]=useState<ITodo[]>([])
    async function fetchTodos(){
        try{
        const response=await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos/?_limit=10")
        console.log(response.data,"Todos")
        setTodos(response.data)
        }catch(e){
    }
    }
    useEffect(()=>{
        fetchTodos()
    },[])
    return (
        <List items={todos}
        renderItem={(todo:ITodo)=><TodoList todo={todo} key={todo.id}/>} 
        />
    );
};

export default TodoPage; 