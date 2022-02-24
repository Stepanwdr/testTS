export enum TodoActionsType{
    FETCH_TODOS_REQUEST="FETCH_TODOS_REQUEST",
    FETCH_TODOS_SUCCESS="FETCH_TODOS_SUCCESS",
    FETCH_TODOS_FAIL="FETCH_TODOS_FAIL",
    SET_TODO_PAGE="SET_TODO_PAGE"
    }
    export interface TodosState{
        todos:any[],
        loading:boolean,
        error:null | string,
        limit:number,
        page:number
    }
    
    interface FetchTodosRequestAction{
        type:TodoActionsType.FETCH_TODOS_REQUEST,
    }
    interface FetchTodoSuccesAction{
        type:TodoActionsType.FETCH_TODOS_SUCCESS,
        payload:[]
    }
    interface FetchTodosFailAction{
        type:TodoActionsType.FETCH_TODOS_FAIL,
        payload:string
    }
    interface SetTodoPage{
        type:TodoActionsType.SET_TODO_PAGE,
        payload:number
    }
    export type TodoActions=  FetchTodosRequestAction | 
                              FetchTodoSuccesAction |
                              FetchTodosFailAction |
                              SetTodoPage