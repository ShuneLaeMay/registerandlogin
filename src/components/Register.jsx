import React, { useState } from 'react'
import {FaRegistered} from 'react-icons/fa'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import { useRegisterMutation } from '../redux/api/authApi'


const Register = () => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [password_confirmation,setPasswordConfirmation] = useState('')
  const [register] = useRegisterMutation()
  const nav = useNavigate()
  const registerHandler = async(e) => {
   try {
    e.preventDefault()
    const user = {name,email,password,password_confirmation}
    const {data}= await register(user)
    console.log(data)
    if(data?.success){
      nav('/login')
    }
   } catch (error) {
    console.log(error)
   }

  }
  return (
    <div className=''>
      <div className='p-6 justify-end bg-gray-500 shadow-lg '>
      <form className='w-96 flex flex-col h-screen mx-auto gap-6 shadow-lg p-7' onSubmit={registerHandler} >
      <div className='flex items-center justify-center gap-2 pb-[50px]'>
        <FaRegistered className='text-2xl text-blue-400'/>
        <p className='font-bold text-[#81cfd1]  text-2xl '>Register</p>
        </div>
        <hr className='border border-blue-300 ' />
        <div className='flex flex-col gap-4'>
        <input value={name} onChange={e=> setName(e.target.value)} className='input  border-[#81cfd1] px-12 '  type="text" name="" id="" placeholder='Your Name' />  
        <input value={email} onChange={e=> setEmail(e.target.value)} className='input  border-[#81cfd1] px-12 ' type="text" name="" id="" placeholder='Your Emial Address' />
        <input value={password} onChange={e=> setPassword(e.target.value)} className='input  border-[#81cfd1] px-12 '  type="text" name="" id="" placeholder='Enter Your Password' />    
        <input value={password_confirmation} onChange={e=> setPasswordConfirmation(e.target.value)} className='input  border-[#81cfd1] px-12 '  type="text" name="" id="" placeholder='Password Confirmation' />
        <div className='flex gap-2'>
          <p>Already have an account?</p>
          <Link to={'/login'}>
          <p className='text-blue-500'>Login</p>
          </Link>
        </div>
        <div className='flex gap-3 p-6 '>
            <button className='  px-12 register py-2 rounded text-blue-600 bg-[#81cfd1]'>Register</button>
            <Link to={'/login'}>
            <button className='px-12 py-2 login rounded text-white bg-pink-500'>Login</button>
            </Link>
        </div>
        </div>
      </form>
      </div>
      </div>
      
    
  )
}

export default Register
