import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser, url} = useAuthContext();
  const [conversations, setConversations] = useState([]);

  useEffect(()=>{
    const getConversations = async ()=>{
      setLoading(true);
      try {
        console.log(url)
        const res = await fetch(url+'api/users',{
          method:"GET",
          headers:{"Content-Type":"application/json"},
          credentials: 'include', // Ensures cookies are included in the request
        });
        const data = await res.json();
        setConversations(data.data)
        if(!data.success){
            throw new Error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }finally{
        setLoading(false);
      }
    }
    getConversations();
  },[])


  return {loading, conversations}
}

export default useGetConversations
