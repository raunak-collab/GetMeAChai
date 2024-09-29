"use client"
import React, { useEffect, useState } from 'react';
import { fetchUser } from '@/actions/useractions';


const Page = ({ params }) => {

  const [currentUser, setcurrentUser] = useState({})

  useEffect(() => {
    document.title = `Support ${params.username} - Get Me a Chai`
    getData()
  }, [])


  const getData = async () => {
    const { username } = params;
    const u = await fetchUser(username);
    setcurrentUser(u);
  };


  return (
    <>
      <div className='cover w-full bg-red-100 relative'>
        <img height={50} className='object-cover w-full h-[200px] md:h-[300px] lg:h-[400px]' src={currentUser.coverpic} alt="" />

        <div className='absolute -bottom-[49px] left-[50%] transform -translate-x-1/2 border-2 rounded-full'>
          <img className='rounded-full' width={100} height={100} src={currentUser.profilepic} alt="" />
        </div>
      </div>

      <div className="info flex justify-center items-center my-14 flex-col gap-1 text-center px-4">
        <div className='font-bold text-[19px]'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Lets help {params.username} get a chai!
        </div>
        <div className='text-slate-500'>
          Payments . {currentUser.name} has raised for donating payments
        </div>

        <div className="payment flex flex-col md:flex-row gap-3 w-full md:w-[80%] mt-12">
          {/* Supporters Section */}
          <div className="supporters p-10 w-full md:w-1/2 bg-slate-900">
            <h2 className='font-bold text-2xl my-4'>Supporters</h2>
            <ul className='mx-4 text-[15px]'>
              <li className='my-5 items-center flex gap-2'>
                <img width={32} src="user.gif" alt="" />
                <span>Kousar donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='my-5 items-center flex gap-2'>
                <img width={32} src="user.gif" alt="" />
                <span>Kousar donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
              </li>
              <li className='my-5 items-center flex gap-2'>
                <img width={32} src="user.gif" alt="" />
                <span>Kousar donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
              </li>
            </ul>
          </div>

          {/* Payment Section */}
          <div className="makePayment w-full md:w-1/2 p-10 bg-slate-900">
            <h2 className='text-2xl font-bold my-5'>Make Payment</h2>
            <div className='flex gap-3 flex-col'>
              <input className='p-3 w-full bg-slate-800 rounded-lg' placeholder='Enter Name' type="text" />
              <input className='p-3 w-full bg-slate-800 rounded-lg' placeholder='Enter Message' type="text" />
              <input className='p-3 w-full bg-slate-800 rounded-lg' placeholder='Enter Amount' type="text" />
              <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>
            </div>

            {/* Choose predefined amount */}
            <div className='flex flex-wrap gap-2 mt-5'>
              <button className='p-3 bg-slate-800 rounded-lg'>Pay $10</button>
              <button className='p-3 bg-slate-800 rounded-lg'>Pay $20</button>
              <button className='p-3 bg-slate-800 rounded-lg'>Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page;
