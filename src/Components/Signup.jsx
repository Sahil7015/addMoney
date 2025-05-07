import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import loginIcon from '../assets/login-icon.png';
import passIcon from '../assets/pass-icon.png';

const Signup = () => {
  const [method, setMethod] = useState("email");
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (method === "email") {
      console.log("Signing up with email:", value);
    } else {
      console.log("Signing up with phone:", value);
    }
    console.log("Password:", password);
    // Add API call here
  };

  return (
    <div>
      <Navbar />
      <div className='flex h-screen flex-col justify-center items-center bg-[url(./assets/backgound-login.jpg)] bg-cover'>
        <div className='w-full max-w-lg h-auto px-6 py-8 flex flex-col items-center justify-center bg-none sm:bg-[#cecdcd79] sm:shadow-2xl rounded-3xl'>
          <h3 className='text-center pb-6 text-2xl sm:text-3xl'>Signup</h3>
          <form onSubmit={handleSubmit} className='w-full flex flex-col space-y-4'>

            <div className='flex space-x-4 justify-center'>
              <button
                type="button"
                className={`px-4 py-2 rounded ${method === "email" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setMethod("email")}
              >
                Email
              </button>
              <button
                type="button"
                className={`px-4 py-2 rounded ${method === "phone" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                onClick={() => setMethod("phone")}
              >
                Phone
              </button>
            </div>

            <div className='flex items-center'>
              <img src={loginIcon} className='w-6 h-6 sm:shadow-2xl mr-2' />
              <input
                className='flex-1 bg-gray-100 pl-2 text-xl sm:text-2xl rounded-2xl sm:shadow-2xl placeholder-gray-500 placeholder:text-sm '
                type={method === "email" ? "email" : "tel"}
                placeholder={method === "email" ? "Enter your email" : "Enter your phone number"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
            </div>

            <div className='flex items-center'>
              <img src={passIcon} className='w-6 h-6 sm:shadow-2xl mr-2' />
              <input
                className='flex-1 bg-gray-100 pl-2 text-xl sm:text-2xl rounded-2xl sm:shadow-2xl placeholder-gray-500 placeholder:text-sm'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <Link to={'/'} className='text-blue-500 text-center'>Already have Account? Login</Link>
            <button type="submit" className='py-2 px-4 bg-[#585656] text-[#fff] rounded-3xl sm:shadow-2xl'>Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
