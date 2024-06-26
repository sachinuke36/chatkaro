import React,{ useState, useContext, createContext} from 'react';

export const AuthContext = createContext();

export const useAuthContext = ()=> useContext(AuthContext);


export const AuthContextProvider = ({children})=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);
    const url = "https://chatkaro-3.onrender.com/"
    return <AuthContext.Provider value={{authUser,setAuthUser, url}}>
            {children}
    </AuthContext.Provider>
}



export default AuthContext
