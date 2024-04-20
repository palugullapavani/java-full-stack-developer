
// import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (

    <div className=' w-full md:flex h-screen'>
     
      <section className={`flex flex-1  overflow-y-scroll no-scrollbar 2xl:h-screen flex-col `} >
        <Outlet />
      </section>


    </div>
  )
}

export default RootLayout