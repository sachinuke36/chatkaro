import React, { useState } from 'react'
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation';
import { useAuthContext } from '../context/AuthContext';

const useSendMessages = () => {
    const [loading, setLoading] = useState(false);
    const {url} = useAuthContext();
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async(message)=>{
      if(!message) return;
      setLoading(true);
      
      try {
       const res = await fetch(url+'api/messages/send/'+selectedConversation._id,{
        method:"POST",
        headers:{"Content-Type":"application/json",},
        body: JSON.stringify({message}),
        credentials:'include'
      })
      const data = await res.json();

      if(!data.success){
        throw new Error(data.message)
      }
      setMessages([...messages, data.message]);

      } catch (error) {
        toast.error(error.message);
      }finally{
        setLoading(false)
      }
    }
    
  return {loading, sendMessage}
}

export default useSendMessages
