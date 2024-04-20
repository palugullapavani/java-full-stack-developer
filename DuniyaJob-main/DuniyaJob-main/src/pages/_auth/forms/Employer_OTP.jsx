import { Box, Button, Input, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../../components/Navbar'
import { Link } from 'react-router-dom'

const OTPPage = () => {
  return (

    <>

      <div className="sticky">
        <Navbar />
      </div>

      <div className=" flex flex-col mt-20 p-10 bg-gray-900 text-white rounded-lg">
        <Box sx={{ p: '20px', alignSelf: 'center ' }}>
          <Typography sx={{ p: '15px' }}>
            Enter the OTP That you Received on Your Given Mail
          </Typography>

          <Input sx={{ border: 'solid white', width: '100%', color: 'white', borderRadius: '10px', p: '15px' }}></Input>

        </Box>
          {



            <Button sx={{ width: 'max-content', alignSelf: 'center', border: 'solid ' }}  >
              <Link to={'/Employer-set-password'}>
                Verify
              </Link>
            </Button>

          }


      </div>

    </>
  )
}

export default OTPPage