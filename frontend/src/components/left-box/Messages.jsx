import React from 'react'
import Message from './Message'
import useGetConversations from '../../hooks/useGetConversations'
import { useSocketContext } from '../../context/SocketContext';

const Messages = () => {
  const {conversations} = useGetConversations();
  

  return (
    <div className='flex flex-col items-center overflow-y-scroll'>
      {
        conversations?.map((i,k)=> ( <Message key={k} conversation={i}  />))
      }
       
    </div>
  )
}

export default Messages
