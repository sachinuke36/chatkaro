import React, { createContext, useContext, useState } from 'react'
const userContext = createContext();


export const useUserContext =() => useContext(userContext);

export const userContextProvider = ({children}) => {

    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);

    const values = {
        setSelectedChat,
        selectedChat,
        messages,
        setMessages
    }

  return <userContext.Provider value={values}>
        {children}
  </userContext.Provider>
}

export default userContext
