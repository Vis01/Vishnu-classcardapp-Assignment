import React, { useState } from 'react'
import { FaChevronDown,FaChevronUp } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { TbMessage } from "react-icons/tb";
import Navbar from './Navbar';

const Header = () => {
    const [isopenMenu,setopenMenu]=useState(false);
  return (
    <div className='bg-white'>
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between border-b-2">
        
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <img className='h-8 w-8 ' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAYFBMVEX///+6z+MxgLkAcbJ/qc6bu9gaeLUAX6oAb7EAaK5Hir6GrtEAZKwAYave6PIAZq3P3ev4+/1AhrwAbbDm8PfV4u71+fzC3OyPwd2jy+O01OjL4e6ZxuCUw9+ax+Cqz+VMkBMbAAAA+ElEQVR4AbWPR4KEMAwEexA5Z+wBmf//ciWCN89t+lKWiuDGG/MIKFRGcRwpQwoe3iUpZTlQlGlaFkCeUZrcNkiJqKpRCqhEXQnS4JKkadquUlZd2yjpkmEm5wzoB6KhB44xxJW+bMoWGKlpaARaGXv41O3JaTrZ1vg/85fzYozV+WnMUzAGVVXcbjWbRBxvG4uNB2kUXdKpMyPMQUzaN43/kc0h//ksXZ99faEr3b9VZBhPjje/2N0wy3p2xmyzKGaz+1+y3IcBK9hke4zL1yrsq4ysdJe0x3K+5XzQXrKWiXdtJG4BdhbWuK11i3J1blUuztZ4Xz4APhcXVhZ71jwAAAAASUVORK5CYII='/>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="relative ml-3 ">
            
            <div className='flex items-center'>
            <h1 className='text-slate-400  px-2 text-3xl' ><TbMessage /></h1>
            <h1 className='text-slate-400   px-2 text-3xl' ><IoCartOutline /></h1>
            
              <button type="button"  className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"  >
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              </button>
              <div className='flex justify-center items-center text-center'>
               
                <h1 className='text-slate-800   pl-2' >Vishnu Jangid</h1>
                <h1 className='text-slate-400  mx-2 text-lg hover:cursor-pointer' onClick={()=>setopenMenu(!isopenMenu)}>{isopenMenu?<FaChevronUp />:<FaChevronDown />} </h1>      
              </div>
            </div>
  
           {!isopenMenu ? "":
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu"  >
             
              <a  className="block px-4 py-2 text-sm text-gray-700" >Your Profile</a>
              <a className="block px-4 py-2 text-sm text-gray-700" >Settings</a>
              <a  className="block px-4 py-2 text-sm text-gray-700">Sign out</a>
            </div>
           }
          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  </div>
  )
}

export default Header
