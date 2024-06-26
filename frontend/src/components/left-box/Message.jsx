import React, { useEffect } from 'react'
import { useUserContext } from '../../context/userContext'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Message = ({conversation}) => {
  // const {setSelectedChat, selectedChat} = useUserContext();
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);


  return (
    <div className={`flex w-full gap-5 px-4 py-2 items-center my-1 hover:bg-blue-600 ${isSelected ? "bg-blue-600":""}`} onClick={()=>setSelectedConversation(conversation)}>
      <div className={`avatar ${isOnline ? 'online':''} `}>
      <div className="avatar w-10">
        <img src={`https://avatar.iran.liara.run/public/${conversation.gender==="male"?"boy":"girl"}?username=${conversation.fullName}`} alt="" />
      </div>
      </div>
     
      <div>{conversation.fullName}</div>
    </div>
  )
}

export default Message
