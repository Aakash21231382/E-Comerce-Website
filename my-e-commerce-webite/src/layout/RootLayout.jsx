import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <div style={{ marginTop: "70px", minHeight: "80vh" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  )
}

export default RootLayout