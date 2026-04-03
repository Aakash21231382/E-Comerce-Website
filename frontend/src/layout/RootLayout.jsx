import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      
      <Navbar />

      <main style={{
        flex: 1,
        marginTop: "70px"
      }}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout