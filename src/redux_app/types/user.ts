export enum UserActionsType{
    FETCH_USERS_REQUEST="FETCH_USERS_REQUEST",
    FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS",
    FETCH_USERS_FAIL="FETCH_USERS_FAIL"
    }
    export interface UsersState{
        users:any[],
        loading:boolean,
        error:null | string
    }
    
    interface FetchUsersRequestAction{
        type:UserActionsType.FETCH_USERS_REQUEST,
    }
    interface FetchUsersSuccesAction{
        type:UserActionsType.FETCH_USERS_SUCCESS,
        payload:any[]
    }
    interface FetchUsersFailAction{
        type:UserActionsType.FETCH_USERS_FAIL,
        payload:string
    }
    export type UserActions= FetchUsersRequestAction | FetchUsersSuccesAction |FetchUsersFailAction