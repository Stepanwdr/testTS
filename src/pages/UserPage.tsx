import React,{useEffect,useState,FC} from 'react';
import { IUser } from '../Types';
import axios from "axios";
import List from '../components/List';
import UserList from '../components/UserList';
import { Navigate, useNavigate } from 'react-router-dom';

const UserPage:FC = () => {
    const [users,setUsers]=useState<IUser[]>([])
    const navigateTo= useNavigate()
    async function fetchUsers(){
        try{
        const response=await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
        console.log(response.data,"App2")
        setUsers(response.data)
        }catch(e){
    }
    }
    useEffect(()=>{
        fetchUsers()
    },[])
    const handleClick=(id:number)=>{
        navigateTo(`${id}`)
    }
    return (
        <List items={users}
        renderItem={(user:IUser)=><UserList user={user} key={user.id} onClick={()=>handleClick(user.id)}/>} 
        />
    );
};

export default UserPage;