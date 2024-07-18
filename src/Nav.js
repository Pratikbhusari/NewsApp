import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
     <div className=' text-white bg-black p-4 text-xl flex  fixed w-full mr-[5rem] ml-[]'>
        <div className=' mr-[15rem] ml-[] '>
            <img src='https://newshub.bbc.co.uk/assets/images/bbc-newshub-logo.jpg' className='w-[6rem] h-[2rem]' alt='error'/>
        </div>
        <nav className=''>
            <ul className=' flex gap-5 justify-center  mr-[10rem]'>
                <NavLink to="/">
                <li>
                    Home
                </li>
                </NavLink>
                <NavLink to="/entertainment">
                <li>
                Entertainment
                </li>
                </NavLink>
                <NavLink to="/health">
                <li>
                    Health
                </li>
                </NavLink>
                <NavLink to="/sports">
                <li>
                    Sports
                </li>
                </NavLink>
                <NavLink to="/technology">
                <li>
                    Technology
                </li>
                </NavLink>
                

            </ul>
        </nav>
     </div>
    </div>
  )
}

export default Nav
