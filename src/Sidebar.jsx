import React from 'react'
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();
  return (
    <>
         <aside className="w-64 h-screen bg-white shadow-md hidden lg:block">
        <h1 className="text-2xl  font-bold text-blue-600 pl-6 pt-2">NextHire</h1>
        <nav className="mt-6  text-lg  pl-5.5  border-blue-200">
          <a onClick={()=>navigate('/')} className=" cursor-pointer block p-2 rounded ">
            Dashboard
          </a>
          <a onClick={()=>navigate('/candidate')} className=" cursor-pointer block p-2 rounded ">
           Candidate
          </a>
          <a onClick={()=>navigate('/company')} className=" cursor-pointer block p-2 rounded ">
            Company
          </a>
          
        </nav>
       
        <nav className=' border-blue-200 text-lg pl-5.5 '>
        <a href="#"  onClick={()=>navigate('/setting')}  className=" cursor-pointer block p-2 rounded ">
            Setting
          </a>
          <a href="#" className=" cursor-pointer block p-2 rounded ">
            Help Center
          </a>
          <a href="#" className=" cursor-pointer block p-2 rounded ">
            Logout
          </a>
        </nav>
      </aside>
    </>
  )
}

export default Sidebar