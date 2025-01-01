
import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <SignIn/>
      
    </div>
  )
}

export default SignInPage
