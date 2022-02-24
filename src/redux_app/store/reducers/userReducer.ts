import { UserActions, UserActionsType, UsersState } from './../../types/user';

const initialState:UsersState={
    users:[],
    loading:false,
    error:null
}
export const userReducer=(state=initialState,action:UserActions):UsersState=>{
switch(action.type){
case UserActionsType.FETCH_USERS_REQUEST:
return{
    users:[],
    loading:true,
    error:null
}
case UserActionsType.FETCH_USERS_SUCCESS:
    return{
        users:action.payload,
       loading:false,
       error:null
    }
    case UserActionsType.FETCH_USERS_FAIL:
        return{
            users:[],
            loading:false,
            error:action.payload
        }
      
    default:
        return state
}
}