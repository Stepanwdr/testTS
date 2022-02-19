import axios from 'axios';
import React,{FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from '../Types';

const UserItemPage:FC = () => {
    const [user,setUser]=useState<IUser | null>(null)
    const params=useParams()
    async function fetchUser(){
        try{
        const response=await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
        console.log(response.data,"App2")
        setUser(response.data)
        }catch(e){
    }
    }
    useEffect(()=>{
        fetchUser()
    },[])
    return (
       
        <div>
            {user?.name}
        </div>
    );
    return (
        <div>
            
        </div>
    );
};

export default UserItemPage;