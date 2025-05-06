import React from 'react'
import loginIcon from '../assets/login-icon.png'
import passIcon from '../assets/pass-icon.png'

const Login = () => {
  return (
    <>
      <div className='flex h-screen flex-col  justify-center items-center bg-[url(./assets/backgound-login.jpg)] bg-cover '>
        <div className='flex w-xl h-3/6 flex-col items-center justify-center bg-none sm:bg-[#cecdcd79] sm:shadow-2xl rounded-3xl '>
            <h3 className='text-center pb-8 text-2xl sm:text-3xl'>Login Account</h3>
            <div className='flex flex-col h-2/6 justify-between'>
    
            <div className='flex justify-center'>
                <img src={loginIcon} className='w-1/12 sm:shadow-2xl mr-1 ' />
                <input className='bg-gray-100 pl-2 text-xl sm:text-2xl rounded-2xl sm:shadow-2xl ml-1' type="text" placeholder='email or phone' />
            </div>
            <div className='flex justify-center'>
            <img src={passIcon} className='w-1/12 sm:shadow-2xl mr-1' />
                <input className='bg-gray-100 pl-2 text-xl sm:text-2xl rounded-2xl sm:shadow-2xl ml-1' type="password" placeholder='Password' />
            </div>

            </div>
            <a href="/">Forgot Password!</a>

            <button className='py-2 px-4 mt-7 bg-[#585656] text-[#fff] rounded-3xl sm:shadow-2xl'>Login</button>
            
        </div>
      </div>
    </>
  )
}

export default Login
