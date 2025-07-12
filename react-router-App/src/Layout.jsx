import React from 'react'
import { Outlet } from 'react-router'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'

function Layout() {
  return (
   <>
    <Header/>
    <Outlet/>   
    <Footer/>
   </>
  )
}

export default Layout