import React from 'react'
import { Outlet } from "react-router-dom";
import SideBar from './Sidebar';
import Header from './Header';
const Body = () => {
  return (
    <div className="w-full h-full flex-col justify-center" >
    <Header/>
    <div className="w-full h-full flex  bg-blue-50" >
        <div className='w-1/3 lg:w-3/12 '><SideBar/></div>
        <div className='w-full'> <Outlet/></div>     
    </div>
    
</div>
  )
}

export default Body;