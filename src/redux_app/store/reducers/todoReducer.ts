import { TodosState,TodoActions,TodoActionsType } from './../../types/todo';
const initialState:TodosState={
    todos:[],
    loading:false,
    error:null,
    limit:10,
    page:1

}
export const todoReducer=(state=initialState,action:TodoActions):TodosState=>{
switch(action.type){
    case TodoActionsType.FETCH_TODOS_REQUEST:
        return{
      ...state,
      loading:true
        }
        case TodoActionsType.FETCH_TODOS_SUCCESS:
            return{
            ...state,
            loading:false,
            todos:action.payload,
            }
            case TodoActionsType.FETCH_TODOS_FAIL:
                return{
                    ...state,
                    loading:false,
                    error:action.payload,
                   
                }
            case TodoActionsType.SET_TODO_PAGE:
                return{
                    ...state,
                    page:action.payload
                }
default:
    return state
}
}