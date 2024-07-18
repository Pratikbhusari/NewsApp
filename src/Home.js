import React from 'react'
import FetchData from './FetchData'

function Home() {
  return (
    <div className=''>
      <div className=' bg-black py-20 text-red-700 w-full h-[20rem]'>
        <div className=''>

        <h1 className='  text-center text-4xl font-bold mt-[6rem]'> NEWS HUB</h1>
        <p className=' text-white'>A website Bulid with News API</p>
        </div>

      </div>
      <FetchData/>
    </div>
  )
}

export default Home
