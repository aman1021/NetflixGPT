import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-16'>
        <h2 className='text-5xl font-bold'>{title}</h2>
        <p className='py-6 text-lg  w-1/2'>{overview}</p>
        <div className='flex gap-2'>
            <button className='bg-white p-2 px-8 border border-gray-400 rounded-md font-medium text-lg hover:bg-gray-200'>▶️ Play</button>
            <button className='bg-gray-500 p-2 px-10  rounded-md font-medium text-lg text-white hover:bg-gray-200 hover:text-black'>More info</button> 
        </div>
    </div>
  )
}

export default VideoTitle