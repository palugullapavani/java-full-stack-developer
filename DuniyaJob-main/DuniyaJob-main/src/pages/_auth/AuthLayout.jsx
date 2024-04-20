// import React from 'react'
import { Outlet,Navigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const AuthLayout = () => {

  const isAuthenticated = false; 

  return (
    <>
      {isAuthenticated ? (
        <Navigate to={"/JobSearch"} />
      ) : (
        <>
        
          <section className="flex  justify-center items-center flex-col  w-full ">
            <Outlet />
          </section>

          {/* <div className=" text-white mt-20">hello</div> */}
          
        </>
      )}
    </>
  )
}

export default AuthLayout