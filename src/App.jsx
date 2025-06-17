import { useState, use } from 'react'
import Applayout from './pages/Applayout'
import './App.css'
import React from 'react'
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom'
import Dashboard from './component/Dashbaord/Dashboard'
import Candiadate from './component/Candidate/Candiadate'
import Company from './component/Company/Company'
import Setting from './component/setting/Setting'

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Dashboard/>
        },
        {
          path: '/candidate',
          element: <Candiadate />
        },{
          path: '/company',
          element: <Company />
        },{
          path: '/setting',
          element: <Setting/>
        }
      ]
    }
  ])

  return (
     <RouterProvider router={router} />
  ) 
  
}

export default App
