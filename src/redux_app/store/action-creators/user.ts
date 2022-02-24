import { UserActions, UserActionsType } from '../../types/user';

import { Dispatch } from 'redux';
import axios from 'axios';
export const fetchUsers=()=>{
return async (dispatch:Dispatch<UserActions>)=>{
try{
    dispatch({type:UserActionsType.FETCH_USERS_REQUEST})
    const response=await axios.get("https://jsonplaceholder.typicode.com/users")
    dispatch({type:UserActionsType.FETCH_USERS_SUCCESS,payload:response.data})
}
catch(e){
    dispatch({type:UserActionsType.FETCH_USERS_FAIL,payload:"Request Fail"})
}
}
}