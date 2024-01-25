import React from 'react'
import GoogleButton from 'react-google-button';
import { Center, Square, Circle,Box } from '@chakra-ui/react'

const Login = () => {
  return (
   <div className='flex-col items-center justify-center mx-auto'>
      <div className='mt-[50%] p-3 bg-red-500 rounded-[8px] w-[90%] flex-col items-center justify-center mx-auto'>
        <p className='text-3xl font-bold text-center'>Login</p>
        <GoogleButton className='mt-5 mx-auto' />
      </div>
      <p className='font-semibold text-lg ml-6 mt-2'>Not Regitered <span className='text-blue-400'>SignIn</span></p>
</div>      
  )
}

export default Login