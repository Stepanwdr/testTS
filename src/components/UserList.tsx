import React,{FC} from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { IUser } from '../Types';
interface UserListProps{
    user:IUser,
    key:number | string,
    onClick:(user:IUser)=>void
}
const UserList:FC<UserListProps> = ({user,onClick}) => {
    return (
     <UsersList>
    <User onClick={()=>onClick(user)}>
       {user.name} is Leave in {user.address.city}
    </User>
    </UsersList>
)
};

const UsersList=styled.ul`

`
const User=styled.li`

`
export default UserList;