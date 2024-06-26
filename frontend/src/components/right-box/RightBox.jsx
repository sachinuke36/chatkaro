import React from 'react'
import RightTop from './RightTop'
import RightMiddle from './RightMiddle'
import RightBottom from './RightBottom'

const RightBox = () => {
  return (
    <div className='flex box flex-col'>
      <RightTop />
      <RightMiddle />
      <RightBottom />
    </div>
  )
}

export default RightBox
