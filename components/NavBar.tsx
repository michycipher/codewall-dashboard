import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// import logo from '@/public/img/'



const NavBar = () => {
  return (
    <div className='bg-[#053104] dark:bg-slate-700 text-white py-2 px-5 flex justify-between w-full'>
      <Link href="/" >
        {/* <Image src={logo} alt="Code wall logo" width={40} /> */}
        <p className='text-5xl'>Code wall</p>
      </Link> 

        

      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt='@shadcn' />
            <AvatarFallback>CW</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
           <Link href='/profile'>Profile</Link> 
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='/auth'>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default NavBar
