import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
   <footer className='bg-slate-900 text-white flex h-14 items-center justify-center px-4'>
    <p className='text-center'>Copyright &copy; {currentYear} Get me A Chai - All rights reserved!</p>
   </footer>
  )
}

export default Footer