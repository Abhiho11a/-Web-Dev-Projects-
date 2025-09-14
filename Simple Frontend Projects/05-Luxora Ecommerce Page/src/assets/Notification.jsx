import React from 'react'

const Notification = ({msg}) => {

  return (
    <div className='fixed z-10 top-26 right-15 bg-gray-200 px-3 py-1 rounded-md text-lg'>
        <h2 className='border-l-4 ml-[-10px] rounded-l-sm border-l-green-500'>  <span className={`ml-2`}>{msg}</span></h2>
    </div>
  )
}

export default Notification