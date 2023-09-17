"use client"
import Image from 'next/image'
import React from 'react'
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from 'next/navigation'

function NavBar() {
  const router:any= useRouter()

  const { isSignedIn, user, isLoaded } = useUser();

  return isSignedIn&&(
    <div className='bg-[#f9fbff] flex justify-between
     p-3 px-10 border-b-[1px] shadow-sm '>
        <div className='flex gap-10 items-center'>
            <Image src='/3.png'
            alt='logo'
            width={120}
            height={60}
            />
            <div className='hidden md:flex gap-6'>
                <h2 className='hover:bg-gray-100 p-2
                rounded-md cursor-pointer transition-all'
                onClick={()=>router.push('/ridesh')}
                >Rideshare</h2>
                <h2 className='hover:bg-gray-100 p-2
                rounded-md cursor-pointer transition-all'
                onClick={()=>router.push('/history')}>History</h2>
                <h2 className='hover:bg-gray-100 p-2
                rounded-md cursor-pointer transition-all'
                onClick={()=>router.push('/ridesharing')}>Contact</h2>
                <h2 className='hover:bg-gray-100 p-2
                rounded-md cursor-pointer transition-all'
                onClick={()=>router.push('/')}>Home</h2>
            </div>
        </div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default NavBar
