"use client"
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton, SignedOut } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'


const MobileNav = () => {
  const pathname = usePathname()  
  return (
    <header className='header'>
        <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
            src="/logo.png"
            alt="ModaMatch"
            width={160}
            height={40}
        /> 
        </Link>
        <nav className='flex gap-2'>
            <SignedIn>
                <UserButton afterSignOutUrl='/'/>
                <Sheet>
                    <SheetTrigger>
                        <Image
                            src="/assets/icons/menu.svg"
                            alt="Menu"
                            width={32}
                            height={32}
                            className='cursor-pointer'
                        />
                    </SheetTrigger>
                    <SheetContent className='sheet-content sm:w-64'>
                        <>
                            <Image
                                src='/logo.png'
                                alt='ModaMatch'
                                width={160}
                                height={40}
                            />
                    <ul className='header-nav_elements'>
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname
                            return (
                                <li 
                                    key={link.route}
                                    className={
                                        `${isActive &&
                                        'gradient-text'
                                        }
                                        p-18
                                        flex
                                        whitespace-nowrap
                                        text-dark-700
                                        `
                                    }>
                                    <Link className='sidebar-link cursor-pointer' href={link.route}>
                                    <Image
                                        src={link.icon}
                                        alt='logo'
                                        width={24}
                                        height={24}
                                    />
                                    {link.label}
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                        </>
                    </SheetContent>
                </Sheet>
            </SignedIn>
            <SignedOut>
                <Link href='/sign-in' className='button bg-purple-gradient bg-cover'>
                    Sign In
                </Link>
            </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav