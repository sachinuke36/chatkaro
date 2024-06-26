import React from 'react'
import useConversation from '../../zustand/useConversation';

const RightTop = () => {
  const {selectedConversation} = useConversation();
  return (
    <div className=' min-w-[450px]'>
      <div className='bg-slate-500 px-4 py-2 '>
		<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>{selectedConversation?.fullName}</span>
	 </div>
    </div>
  )
}

export default RightTop
