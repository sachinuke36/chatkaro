import React, { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import { useAuthContext } from '../../context/AuthContext';
import useListenMessages from '../../hooks/useListenMessages';

const RightMiddle = () => {
  useListenMessages();
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  const {authUser} = useAuthContext();

  useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
  

  if (loading) {
    return <div className="h-[52vh] bg-slate-500 flex items-center justify-center">Loading...</div>;
  }

  if (!messages || messages.length === 0) {
    return <div className="h-[52vh] bg-slate-500 flex items-center justify-center">No messages found</div>;
  }

  return (
    <div className="h-[52vh] bg-slate-500 flex flex-col overflow-scroll">
      {messages.map((i, k) => (
        <div key={i._id} ref={lastMessageRef} className={`chat ${authUser._id === i?.senderId ? "chat-end":"chat-start"}`}>
          <div className={`chat-bubble chat-bubble-primary ${authUser._id === i?.senderId ? "":"bg-gray-400"}`}>{i?.message}</div>
        </div>
      ))}

{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
    </div>
  );
};

export default RightMiddle;
