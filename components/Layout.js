import React from 'react'
import Footer2 from './footer'
import Header from './Header3'

function Layout({children}) {
  return (
    <div className='h-screen'>
    <Header/>
    {children}
    <Footer2/>
    </div>
  )
}

export default Layout