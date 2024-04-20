import React, { useEffect } from 'react'
import { preLoaderAnim } from '../animations/'
// import logo from '../../src/assets/dj-white.png'
import "./preloader.css"


const PreLoader = () => {

    useEffect(() => {
        preLoaderAnim();
    }, []);
    return ( 
    <>
        <div className="preloader no-scrollbar">
            <div className='space-x-3 texts-container  '>
                <span className=" text-blue-500" > FIND  </span> 
                <span className=" text-blue-500"> THE </span> 
                <span className=" text-blue-500"> PERFECT  </span> 
                <span className=" text-blue-500"> JOBS  </span> 
                <span className=" text-blue-500"> HERE  </span> 
                <span className=" text-blue-500"> ....  </span>     
            </div>
        </div> 

    </>
    )
}

export default PreLoader