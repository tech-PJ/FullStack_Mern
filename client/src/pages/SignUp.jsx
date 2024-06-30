import React from 'react'

const SignUp = () => {
  return (
    <div className='p-3  max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' className='border p-3 rounded-lg' id='username'/>
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password'/>
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp