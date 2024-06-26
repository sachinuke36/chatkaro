import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

const Logout = () => {
  const {logout} = useLogout();
  return (
    <div className='p-2'>
     <BiLogOut onClick={logout} className='w-6 h-6 text-white cursor-pointer' />
    </div>
  )
}

export default Logout
