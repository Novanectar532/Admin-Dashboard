import React from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom'

function Applayout() {
  return (
    <>
    <div className='flex flex-row'>
        <Sidebar className=' bg-amber-200' />
        <div className='w-full flex flex-col'>
           <Header />
           <Outlet/>
        </div>
    </div>
    </>

  )
}

export default Applayout