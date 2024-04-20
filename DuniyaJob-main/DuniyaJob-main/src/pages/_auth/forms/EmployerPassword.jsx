/* eslint-disable jsx-a11y/anchor-is-valid */
import { Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Navbar';

const EmployerPassword = () => {
  return (
    <>
    <div className="sticky">
          <Navbar />
        </div>

    <section className="h-full flex flex-col md:flex-row justify-center space-y-10 mt-16 mx-5 my-3 md:space-y-0 md:space-x-16 items-center  bg-gray-900 rounded-lg ">
      <div className="md:w-1/3 mt-36 text-white ">
      <Typography sx={{pb:"10px",textAlign:"center"}}>
      Employer Signup
      </Typography>
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt="Sample img" />
          
      </div>
      <div className="md:w-1/3  bg-white p-12 rounded-lg">

        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="password" placeholder="Password" />
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mt-5" type="password" placeholder="Confirm Password" />

        <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer mt-2">
          <input className="mr-1" type="checkbox" />
          <span className='text-black'>Remember Me</span>
        </label>
        <div className="text-center md:text-left">
          <Link to="/Home">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit">Register</button>
          </Link>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          {/* <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p> */}
        </div>
        
      </div>
    </section>
    </>
  );
}

export default EmployerPassword;