"use client"
import React, { useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {

  const { data: session } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)

  return (
    <nav className='bg-slate-900 text-white flex flex-col md:flex-row md:h-14 items-center justify-between py-1 pt-2 md:py-0 px-6'>
      <div className="logo flex justify-center items-center font-bold text-lg gap-3">
        <Link href="/" className="logo flex justify-center items-center font-bold text-lg gap-3">
          <img src="tea.gif" width={25} alt="Tea" />
          <span className='text-xl '>GetMeAChai!</span>
        </Link>
      </div>

      <div className='flex gap-4 m-3 flex-col md:flex-row'>
        {session && (
          <div className='relative'>
            <button 
              onClick={() => setShowDropdown(!showDropdown)} 
              onBlur={() => setTimeout(() => setShowDropdown(false), 100)} 
              id="dropdownDefaultButton" 
              data-dropdown-toggle="dropdown" 
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
              type="button"
            >
              Welcome {session.user.email} 
              <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            <div id="dropdown" className={`absolute left-0 md:left-auto z-10 ${showDropdown ? "" : "hidden"} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
                </li>
                <li>
                  <Link href="#" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {session ? (
          <button 
            className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center me-2' 
            onClick={() => signOut()}
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2'>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
