
import React from 'react'
import imagefirst from "../../../assets/img1.jpg"

const AboutUs = () => {
  return (
    <>
    <div>
    <div className=' text-white justify-center mt-12 font-mono text-6xl'>ABOUT US</div>
    <div className='flex flex-col'>
      <div className=' flex'>
       <img src={imagefirst} alt='image' className=' mt-10 align-middle justify-center ml-20 mr-20 hover:opacity-0.75' height={"500px"} width={"500px"}  />
      </div>
      <div>
    <p className=' flex text-yellow-500 ml-32 mr-32 mt-7 text-xl font-serif'>
            Duniya Jobs is largest job portal owned and operated by .... It was founded in 2024 and is headquartered in India. With live jobs and large CVs, DUniya Jobs currently service many corporate clients. The company operates various office in state across the countries.</p>

    <p className=' flex text-yellow-500 ml-32 mr-32 mt-7 text-xl font-serif '>
      With a deep understanding and insights on each market, along with the latest technology, Duniya Jobs connects jobseekers with a wide range of job opportunities and deliver exceptional value to employers. Duniya Jobs offers its clients a bouquet of end to end recruitment services, including resume database, job listings, email marketing, SMS marketing, etc. In addition, it also features services for job seekers. It includes resume writing, profile enhancement, recruiter reach for job seekers.
    </p>
    </div>
    </div>
    </div>
    </>
  )
}

export default AboutUs