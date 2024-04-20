// <<<<<<< HEAD
// import Check from "./components/check";

import { Route, Routes } from "react-router-dom";
import AuthLayout from "./pages/_auth/AuthLayout";
import RootLayout from "./pages/_root/RootLayout";
import EmployeeSignup from "./pages/_auth/forms/EmployeeSignup";
import EmployeeLogin from "./pages/_auth/forms/EmployeeLogin";
import EmployerSignup from "./pages/_auth/forms/EmployerSignup";
import EmployerLogin from "./pages/_auth/forms/EmployerLogin";
import LandingPage from "./pages/_auth/forms/LandingPage";
import Home from "./pages/_root/innerpages/Home";
import './index.css';
import LoaderPage from "./pages/_auth/forms/LoaderPage";
import JobSearch from "./pages/_root/innerpages/JobSearch";
import PostJobs from "./pages/_root/innerpages/PostJobs";
import Footer from '../src/components/Footer';
import OTPPage from "./pages/_auth/forms/OTPPage";
import EmployeePassword from "./pages/_auth/forms/EmployeePassword";
import Employer_OTP from "./pages/_auth/forms/Employer_OTP";
import EmployerPassword from "./pages/_auth/forms/EmployerPassword";
import FAQPage from "./pages/_root/footerpages/FAQPage";
import AboutUs from "./pages/_root/footerpages/AboutUs";
import ForgetPassword from "./pages/_auth/forms/ForgetPassword";

function App() {
  // const [color, setcolor] = useState("Blue")
  // const click = color => {
  //   setcolor(color)
  // }
  return (
    <main className="bg-pink-900 flex-1 bg-bgimage overflow-x-hidden no-scrollbar justify-center align-middle ">
      <div>
        
              
    <Routes>
      {/* public routes */}
      <Route element={<AuthLayout />}>

        {/* <Route path="/Employee sign-up" element={<EmployeeSignup />} /> */}
        <Route  path="/Home" element={<LandingPage />} />
        <Route index path="/" element={<LoaderPage />} />

      {/* Employee ........... */}
        <Route path="/Employee-sign-up" element={<EmployeeSignup />} />
        <Route path="/Employee-login" element={<EmployeeLogin />} />
      {/* Employer ............ */}
        <Route path="/Employer-sign-up" element={<EmployerSignup />} />
        <Route path="/Employer-login" element={<EmployerLogin />} />
        <Route path="/otp" element={<OTPPage />}/>
        <Route path="/employer-verification-otp" element={<Employer_OTP />}/>
        <Route path="/Employee-set-password" element={<EmployeePassword />}/>
        <Route path="/Employer-set-password" element={<EmployerPassword />}/>
        <Route path="/forget-password" element={<ForgetPassword />}/>

      </Route>

      {/* private routes */}
      <Route element={<RootLayout />}>
{/* 
        <Route index element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/all-users" element={<AllUsers />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/update-post/:id" element={<EditPost />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/profile/:id/*" element={<Profile />} />
        <Route path="/update-profile/:id" element={<UpdateProfile />} />
        <Route path="/chat/:id/" element={<Chat />} />
        <Route path="/chats/:id/" element={<ChatSection />}/> */}
        {/* <Route path="/Home" element={<Home/>} /> */}
        <Route path="/JobSearch" element={<JobSearch/>} />
        <Route path="/PostJob" element={<PostJobs/>} />
        <Route path="/FAQ" element={<FAQPage />}/> 
        <Route path="/About-us" element={<AboutUs/>}/>
        
        
      </Route>
    </Routes>

           
          
            {/* <Footer /> */}


        
        </div>
  </main>

  

// >>>>>>> 39dcba460153505831c5c3cb5a25c1ee308748e0
  );
}

export default App;
