import React from 'react'
import SearchInput from './SearchInput'
import Messages from './Messages'
import Logout from './Logout'

const LeftBox = () => {
  return (
    <div className='box flex flex-col'>
        <SearchInput />
      <div className='divider px-3'></div>
      <Messages/>
      <div className='divider px-3'></div>
      <Logout />

    </div>
  )
}

export default LeftBox
