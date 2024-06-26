import React from 'react'
import Home from './pages/home/Home'
import {Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/login/Login'
import './index.css'
import Signup from './pages/signup/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'
const App = () => {
  const {authUser} = useAuthContext();
  return (
    <div>
      <Routes>
        <Route path='/' element={!authUser ? <Navigate to='/login'/> : <Home />} />
        <Route path='/login' element={authUser ? <Navigate to='/'/>:<Login /> } />
        <Route path='/signup' element={authUser ? <Navigate to='/'/>:<Signup />} />
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
