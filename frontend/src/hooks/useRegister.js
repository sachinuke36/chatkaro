import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useRegister = () => {
    const [loading, setLoading] = useState(false);
    const {url, setAuthUser} = useAuthContext();

    const register = async({username, password, confirmPass, fullName, gender})=>{
            const success = handleInputErrors(username, password, confirmPass, fullName, gender);
            if(!success){return};

            try {
                setLoading(true);
                const res = await fetch(url+'api/auth/register',{
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify({username, password, confirmPass, fullName, gender}),
                    credentials:"include"
                })
                const data = await res.json();
                if(!data.success){
                    throw new Error(data.message);
                }
                localStorage.setItem("chat-user",JSON.stringify(data));
                setAuthUser(data);

            } catch (error) {
                toast.error(error.message);
            }finally{
                setLoading(false);
            }
    }



  return {register,loading}

}

export default useRegister

const handleInputErrors = (username, password, confirmPass, fullName, gender)=>{
    if(!username || !password || !confirmPass || !fullName || !gender){
        toast.error("Please fill all the input fields");
        return false;
    }
    if(password !== confirmPass){
        toast.error("password doesn't match");
        return false;
    }
    if(password.length < 6){
        toast.error("Password should be atleast 6 character")
        return false
    }
    return true
    
}
