import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className='mt-28 min-[425px]:mt-22'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout