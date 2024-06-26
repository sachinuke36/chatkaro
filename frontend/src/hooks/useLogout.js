import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useLogout = () => { 
    const [loading, setLoading] = useState(false);
    const {url} = useAuthContext();

    const logout = async ()=>{
        try {
            setLoading(true);
           const res = await fetch(url+'api/auth/logout',{
                method:"POST",
                headers:{"Content-Type":"application/json"},
            })
            const data = await res.json();
            console.log(data);

            localStorage.removeItem("chat-user");
            setAuthUser(null);

        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

  return {logout, loading}
}

export default useLogout
