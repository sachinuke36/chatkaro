import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import {toast} from 'react-hot-toast'

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser, url} = useAuthContext();

    const login = async(username, password)=>{
        const success = handleInputErrors(username, password);
            if(!success){ return;}
            setLoading(true);
        try {
            const res = await fetch(url+'api/auth/login',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({username, password}),
                credentials:"include"
            })

            const data = await res.json();
            console.log("data",data);

            if(!data.success){
                throw new Error(data.message);
            }

            console.log(data);
            localStorage.setItem('chat-user',JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }



  return {login, loading}
}

export default useLogin


const handleInputErrors=(username, password)=>{
    if(!username || !password){
        toast.error("Please fill all the fields");
        return false;
    }
    return true;
}