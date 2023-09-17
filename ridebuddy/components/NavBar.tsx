"use client"
import Image from 'next/image';
import React from 'react';
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
import Link from 'next/link';

function NavBar() {
  const { isSignedIn } = useUser();

  return (
    <div className='bg-[#f9fbff] flex flex-row md:flex-row justify-between p-3 px-10 border-b-[1px] shadow-sm '>
      <div className='flex  p-3 gap-4  '>
        {/* Use hidden md:block to hide the Image on screens below 750px */}
        <div className='md:w-32 md:h-16 hidden md:block'>
          {isSignedIn && (
            <Image src='/3.png' alt='logo' width={120} height={60} />
          )}
        </div>
        <div className='md:flex gap-6 '>
          <Link href='/ridesh'>
            <span className={`text-base md:text-xl hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all`}>
              Rideshare
            </span>
          </Link>
          <Link href='/history'>
            <span className={`text-base md:text-xl hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all`}>
              History
            </span>
          </Link>
          {/* <Link href='/ridesharing'>
            <span className={`text-base md:text-xs hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all`}>
              Contact
            </span>
          </Link> */}
          <Link href='/'>
            <span className={`text-base md:text-xl hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all`}>
              Home
            </span>
          </Link>

        </div>
        
      </div>
      
          {isSignedIn && (
        <div className='mt-4 md:mt-0 p-3 '>
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
          
      
    </div>
  );
}

export default NavBar;
