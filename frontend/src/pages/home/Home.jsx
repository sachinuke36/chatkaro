import React from 'react'
import LeftBox from '../../components/left-box/LeftBox'
import RightBox from '../../components/right-box/RightBox'

const Home = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        <div className='flex h-[65vh]'>
            <LeftBox />
            <RightBox />
        </div>
    </div>
  )
}

export default Home
