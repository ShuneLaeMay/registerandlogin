import React, { useState } from 'react'

import {RiLoginBoxFill} from 'react-icons/ri'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../redux/api/authApi'

const Login = () => {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [login] = useLoginMutation()
 const nav = useNavigate()
 const loginHandler = async(e) => {
  try {
    e.preventDefault()
  const user = {email,password}
  const {data} = await login(user)
  console.log(data)
  if(data?.success) nav('/')
  } catch (error) {
    console.log(error)
  }
 }
    
  return (
    <div className=''>
     
      <div className='p-6 items-center bg-gray-500 shadow-lg h-screen'>
      <form className='w-96 flex flex-col   mx-auto  gap-6 shadow-lg p-7' onSubmit={loginHandler}   action="">
      <div className=' gap-2 flex justify-center items-center pb-[50px]'>
        <RiLoginBoxFill className='text-2xl text-blue-400'/>
        <p className='font-bold text-[#81cfd1]  text-2xl '>Login</p>
        </div>
        <hr className='border border-blue-300 ' />
        <div >
        
        <div className='flex flex-col gap-4 '>
        <input value={email} onChange={e=> setEmail(e.target.value)} className='input  border-[#81cfd1] px-12 ' type="text" name="" id="" placeholder='Your Emial Address' />
        <input value={password} onChange={e=> setPassword(e.target.value)} className='input  border-[#81cfd1] px-12 '  type="text" name="" id="" placeholder='Enter Your Password' />
        
        </div>
        <div className='flex gap-3 p-6 '>
            <button className='  px-12 register rounded py-2 text-blue-600 bg-[#81cfd1]'>Login</button>
            <Link to={'/register'}>
            <button className='px-12 py-2 login rounded text-white bg-pink-500'>Logout</button>
            </Link>
        </div>
        </div>
      </form>
      </div>
      </div>
      
  )
}

export default Login
