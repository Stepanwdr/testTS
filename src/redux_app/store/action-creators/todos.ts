import { TodoActionsType } from './../../types/todo';
import { Dispatch } from 'redux';
import { TodoActions } from '../../types/todo';
import axios from 'axios';
export const fetchTodos=(page=1,limit=10)=>{
    return async(dispatch:Dispatch<TodoActions>)=>{
try{
dispatch({type:TodoActionsType.FETCH_TODOS_REQUEST})
const response=await axios.get("https://jsonplaceholder.typicode.com/todos",{
params:{
_page:page,
_limit:limit
}
})
dispatch({type:TodoActionsType.FETCH_TODOS_SUCCESS,payload:response.data})
}catch(e){
dispatch({type:TodoActionsType.FETCH_TODOS_FAIL,payload:"Request Fail"})
}
   
}
}
export function setTodoPage(page:number):TodoActions{
return{
   type:TodoActionsType.SET_TODO_PAGE,
   payload:page
}
}