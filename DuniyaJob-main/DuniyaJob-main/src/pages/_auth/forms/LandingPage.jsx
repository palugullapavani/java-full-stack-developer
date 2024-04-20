import React, { useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import '../../../styles/landing.css';  // Ensure that Tailwind CSS styles are imported
import { Link } from 'react-router-dom';
import Footer from '../../../components/Footer';

const LandingPage = () => {
  // useEffect(() => {
  //   // Apply Tailwind CSS class to the body element
  //   document.body.classList.add('overflow-hidden');

  //   // Clean up the class on component unmount
  //   return () => {
  //     document.body.classList.remove('overflow-hidden');
  //   };
  // }, []); // Empty dependency array ensures that the effect runs only once


  return (
    <>
    <div className=' overflow-y-scroll '>
      
      <section className="w-screen h-screen flex flex-col">
        <div className="sticky">
          <Navbar />
        </div>

        <div className="flex-1 mt-4 flex items-center justify-center">
          <div className="banner-img">
            <div className="title text-center">
              <h3>
                Find the <span>Right Job</span> In the
                <br />
                <span>Right Companies</span>
              </h3>
              <div className=" sm:text-xl text-gray-400">
                <p>Got fired..!! Get Ready to be hired</p>
              </div>
            </div>
          </div>
        </div>
      
      <div className=' flex flex-row justify-center space-x-6 '>
      <div className="button mb-28" data-testid="btn">
        <Link to="/JobSearch">Browse Jobs</Link>
      </div>
      <div className="button mb-28" data-testid="btn">
        <Link to="/PostJob">Post Jobs</Link>
      </div>
      </div>
      </section>

      <Footer />

    </div>

    </>
  );
};

export default LandingPage;