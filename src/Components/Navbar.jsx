import React from 'react'
import logo from '../assets/login-icon.png'

const Navbar = () => {
  return (
    <>
     <div className='flex justify-between bg-[#b6b5b579] items-center h-18 shadow-2xl w-full absolute'>
            <img src={logo} className='w-12 ml-9' />
            <button className='py-2.5 px-3.5 bg-[#585656] text-[#fff] rounded-3xl sm:shadow-2xl mr-9'>SignUp</button>
    </div> 
    </>
  )
}

export default Navbar
