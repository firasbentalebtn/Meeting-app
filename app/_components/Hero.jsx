"use client"
import { Button } from '@/components/ui/button'
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
       
        <div className='text-center max-w-3xl'>
        <h2 className='text-xl mt-5 text-slate-500'>LinkUp is your scheduling automation platform designed to eliminate the hassle of back-and-forth emails when finding the perfect meeting time, offering much more beyond just scheduling.</h2>
        <div className='flex gap-4 flex-col mt-5'>
            <h3 className='text-sm'>Sign Up free with Google</h3>
            <div className='flex justify-center gap-8'>
               <LoginLink> <Button className="p-7 flex gap-4">
                    <Image src='/google.png' alt='google'
                    width={40} height={40}/>
                    Sign up with Google</Button>
                    </LoginLink>
                  
            </div>
            <LoginLink> <h2><span className='text-primary'>Sign up Free with Email.</span> No Credit card required</h2></LoginLink> 
        </div>
        </div>
    </div>
  )
}

export default Hero